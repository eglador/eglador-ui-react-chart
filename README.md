<img src=".github/eglador-logo.svg" alt="eglador-ui-react-chart" width="200" />

# eglador-ui-react-chart

[![npm version](https://img.shields.io/npm/v/eglador-ui-react-chart?style=flat-square&color=blue)](https://www.npmjs.com/package/eglador-ui-react-chart)
[![npm downloads](https://img.shields.io/npm/dm/eglador-ui-react-chart?style=flat-square&color=green)](https://www.npmjs.com/package/eglador-ui-react-chart)
[![license](https://img.shields.io/npm/l/eglador-ui-react-chart?style=flat-square)](https://github.com/eglador/eglador-ui-react-chart/blob/main/LICENSE)
![recharts v3](https://img.shields.io/badge/recharts-v3-8B5CF6?style=flat-square)
![tailwind v4](https://img.shields.io/badge/tailwindcss-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![react >= 18](https://img.shields.io/badge/react-%3E%3D18-61DAFB?style=flat-square&logo=react&logoColor=white)
![typescript](https://img.shields.io/badge/typescript-ready-3178C6?style=flat-square&logo=typescript&logoColor=white)

A modern, opinionated chart components library built on [Recharts](https://recharts.org) and **Tailwind CSS v4** for React-based projects.

## Features

- **Config-driven API** — `data`, `xKey`, `series` props with minimal boilerplate
- **TypeScript-first** — full type safety on Recharts options
- **Tailwind v4 native** — default palette, optional per-series override
- **Responsive by default** — `responsive={false}` for fixed sizing
- **Full Recharts power** — `margin`, `barCategoryGap`, `reverseStackOrder`, `startAngle`/`endAngle` and more, all exposed
- **8 chart types** — Line, Bar, Area, Pie, Doughnut, Radar, RadialBar, Treemap

## Installation

```bash
npm install eglador-ui-react-chart
```

**Peer dependencies:** `react >= 18` · `react-dom >= 18` · `tailwindcss ^4`

## Setup

Add the following to your global stylesheet so Tailwind picks up the component classes:

```css
@import "tailwindcss";
@source "../node_modules/eglador-ui-react-chart";
```

The `@source` path is relative to the CSS file location:

| Framework | CSS file location | Path |
|---|---|---|
| Next.js (App Router) | `app/globals.css` | `../node_modules/eglador-ui-react-chart` |
| Next.js (`src/`) | `src/app/globals.css` | `../../node_modules/eglador-ui-react-chart` |
| Vite + React | `src/index.css` | `../node_modules/eglador-ui-react-chart` |

## Quick Start

```tsx
import { LineChart } from "eglador-ui-react-chart";

const data = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 3100 },
  { month: "Mar", revenue: 5800 },
  { month: "Apr", revenue: 4900 },
  { month: "May", revenue: 6300 },
  { month: "Jun", revenue: 7200 },
];

export function MyChart() {
  return (
    <LineChart
      data={data}
      xKey="month"
      series={[{ key: "revenue", label: "Revenue", color: "#3b82f6" }]}
      showGrid
      showTooltip
      showLegend
    />
  );
}
```

## Charts

| Component | Use case |
|---|---|
| `LineChart` | Time series, trends, multi-series comparison |
| `BarChart` | Category comparison (vertical/horizontal, stacked) |
| `AreaChart` | Filled trend chart with gradient and stacking |
| `PieChart` | Proportional distribution — pie or half-circle (gauge) |
| `DoughnutChart` | Dedicated donut variant of `PieChart` |
| `RadarChart` | Multi-dimensional profile/score comparison |
| `RadialBarChart` | KPI panels and progress indicators |
| `TreemapChart` | Hierarchical visualization sized by area |

## Common props

All charts share these base props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `array` | — | Data array (chart-specific shape) |
| `responsive` | `boolean` | `true` | Wrap in `ResponsiveContainer` |
| `width` | `number` | `600` | Used when `responsive=false` |
| `height` | `number` | `300`–`360` | Chart height |
| `margin` | `{ top, right, bottom, left }` | `{ 8, 16, 8, 8 }` | Recharts margin |
| `showTooltip` | `boolean` | `true` | Show interactive tooltip |
| `showLegend` | `boolean` | varies | Show legend |
| `className` | `string` | — | Override container class |

Chart-specific props (`xKey`, `series`, `stacked`, `gradient`, `innerRadius`, `startAngle`, etc.) are documented per component in Storybook.

## Examples

### BarChart — stacked

```tsx
<BarChart
  data={data}
  xKey="month"
  series={[
    { key: "revenue", label: "Revenue" },
    { key: "expenses", label: "Expenses" },
  ]}
  stacked
  reverseStackOrder
  barCategoryGap="20%"
  showLegend
/>
```

### PieChart — gauge

```tsx
<PieChart
  data={[
    { name: "Used", value: 75 },
    { name: "Free", value: 25 },
  ]}
  startAngle={180}
  endAngle={0}
  innerRadius="50%"
/>
```

### AreaChart — gradient stacked

```tsx
<AreaChart
  data={data}
  xKey="month"
  series={[
    { key: "revenue", label: "Revenue", color: "#3b82f6" },
    { key: "expenses", label: "Expenses", color: "#ef4444" },
  ]}
  stacked
  gradient
  showLegend
/>
```

### TreemapChart — hierarchical

```tsx
<TreemapChart
  data={[
    {
      name: "Electronics",
      size: 0,
      children: [
        { name: "Phones", size: 2500 },
        { name: "Laptops", size: 1800 },
      ],
    },
    { name: "Clothing", size: 3200 },
  ]}
/>
```

## Compatibility

Works with any React-based framework: **Next.js**, **Remix**, **Vite + React**, **Gatsby**, etc.

## Development

```bash
npm install
npm run dev               # tsup watch mode
npm run build             # production build to dist/
npm run typecheck         # tsc --noEmit
npm run storybook         # Storybook dev (http://localhost:6006)
npm run build-storybook   # static Storybook export
```

## Publishing

Publishing is automated via GitHub Actions. When a GitHub Release is created, the package is published to npm.

1. Update `version` in `package.json`
2. Commit and push
3. Create a GitHub Release with a matching tag (e.g. `v1.0.0`)

## Author

Kenan Gündoğan — [https://github.com/kenangundogan](https://github.com/kenangundogan)

Maintained under [Eglador](https://github.com/eglador)

## License

MIT
