"use client";

import {
  BarChart as RechartsBarChart,
  Bar,
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
  type ChartData,
  type ChartMargin,
  type ChartSeries,
} from "./types";

export type BarChartLayout = "vertical-bars" | "horizontal-bars";

export interface BarChartProps {
  data: ChartData;
  xKey: string;
  series: ChartSeries[];
  responsive?: boolean;
  width?: number;
  height?: number;
  margin?: ChartMargin;
  layout?: BarChartLayout;
  stacked?: boolean;
  reverseStackOrder?: boolean;
  barCategoryGap?: number | string;
  barGap?: number;
  radius?: number;
  showGrid?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  className?: string;
}

export function BarChart({
  data,
  xKey,
  series,
  responsive = true,
  width = 600,
  height = 300,
  margin = DEFAULT_CHART_MARGIN,
  layout = "vertical-bars",
  stacked = false,
  reverseStackOrder = false,
  barCategoryGap = "10%",
  barGap = 4,
  radius = 4,
  showGrid = true,
  showXAxis = true,
  showYAxis = true,
  showTooltip = true,
  showLegend = false,
  className,
}: BarChartProps) {
  const isVerticalBars = layout === "vertical-bars";
  const rechartsLayout: "horizontal" | "vertical" = isVerticalBars
    ? "horizontal"
    : "vertical";

  const chartChildren = (
    <>
      {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />}
      {isVerticalBars ? (
        <>
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
        </>
      ) : (
        <>
          <XAxis
            type="number"
            hide={!showXAxis}
            stroke="#71717a"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey={xKey}
            hide={!showYAxis}
            stroke="#71717a"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: "#e4e4e7" }}
            width={80}
          />
        </>
      )}
      {showTooltip && (
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e4e4e7",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
          cursor={{ fill: "#f4f4f5" }}
        />
      )}
      {showLegend && (
        <Legend wrapperStyle={{ fontSize: "0.875rem", paddingTop: 8 }} />
      )}
      {series.map((s, i) => (
        <Bar
          key={s.key}
          dataKey={s.key}
          name={s.label ?? s.key}
          fill={getSeriesColor(s.color, i)}
          radius={radius}
          stackId={stacked ? "stack" : undefined}
        />
      ))}
    </>
  );

  const sharedProps = {
    data,
    layout: rechartsLayout,
    margin,
    barCategoryGap,
    barGap,
    reverseStackOrder,
  };

  return (
    <div className={cn(responsive ? "w-full" : "", className)}>
      {responsive ? (
        <ResponsiveContainer width="100%" height={height}>
          <RechartsBarChart {...sharedProps}>{chartChildren}</RechartsBarChart>
        </ResponsiveContainer>
      ) : (
        <RechartsBarChart width={width} height={height} {...sharedProps}>
          {chartChildren}
        </RechartsBarChart>
      )}
    </div>
  );
}

BarChart.displayName = "BarChart";
