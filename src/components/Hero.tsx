import { Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";

export function Hero() {
  const { homepage } = useStore();

  return (
    <section className="relative isolate min-h-[85vh] overflow-hidden">
      <img
        src={homepage.heroImage}
        alt="Modern architectural construction project in Pune"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/92 via-navy/80 to-navy/45" />

      <div className="container-x relative flex min-h-[85vh] flex-col justify-center py-24">
        <span className="eyebrow">
          <span className="h-px w-10 bg-gold" />
          Prospera Arcon LLP · Pune
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] font-semibold text-white md:text-5xl lg:text-6xl">
          {homepage.heroHeading}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          {homepage.heroSubheading}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/projects" className="btn-gold">
            {homepage.ctaPrimary}
          </Link>
          <Link to="/contact" className="btn-outline-light">
            {homepage.ctaSecondary}
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-deep/85 backdrop-blur">
        <div className="container-x grid grid-cols-2 divide-white/10 lg:grid-cols-4 lg:divide-x">
          {homepage.credibility.map((item) => (
            <div key={item} className="px-2 py-5 text-center lg:px-6">
              <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-white/75 uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
