import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  PieChart,
  type ChartMargin,
  type PieDataItem,
} from "../components/chart";
import { TRAFFIC_SOURCES } from "./_shared";

type StoryArgs = {
  data: PieDataItem[];
  responsive: boolean;
  width: number;
  height: number;
  margin: ChartMargin;
  innerRadius: number | string;
  outerRadius: number | string;
  startAngle: number;
  endAngle: number;
  paddingAngle: number;
  showLabel: boolean;
  showTooltip: boolean;
  showLegend: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Charts/PieChart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Pasta grafiği. Controls panelinden `data` JSON'unu düzenleyerek kendi verilerinizle test edin. `innerRadius > 0` ile donut, `startAngle`/`endAngle` ile gauge görünümleri.",
      },
    },
  },
  args: {
    data: TRAFFIC_SOURCES,
    responsive: true,
    width: 600,
    height: 320,
    margin: { top: 8, right: 16, bottom: 8, left: 8 },
    innerRadius: 0,
    outerRadius: "80%",
    startAngle: 90,
    endAngle: -270,
    paddingAngle: 0,
    showLabel: false,
    showTooltip: true,
    showLegend: true,
  },
  argTypes: {
    data: {
      control: "object",
      table: { category: "Data" },
      description: "Veri dizisi: { name, value, color? }",
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
    innerRadius: {
      control: "select",
      options: [0, "30%", "50%", "60%", "70%"],
      table: { category: "Geometry" },
    },
    outerRadius: {
      control: "select",
      options: ["60%", "70%", "80%", "90%", "100%"],
      table: { category: "Geometry" },
    },
    startAngle: {
      control: { type: "number", min: -360, max: 360, step: 15 },
      table: { category: "Geometry" },
    },
    endAngle: {
      control: { type: "number", min: -360, max: 360, step: 15 },
      table: { category: "Geometry" },
    },
    paddingAngle: {
      control: { type: "number", min: 0, max: 10, step: 1 },
      table: { category: "Geometry" },
    },
    showLabel: { control: "boolean", table: { category: "Display" } },
    showTooltip: { control: "boolean", table: { category: "Display" } },
    showLegend: { control: "boolean", table: { category: "Display" } },
  },
  render: (args) => (
    <div className="max-w-md mx-auto">
      <PieChart {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Donut: Story = {
  args: { innerRadius: "60%" },
};

export const HalfCircle: Story = {
  name: "Half Circle (Gauge)",
  args: {
    startAngle: 180,
    endAngle: 0,
    innerRadius: "50%",
  },
};

export const WithPadding: Story = {
  args: { paddingAngle: 4, innerRadius: "60%" },
};

export const WithLabels: Story = {
  args: { showLabel: true, showLegend: false },
};
