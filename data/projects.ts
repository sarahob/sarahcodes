import type { Project } from "../types/project";

const projects: Project[] = [
  {
    slug: "realtime-finance-dashboard",
    title: "Realtime Finance Dashboard",
    description:
      "Highly-performant realtime dashboard for market data with WebSockets, optimized rendering, and custom visualizations for large datasets.",
    tech: ["TypeScript", "React", "WebSocket", "WebGL"],
  },
  {
    slug: "payments-sdk",
    title: "Payments SDK",
    description:
      "A secure, well-documented JavaScript SDK for Payment Authentication and integration with backoffice systems.",
    tech: ["TypeScript", "Node.js", "Java"],
  },
  {
    slug: "enterprise-visualizer",
    title: "Enterprise Data Visualizer",
    description:
      "Custom charts and visualizations handling large datasets with progressive loading and worker-based processing.",
    tech: ["React", "D3", "Web Workers"],
    link: "https://example.com",
  },
];

export default projects;
