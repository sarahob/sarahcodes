import type { Project } from "../types/project";

export default function SkillsPanel({ projects }: { projects: Project[] }) {
  return (
    <aside className="card">
      <h3>Skills & Focus</h3>
      <ul>
        <li>TypeScript & React / Preact</li>
        <li>High-performance data visualization (WebGL, D3)</li>
        <li>Realtime systems & WebSockets</li>
        <li>SDKs, Java backend, developer-first APIs</li>
        <li>Payment authentication & secure systems</li>
        <li>Performance tuning & SSR optimization</li>
      </ul>

      <div style={{marginTop: '1rem'}}>
        <h4>Recent projects</h4>
        <ul>
          {projects.slice(0,3).map((p) => (
            <li key={p.slug}>{p.title}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
