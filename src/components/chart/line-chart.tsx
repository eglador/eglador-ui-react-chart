"use client";

import {
  LineChart as RechartsLineChart,
  Line,
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

export interface LineChartProps {
  data: ChartData;
  xKey: string;
  series: ChartSeries[];
  responsive?: boolean;
  width?: number;
  height?: number;
  margin?: ChartMargin;
  showGrid?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  showDots?: boolean;
  curveType?: ChartCurveType;
  strokeWidth?: number;
  className?: string;
}

export function LineChart({
  data,
  xKey,
  series,
  responsive = true,
  width = 600,
  height = 300,
  margin = DEFAULT_CHART_MARGIN,
  showGrid = true,
  showXAxis = true,
  showYAxis = true,
  showTooltip = true,
  showLegend = false,
  showDots = false,
  curveType = "monotone",
  strokeWidth = 2,
  className,
}: LineChartProps) {
  const chartChildren = (
    <>
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
      {series.map((s, i) => (
        <Line
          key={s.key}
          type={curveType}
          dataKey={s.key}
          name={s.label ?? s.key}
          stroke={getSeriesColor(s.color, i)}
          strokeWidth={strokeWidth}
          dot={showDots}
          activeDot={{ r: 4 }}
        />
      ))}
    </>
  );

  return (
    <div className={cn(responsive ? "w-full" : "", className)}>
      {responsive ? (
        <ResponsiveContainer width="100%" height={height}>
          <RechartsLineChart data={data} margin={margin}>
            {chartChildren}
          </RechartsLineChart>
        </ResponsiveContainer>
      ) : (
        <RechartsLineChart
          data={data}
          margin={margin}
          width={width}
          height={height}
        >
          {chartChildren}
        </RechartsLineChart>
      )}
    </div>
  );
}

LineChart.displayName = "LineChart";
