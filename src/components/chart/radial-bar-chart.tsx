"use client";

import {
  RadialBarChart as RechartsRadialBarChart,
  RadialBar,
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

export interface RadialBarChartProps {
  data: PieDataItem[];
  responsive?: boolean;
  width?: number;
  height?: number;
  margin?: ChartMargin;
  innerRadius?: number | string;
  outerRadius?: number | string;
  startAngle?: number;
  endAngle?: number;
  cornerRadius?: number;
  showBackground?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  className?: string;
}

export function RadialBarChart({
  data,
  responsive = true,
  width = 600,
  height = 320,
  margin = DEFAULT_CHART_MARGIN,
  innerRadius = "20%",
  outerRadius = "100%",
  startAngle = 90,
  endAngle = -270,
  cornerRadius = 8,
  showBackground = true,
  showTooltip = true,
  showLegend = true,
  className,
}: RadialBarChartProps) {
  const chartChildren = (
    <>
      <RadialBar
        background={showBackground}
        dataKey="value"
        cornerRadius={cornerRadius}
      >
        {data.map((entry, i) => (
          <Cell key={entry.name} fill={getSeriesColor(entry.color, i)} />
        ))}
      </RadialBar>
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
        <Legend
          wrapperStyle={{ fontSize: "0.875rem", paddingTop: 8 }}
          content={
            <ul className="flex flex-wrap justify-center gap-4">
              {data.map((entry, i) => (
                <li
                  key={entry.name}
                  className="flex items-center gap-1.5 text-zinc-700"
                >
                  <span
                    className="inline-block size-2.5"
                    style={{
                      backgroundColor: getSeriesColor(entry.color, i),
                    }}
                  />
                  {entry.name}
                </li>
              ))}
            </ul>
          }
        />
      )}
    </>
  );

  const sharedProps = {
    cx: "50%",
    cy: "50%",
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    data,
    margin,
  };

  return (
    <div className={cn(responsive ? "w-full" : "", className)}>
      {responsive ? (
        <ResponsiveContainer width="100%" height={height}>
          <RechartsRadialBarChart {...sharedProps}>
            {chartChildren}
          </RechartsRadialBarChart>
        </ResponsiveContainer>
      ) : (
        <RechartsRadialBarChart
          width={width}
          height={height}
          {...sharedProps}
        >
          {chartChildren}
        </RechartsRadialBarChart>
      )}
    </div>
  );
}

RadialBarChart.displayName = "RadialBarChart";
