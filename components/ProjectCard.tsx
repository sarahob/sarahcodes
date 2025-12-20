import type { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>
        <strong>Tech:</strong> {project.tech.join(", ")}
      </p>
      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noreferrer noopener">
            View
          </a>
        </p>
      )}
    </article>
  );
}
