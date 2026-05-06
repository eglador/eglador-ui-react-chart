"use client";

import * as React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "../../lib/utils";
import { getSeriesColor } from "./colors";
import {
  DEFAULT_CHART_MARGIN,
  type ChartCurveType,
  type ChartData,
  type ChartMargin,
  type ChartSeries,
} from "./types";

export interface AreaChartProps {
  data: ChartData;
  xKey: string;
  series: ChartSeries[];
  responsive?: boolean;
  width?: number;
  height?: number;
  margin?: ChartMargin;
  stacked?: boolean;
  reverseStackOrder?: boolean;
  gradient?: boolean;
  curveType?: ChartCurveType;
  strokeWidth?: number;
  showGrid?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  className?: string;
}

export function AreaChart({
  data,
  xKey,
  series,
  responsive = true,
  width = 600,
  height = 300,
  margin = DEFAULT_CHART_MARGIN,
  stacked = false,
  reverseStackOrder = false,
  gradient = true,
  curveType = "monotone",
  strokeWidth = 2,
  showGrid = true,
  showXAxis = true,
  showYAxis = true,
  showTooltip = true,
  showLegend = false,
  className,
}: AreaChartProps) {
  const gradientId = React.useId();

  const chartChildren = (
    <>
      {gradient && (
        <defs>
          {series.map((s, i) => {
            const color = getSeriesColor(s.color, i);
            return (
              <linearGradient
                key={s.key}
                id={`${gradientId}-${s.key}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                <stop offset="100%" stopColor={color} stopOpacity={0.02} />
              </linearGradient>
            );
          })}
        </defs>
      )}
      {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />}
      <XAxis
        dataKey={xKey}
        hide={!showXAxis}
        stroke="#71717a"
        fontSize={12}
        tickLine={false}
        axisLine={{ stroke: "#e4e4e7" }}
      />
      <YAxis
        hide={!showYAxis}
        stroke="#71717a"
        fontSize={12}
        tickLine={false}
        axisLine={false}
      />
      {showTooltip && (
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e4e4e7",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
          cursor={{ stroke: "#a1a1aa", strokeDasharray: "3 3" }}
        />
      )}
      {showLegend && (
        <Legend wrapperStyle={{ fontSize: "0.875rem", paddingTop: 8 }} />
      )}
      {series.map((s, i) => {
        const color = getSeriesColor(s.color, i);
        return (
          <Area
            key={s.key}
            type={curveType}
            dataKey={s.key}
            name={s.label ?? s.key}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={gradient ? `url(#${gradientId}-${s.key})` : color}
            fillOpacity={gradient ? 1 : 0.3}
            stackId={stacked ? "stack" : undefined}
          />
        );
      })}
    </>
  );

  const sharedProps = { data, margin, reverseStackOrder };

  return (
    <div className={cn(responsive ? "w-full" : "", className)}>
      {responsive ? (
        <ResponsiveContainer width="100%" height={height}>
          <RechartsAreaChart {...sharedProps}>{chartChildren}</RechartsAreaChart>
        </ResponsiveContainer>
      ) : (
        <RechartsAreaChart width={width} height={height} {...sharedProps}>
          {chartChildren}
        </RechartsAreaChart>
      )}
    </div>
  );
}

AreaChart.displayName = "AreaChart";
