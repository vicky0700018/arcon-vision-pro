import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/mockData";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="card-elevated group flex h-full flex-col overflow-hidden">
      <div className="img-zoom relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute top-0 left-0 bg-navy px-4 py-2 font-display text-sm font-semibold text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold uppercase">
          {service.category}
        </span>
        <h3 className="mt-3 text-xl font-semibold text-navy">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <Link
          to="/contact"
          className="mt-6 text-[0.7rem] font-bold tracking-[0.16em] text-navy uppercase transition-colors group-hover:text-gold"
        >
          Learn More →
        </Link>
      </div>
    </article>
  );
}
