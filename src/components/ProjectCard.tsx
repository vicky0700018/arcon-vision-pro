import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/mockData";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-elevated group flex h-full flex-col overflow-hidden">
      <Link
        to="/projects/$id"
        params={{ id: project.id }}
        className="img-zoom block aspect-[4/3] overflow-hidden"
      >
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
          <span className="text-gold">{project.category}</span>
          <span className="h-px w-5 bg-border" />
          <span className="text-muted-foreground">{project.location}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-navy">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-slate-blue uppercase">
            {project.status} · {project.year}
          </span>
          <Link
            to="/projects/$id"
            params={{ id: project.id }}
            className="text-[0.7rem] font-bold tracking-[0.16em] text-navy uppercase transition-colors hover:text-gold"
          >
            View Project →
          </Link>
        </div>
      </div>
    </article>
  );
}
