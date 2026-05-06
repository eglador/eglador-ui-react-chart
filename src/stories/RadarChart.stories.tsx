import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  RadarChart,
  type ChartData,
  type ChartMargin,
  type ChartSeries,
} from "../components/chart";
import { SKILL_RADAR } from "./_shared";

type StoryArgs = {
  data: ChartData;
  angleKey: string;
  series: ChartSeries[];
  responsive: boolean;
  width: number;
  height: number;
  margin: ChartMargin;
  fillOpacity: number;
  strokeWidth: number;
  showGrid: boolean;
  showAngleAxis: boolean;
  showRadiusAxis: boolean;
  showTooltip: boolean;
  showLegend: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Charts/RadarChart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Radar (örümcek) grafiği. Controls panelinden `data` ve `series` JSON'larını düzenleyerek kendi verilerinizle test edin.",
      },
    },
  },
  args: {
    data: SKILL_RADAR,
    angleKey: "subject",
    series: [
      { key: "A", label: "Takım A" },
      { key: "B", label: "Takım B" },
    ],
    responsive: true,
    width: 600,
    height: 360,
    margin: { top: 8, right: 16, bottom: 8, left: 8 },
    fillOpacity: 0.4,
    strokeWidth: 2,
    showGrid: true,
    showAngleAxis: true,
    showRadiusAxis: false,
    showTooltip: true,
    showLegend: true,
  },
  argTypes: {
    data: { control: "object", table: { category: "Data" } },
    angleKey: {
      control: "text",
      table: { category: "Data" },
      description: "Köşe (eksen) etiketleri için item key'i",
    },
    series: {
      control: "object",
      table: { category: "Data" },
      description: "Radar katmanları: { key, label?, color? }",
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
    fillOpacity: {
      control: { type: "number", min: 0, max: 1, step: 0.05 },
      table: { category: "Display" },
    },
    strokeWidth: {
      control: { type: "number", min: 1, max: 5, step: 1 },
      table: { category: "Display" },
    },
    showGrid: { control: "boolean", table: { category: "Display" } },
    showAngleAxis: { control: "boolean", table: { category: "Display" } },
    showRadiusAxis: { control: "boolean", table: { category: "Display" } },
    showTooltip: { control: "boolean", table: { category: "Display" } },
    showLegend: { control: "boolean", table: { category: "Display" } },
  },
  render: (args) => (
    <div className="max-w-xl mx-auto">
      <RadarChart {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Single: Story = {
  args: {
    series: [{ key: "A", label: "Skor", color: "#3b82f6" }],
  },
};

export const Outline: Story = {
  args: { fillOpacity: 0, strokeWidth: 3 },
};
