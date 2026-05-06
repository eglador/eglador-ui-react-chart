"use client";

import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "../../lib/utils";
import { getSeriesColor } from "./colors";
import {
  DEFAULT_CHART_MARGIN,
  type ChartMargin,
  type PieDataItem,
} from "./types";

export interface PieChartProps {
  data: PieDataItem[];
  responsive?: boolean;
  width?: number;
  height?: number;
  margin?: ChartMargin;
  innerRadius?: number | string;
  outerRadius?: number | string;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
  showLabel?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  className?: string;
}

export function PieChart({
  data,
  responsive = true,
  width = 600,
  height = 300,
  margin = DEFAULT_CHART_MARGIN,
  innerRadius = 0,
  outerRadius = "80%",
  startAngle = 90,
  endAngle = -270,
  paddingAngle = 0,
  showLabel = false,
  showTooltip = true,
  showLegend = false,
  className,
}: PieChartProps) {
  const chartChildren = (
    <>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        paddingAngle={paddingAngle}
        label={
          showLabel
            ? ({ name, percent }) =>
                `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`
            : false
        }
        labelLine={showLabel}
      >
        {data.map((entry, i) => (
          <Cell key={entry.name} fill={getSeriesColor(entry.color, i)} />
        ))}
      </Pie>
      {showTooltip && (
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e4e4e7",
            borderRadius: "0.5rem",
            fontSize: "0.875rem",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
        />
      )}
      {showLegend && (
        <Legend wrapperStyle={{ fontSize: "0.875rem", paddingTop: 8 }} />
      )}
    </>
  );

  return (
    <div className={cn(responsive ? "w-full" : "", className)}>
      {responsive ? (
        <ResponsiveContainer width="100%" height={height}>
          <RechartsPieChart margin={margin}>{chartChildren}</RechartsPieChart>
        </ResponsiveContainer>
      ) : (
        <RechartsPieChart width={width} height={height} margin={margin}>
          {chartChildren}
        </RechartsPieChart>
      )}
    </div>
  );
}

PieChart.displayName = "PieChart";
