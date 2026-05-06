import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  BarChart,
  type BarChartLayout,
  type ChartData,
  type ChartMargin,
  type ChartSeries,
} from "../components/chart";
import { DEVICE_USAGE, MONTHLY_DATA } from "./_shared";

type StoryArgs = {
  data: ChartData;
  xKey: string;
  series: ChartSeries[];
  responsive: boolean;
  width: number;
  height: number;
  margin: ChartMargin;
  layout: BarChartLayout;
  stacked: boolean;
  reverseStackOrder: boolean;
  barCategoryGap: string;
  barGap: number;
  radius: number;
  showGrid: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  showTooltip: boolean;
  showLegend: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Charts/BarChart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Dikey veya yatay bar grafiği. Controls panelinden `data` ve `series` JSON'larını düzenleyerek kendi verilerinizle test edin.",
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
    layout: "vertical-bars",
    stacked: false,
    reverseStackOrder: false,
    barCategoryGap: "10%",
    barGap: 4,
    radius: 4,
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
      description: "Bar tanımları: { key, label?, color? }",
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
    layout: {
      control: "radio",
      options: ["vertical-bars", "horizontal-bars"],
      table: { category: "Bar" },
    },
    stacked: { control: "boolean", table: { category: "Bar" } },
    reverseStackOrder: {
      control: "boolean",
      table: { category: "Bar" },
      if: { arg: "stacked", truthy: true },
    },
    barCategoryGap: {
      control: "select",
      options: ["0%", "5%", "10%", "20%", "30%", "50%"],
      table: { category: "Bar" },
    },
    barGap: {
      control: { type: "number", min: 0, max: 20, step: 1 },
      table: { category: "Bar" },
    },
    radius: {
      control: { type: "number", min: 0, max: 16, step: 1 },
      table: { category: "Bar" },
    },
    showGrid: { control: "boolean", table: { category: "Display" } },
    showXAxis: { control: "boolean", table: { category: "Display" } },
    showYAxis: { control: "boolean", table: { category: "Display" } },
    showTooltip: { control: "boolean", table: { category: "Display" } },
    showLegend: { control: "boolean", table: { category: "Display" } },
  },
  render: (args) => (
    <div className="max-w-3xl">
      <BarChart {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Stacked: Story = {
  args: { stacked: true },
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal-bars",
    data: DEVICE_USAGE,
    xKey: "device",
    series: [
      { key: "users", label: "Kullanıcı" },
      { key: "sessions", label: "Oturum" },
    ],
  },
};

export const Single: Story = {
  args: {
    series: [{ key: "revenue", label: "Gelir", color: "#3b82f6" }],
  },
};
