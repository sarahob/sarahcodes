import type { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}
