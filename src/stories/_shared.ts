// Story'ler arası paylaşılan örnek veri seti

export const MONTHLY_DATA = [
  { month: "Oca", revenue: 4200, expenses: 2400, profit: 1800 },
  { month: "Şub", revenue: 3100, expenses: 1900, profit: 1200 },
  { month: "Mar", revenue: 5800, expenses: 3200, profit: 2600 },
  { month: "Nis", revenue: 4900, expenses: 2700, profit: 2200 },
  { month: "May", revenue: 6300, expenses: 3500, profit: 2800 },
  { month: "Haz", revenue: 7200, expenses: 4100, profit: 3100 },
  { month: "Tem", revenue: 6800, expenses: 3800, profit: 3000 },
  { month: "Ağu", revenue: 7500, expenses: 4300, profit: 3200 },
  { month: "Eyl", revenue: 8100, expenses: 4500, profit: 3600 },
  { month: "Eki", revenue: 7800, expenses: 4200, profit: 3600 },
  { month: "Kas", revenue: 9200, expenses: 5100, profit: 4100 },
  { month: "Ara", revenue: 9800, expenses: 5400, profit: 4400 },
];

export const TRAFFIC_SOURCES = [
  { name: "Direct", value: 4500, color: "#3b82f6" },
  { name: "Organic Search", value: 3800, color: "#10b981" },
  { name: "Social", value: 2200, color: "#f59e0b" },
  { name: "Referral", value: 1500, color: "#8b5cf6" },
  { name: "Email", value: 900, color: "#ec4899" },
];

export const DEVICE_USAGE = [
  { device: "Desktop", users: 4800, sessions: 5200 },
  { device: "Mobile", users: 6200, sessions: 7100 },
  { device: "Tablet", users: 1800, sessions: 2000 },
];

export const SKILL_RADAR = [
  { subject: "Tasarım", A: 120, B: 110 },
  { subject: "Geliştirme", A: 98, B: 130 },
  { subject: "Pazarlama", A: 86, B: 130 },
  { subject: "Satış", A: 99, B: 100 },
  { subject: "Operasyon", A: 85, B: 90 },
  { subject: "Destek", A: 65, B: 85 },
];

export const KPI_PROGRESS = [
  { name: "Satış", value: 92, color: "#3b82f6" },
  { name: "Pazarlama", value: 78, color: "#10b981" },
  { name: "Destek", value: 65, color: "#f59e0b" },
  { name: "Operasyon", value: 88, color: "#8b5cf6" },
  { name: "Üretim", value: 73, color: "#ec4899" },
];

export const PRODUCT_CATEGORIES = [
  { name: "Elektronik", size: 4500 },
  { name: "Giyim", size: 3200 },
  { name: "Ev & Yaşam", size: 2400 },
  { name: "Spor", size: 1800 },
  { name: "Kitap", size: 1200 },
  { name: "Oyuncak", size: 800 },
  { name: "Kozmetik", size: 700 },
  { name: "Bahçe", size: 500 },
];

export const HIERARCHICAL_PRODUCTS = [
  {
    name: "Elektronik",
    size: 0,
    children: [
      { name: "Telefon", size: 2500 },
      { name: "Laptop", size: 1800 },
      { name: "TV", size: 1200 },
    ],
  },
  {
    name: "Giyim",
    size: 0,
    children: [
      { name: "Erkek", size: 1500 },
      { name: "Kadın", size: 1700 },
    ],
  },
  {
    name: "Ev",
    size: 0,
    children: [
      { name: "Mobilya", size: 1400 },
      { name: "Mutfak", size: 800 },
      { name: "Dekor", size: 600 },
    ],
  },
];
