import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold font-roboto text-teal-800 mx-10 mb-5">
        Portfolio
      </h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          url={project.urlLink}
          gitHub={project.gitHubLink}
          techStack={project.techStack}
          screenshot={project.screenshot}
        />
      ))}
    </div>
  );
}
