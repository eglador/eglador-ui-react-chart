import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  LineChart,
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
  showGrid: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  showTooltip: boolean;
  showLegend: boolean;
  showDots: boolean;
  curveType: ChartCurveType;
  strokeWidth: number;
};

const meta: Meta<StoryArgs> = {
  title: "Charts/LineChart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Çoklu seri destekli çizgi grafiği. Controls panelinden `data` ve `series` JSON'larını düzenleyerek kendi verilerinizle test edin.",
      },
    },
  },
  args: {
    data: MONTHLY_DATA,
    xKey: "month",
    series: [
      { key: "revenue", label: "Gelir" },
      { key: "expenses", label: "Gider" },
      { key: "profit", label: "Kâr" },
    ],
    responsive: true,
    width: 600,
    height: 320,
    margin: { top: 8, right: 16, bottom: 8, left: 8 },
    showGrid: true,
    showXAxis: true,
    showYAxis: true,
    showTooltip: true,
    showLegend: true,
    showDots: false,
    curveType: "monotone",
    strokeWidth: 2,
  },
  argTypes: {
    data: {
      control: "object",
      table: { category: "Data" },
      description: "Veri dizisi (her item bir nokta)",
    },
    xKey: {
      control: "text",
      table: { category: "Data" },
      description: "X eksenindeki kategori için item key'i",
    },
    series: {
      control: "object",
      table: { category: "Data" },
      description: "Çizgi tanımları: { key, label?, color? }",
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
    showGrid: { control: "boolean", table: { category: "Display" } },
    showXAxis: { control: "boolean", table: { category: "Display" } },
    showYAxis: { control: "boolean", table: { category: "Display" } },
    showTooltip: { control: "boolean", table: { category: "Display" } },
    showLegend: { control: "boolean", table: { category: "Display" } },
    showDots: { control: "boolean", table: { category: "Display" } },
    curveType: {
      control: "select",
      options: ["linear", "monotone", "step", "stepBefore", "stepAfter"],
      table: { category: "Display" },
    },
    strokeWidth: {
      control: { type: "number", min: 1, max: 6, step: 1 },
      table: { category: "Display" },
    },
  },
  render: (args) => (
    <div className="max-w-3xl">
      <LineChart {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Single: Story = {
  args: {
    series: [{ key: "revenue", label: "Gelir", color: "#3b82f6" }],
  },
};

export const StepCurve: Story = {
  args: { curveType: "step", showDots: true },
};
