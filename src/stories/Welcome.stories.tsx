import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Welcome",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const GettingStarted: Story = {
  render: () => (
    <div className="min-h-screen bg-white p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          eglador-ui-react-chart
        </h1>
        <p className="mt-3 text-lg text-zinc-600">
          React chart components built on{" "}
          <a
            href="https://recharts.org"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Recharts
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS v4
          </a>
          .
        </p>

        <div className="mt-10 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
          <strong>Status:</strong> Setup tamamlandı — chart component'leri geliştirme
          aşamasında. Storybook konfigürasyonunu doğrulamak için bu sayfayı kullanın.
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">Stack</h2>
        <ul className="mt-3 space-y-1 text-zinc-700 list-disc list-inside">
          <li>React 18+ (peer)</li>
          <li>Recharts 3.x</li>
          <li>Tailwind CSS v4 (peer)</li>
          <li>TypeScript</li>
          <li>tsup (CJS + ESM bundle)</li>
          <li>Storybook 10 (Vite + addon-docs/a11y/vitest)</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-zinc-900">Yol haritası</h2>
        <ul className="mt-3 space-y-1 text-zinc-700 list-disc list-inside">
          <li>LineChart</li>
          <li>BarChart</li>
          <li>AreaChart</li>
          <li>PieChart / DonutChart</li>
          <li>RadarChart</li>
          <li>ComposedChart</li>
        </ul>

        <p className="mt-12 text-sm text-zinc-500">
          Bu sayfa boş paket'in yer tutucusudur; chart component'leri eklendikçe
          sidebar'da yeni story'ler belirecek.
        </p>
      </div>
    </div>
  ),
};
