"use client";

import {
  Treemap as RechartsTreemap,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "../../lib/utils";
import { getSeriesColor } from "./colors";
import type { TreemapDataItem } from "./types";

export interface TreemapChartProps {
  data: TreemapDataItem[];
  responsive?: boolean;
  width?: number;
  height?: number;
  aspectRatio?: number;
  showLabels?: boolean;
  showTooltip?: boolean;
  className?: string;
}

type TreemapNodeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  depth?: number;
  index?: number;
  name?: string;
  color?: string;
  showLabels?: boolean;
};

function TreemapNode(props: TreemapNodeProps) {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    depth = 0,
    index = 0,
    name,
    color,
    showLabels = true,
  } = props;

  // depth=0 root container — render etme
  if (depth === 0) return null;

  const fill = getSeriesColor(color, index);
  const labelVisible = showLabels && width > 60 && height > 30;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="#ffffff"
        strokeWidth={2}
      />
      {labelVisible && (
        <text
          x={x + 8}
          y={y + 20}
          fill="#ffffff"
          fontSize={12}
          fontWeight={600}
        >
          {name}
        </text>
      )}
    </g>
  );
}

export function TreemapChart({
  data,
  responsive = true,
  width = 600,
  height = 320,
  aspectRatio = 4 / 3,
  showLabels = true,
  showTooltip = true,
  className,
}: TreemapChartProps) {
  const sharedProps = {
    data,
    dataKey: "size",
    nameKey: "name",
    aspectRatio,
    stroke: "#ffffff",
    content: <TreemapNode showLabels={showLabels} />,
  };

  const tooltip = showTooltip ? (
    <Tooltip
      contentStyle={{
        backgroundColor: "#ffffff",
        border: "1px solid #e4e4e7",
        borderRadius: "0.5rem",
        fontSize: "0.875rem",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
    />
  ) : null;

  return (
    <div className={cn(responsive ? "w-full" : "", className)}>
      {responsive ? (
        <ResponsiveContainer width="100%" height={height}>
          <RechartsTreemap {...sharedProps}>{tooltip}</RechartsTreemap>
        </ResponsiveContainer>
      ) : (
        <RechartsTreemap width={width} height={height} {...sharedProps}>
          {tooltip}
        </RechartsTreemap>
      )}
    </div>
  );
}

TreemapChart.displayName = "TreemapChart";
