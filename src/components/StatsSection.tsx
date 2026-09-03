import { Reveal } from "@/components/Reveal";
import type { Stat } from "@/data/mockData";

export function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-navy">
      <div className="container-x grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 80} className="bg-navy">
            <div className="px-4 py-12 text-center lg:py-16">
              <p className="font-display text-3xl font-semibold text-gold lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.7rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
