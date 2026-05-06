import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AreaChart,
  type ChartCurveType,
  type ChartData,
  type ChartMargin,
  type ChartSeries,
} from "../components/chart";
import { MONTHLY_DATA } from "./_shared";

type StoryArgs = {
  data: ChartData;
  xKey: string;
  series: ChartSeries[];
  responsive: boolean;
  width: number;
  height: number;
  margin: ChartMargin;
  stacked: boolean;
  reverseStackOrder: boolean;
  gradient: boolean;
  curveType: ChartCurveType;
  strokeWidth: number;
  showGrid: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  showTooltip: boolean;
  showLegend: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Charts/AreaChart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Doldurulmuş alan grafiği. Controls panelinden `data` ve `series` JSON'larını düzenleyerek kendi verilerinizle test edin.",
      },
    },
  },
  args: {
    data: MONTHLY_DATA,
    xKey: "month",
    series: [
      { key: "revenue", label: "Gelir" },
      { key: "expenses", label: "Gider" },
    ],
    responsive: true,
    width: 600,
    height: 320,
    margin: { top: 8, right: 16, bottom: 8, left: 8 },
    stacked: false,
    reverseStackOrder: false,
    gradient: true,
    curveType: "monotone",
    strokeWidth: 2,
    showGrid: true,
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showLegend: true,
  },
  argTypes: {
    data: { control: "object", table: { category: "Data" } },
    xKey: { control: "text", table: { category: "Data" } },
    series: {
      control: "object",
      table: { category: "Data" },
      description: "Alan tanımları: { key, label?, color? }",
    },
    responsive: { control: "boolean", table: { category: "Layout" } },
    width: {
      control: { type: "number", min: 200, max: 1200, step: 20 },
      table: { category: "Layout" },
      if: { arg: "responsive", truthy: false },
    },
    height: {
      control: { type: "number", min: 200, max: 600, step: 20 },
      table: { category: "Layout" },
    },
    margin: { control: "object", table: { category: "Layout" } },
    stacked: { control: "boolean", table: { category: "Display" } },
    reverseStackOrder: {
      control: "boolean",
      table: { category: "Display" },
      if: { arg: "stacked", truthy: true },
    },
    gradient: { control: "boolean", table: { category: "Display" } },
    curveType: {
      control: "select",
      options: ["linear", "monotone", "step", "stepBefore", "stepAfter"],
      table: { category: "Display" },
    },
    strokeWidth: {
      control: { type: "number", min: 1, max: 6, step: 1 },
      table: { category: "Display" },
    },
    showGrid: { control: "boolean", table: { category: "Display" } },
    showXAxis: { control: "boolean", table: { category: "Display" } },
    showYAxis: { control: "boolean", table: { category: "Display" } },
    showTooltip: { control: "boolean", table: { category: "Display" } },
    showLegend: { control: "boolean", table: { category: "Display" } },
  },
  render: (args) => (
    <div className="max-w-3xl">
      <AreaChart {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Stacked: Story = {
  args: { stacked: true },
};

export const Single: Story = {
  args: {
    series: [{ key: "revenue", label: "Gelir", color: "#10b981" }],
  },
};

export const NoGradient: Story = {
  args: { gradient: false },
};
