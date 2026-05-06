"use client";

import {
  RadarChart as RechartsRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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

export interface RadarChartProps {
  data: ChartData;
  angleKey: string;
  series: ChartSeries[];
  responsive?: boolean;
  width?: number;
  height?: number;
  margin?: ChartMargin;
  fillOpacity?: number;
  strokeWidth?: number;
  showGrid?: boolean;
  showAngleAxis?: boolean;
  showRadiusAxis?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  className?: string;
}

export function RadarChart({
  data,
  angleKey,
  series,
  responsive = true,
  width = 600,
  height = 320,
  margin = DEFAULT_CHART_MARGIN,
  fillOpacity = 0.4,
  strokeWidth = 2,
  showGrid = true,
  showAngleAxis = true,
  showRadiusAxis = false,
  showTooltip = true,
  showLegend = false,
  className,
}: RadarChartProps) {
  const chartChildren = (
    <>
      {showGrid && <PolarGrid stroke="#e4e4e7" />}
      {showAngleAxis && (
        <PolarAngleAxis dataKey={angleKey} stroke="#52525b" fontSize={12} />
      )}
      {showRadiusAxis && (
        <PolarRadiusAxis
          stroke="#a1a1aa"
          fontSize={11}
          axisLine={false}
          tickLine={false}
        />
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
        />
      )}
      {showLegend && (
        <Legend wrapperStyle={{ fontSize: "0.875rem", paddingTop: 8 }} />
      )}
      {series.map((s, i) => {
        const color = getSeriesColor(s.color, i);
        return (
          <Radar
            key={s.key}
            dataKey={s.key}
            name={s.label ?? s.key}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
            fillOpacity={fillOpacity}
          />
        );
      })}
    </>
  );

  return (
    <div className={cn(responsive ? "w-full" : "", className)}>
      {responsive ? (
        <ResponsiveContainer width="100%" height={height}>
          <RechartsRadarChart data={data} margin={margin}>
            {chartChildren}
          </RechartsRadarChart>
        </ResponsiveContainer>
      ) : (
        <RechartsRadarChart
          data={data}
          margin={margin}
          width={width}
          height={height}
        >
          {chartChildren}
        </RechartsRadarChart>
      )}
    </div>
  );
}

RadarChart.displayName = "RadarChart";
