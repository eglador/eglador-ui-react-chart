"use client";

import { PieChart, type PieChartProps } from "./pie-chart";

export type DoughnutChartProps = PieChartProps;

export function DoughnutChart({
  innerRadius = "60%",
  ...props
}: DoughnutChartProps) {
  return <PieChart {...props} innerRadius={innerRadius} />;
}

DoughnutChart.displayName = "DoughnutChart";
