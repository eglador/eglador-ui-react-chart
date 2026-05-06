import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  RadialBarChart,
  type ChartMargin,
  type PieDataItem,
} from "../components/chart";
import { KPI_PROGRESS } from "./_shared";

type StoryArgs = {
  data: PieDataItem[];
  responsive: boolean;
  width: number;
  height: number;
  margin: ChartMargin;
  innerRadius: string;
  outerRadius: string;
  cornerRadius: number;
  showBackground: boolean;
  showTooltip: boolean;
  showLegend: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Charts/RadialBarChart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Radyal bar grafiği. Controls panelinden `data` JSON'unu düzenleyerek kendi metriklerinizle test edin.",
      },
    },
  },
  args: {
    data: KPI_PROGRESS,
    responsive: true,
    width: 600,
    height: 360,
    margin: { top: 8, right: 16, bottom: 8, left: 8 },
    innerRadius: "20%",
    outerRadius: "100%",
    cornerRadius: 8,
    showBackground: true,
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
      control: { type: "number", min: 240, max: 600, step: 20 },
      table: { category: "Layout" },
    },
    margin: { control: "object", table: { category: "Layout" } },
    innerRadius: {
      control: "select",
      options: ["10%", "20%", "30%", "40%", "50%"],
      table: { category: "Radial" },
    },
    outerRadius: {
      control: "select",
      options: ["80%", "90%", "100%"],
      table: { category: "Radial" },
    },
    cornerRadius: {
      control: { type: "number", min: 0, max: 20, step: 1 },
      table: { category: "Radial" },
    },
    showBackground: { control: "boolean", table: { category: "Display" } },
    showTooltip: { control: "boolean", table: { category: "Display" } },
    showLegend: { control: "boolean", table: { category: "Display" } },
  },
  render: (args) => (
    <div className="max-w-xl mx-auto">
      <RadialBarChart {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Compact: Story = {
  args: { innerRadius: "40%", outerRadius: "90%", cornerRadius: 4 },
};

export const NoBackground: Story = {
  args: { showBackground: false },
};
