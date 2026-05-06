export type ChartDataItem = Record<string, string | number | null | undefined>;

export type ChartData = ChartDataItem[];

export type ChartSeries = {
  key: string;
  label?: string;
  color?: string;
};

export type PieDataItem = {
  name: string;
  value: number;
  color?: string;
};

export type TreemapDataItem = {
  name: string;
  size: number;
  color?: string;
  children?: TreemapDataItem[];
};

export type ChartCurveType =
  | "linear"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter";

export type ChartMargin = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export const DEFAULT_CHART_MARGIN: ChartMargin = {
  top: 8,
  right: 16,
  bottom: 8,
  left: 8,
};
