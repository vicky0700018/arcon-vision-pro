import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import type { WhyItem } from "@/data/mockData";

export function WhyChooseUs({ heading, items }: { heading: string; items: WhyItem[] }) {
  return (
    <section id="why-us" className="section-pad scroll-mt-24 bg-light">
      <div className="container-x">
        <SectionTitle
          eyebrow="Why Us"
          title={heading}
          subtitle="A construction partner judged by structure, schedule and standards — not promises."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 70} className="bg-background">
              <div className="group h-full p-8 transition-colors hover:bg-navy">
                <span className="font-display text-2xl font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
