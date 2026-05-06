import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  TreemapChart,
  type TreemapDataItem,
} from "../components/chart";
import { HIERARCHICAL_PRODUCTS, PRODUCT_CATEGORIES } from "./_shared";

type StoryArgs = {
  data: TreemapDataItem[];
  responsive: boolean;
  width: number;
  height: number;
  aspectRatio: number;
  showLabels: boolean;
  showTooltip: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Charts/TreemapChart",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Hiyerarşik veriyi alan büyüklüğüne göre kutucuklarla görselleştirir. Controls panelinden `data` JSON'unu düzenleyerek kendi verilerinizle test edin (düz veya `children` ile iç içe).",
      },
    },
  },
  args: {
    data: PRODUCT_CATEGORIES,
    responsive: true,
    width: 600,
    height: 360,
    aspectRatio: 4 / 3,
    showLabels: true,
    showTooltip: true,
  },
  argTypes: {
    data: {
      control: "object",
      table: { category: "Data" },
      description: "Veri: { name, size, color?, children? }",
    },
    responsive: { control: "boolean", table: { category: "Layout" } },
    width: {
      control: { type: "number", min: 200, max: 1200, step: 20 },
      table: { category: "Layout" },
      if: { arg: "responsive", truthy: false },
    },
    height: {
      control: { type: "number", min: 240, max: 700, step: 20 },
      table: { category: "Layout" },
    },
    aspectRatio: {
      control: { type: "number", min: 0.5, max: 4, step: 0.1 },
      table: { category: "Layout" },
    },
    showLabels: { control: "boolean", table: { category: "Display" } },
    showTooltip: { control: "boolean", table: { category: "Display" } },
  },
  render: (args) => (
    <div className="max-w-3xl">
      <TreemapChart {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Hierarchical: Story = {
  args: { data: HIERARCHICAL_PRODUCTS },
};

export const NoLabels: Story = {
  args: { showLabels: false },
};
