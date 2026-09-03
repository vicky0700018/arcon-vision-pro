import { Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";

export function Footer() {
  const { settings, services, company } = useStore();

  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.12em] text-white">
            {company.name}
          </p>
          <span className="mt-1 block text-[0.6rem] font-semibold tracking-[0.5em] text-gold">
            {settings.logoSubtitle}
          </span>
          <p className="mt-5 text-sm leading-relaxed">{settings.footerText}</p>
          <div className="mt-6 flex gap-3">
            {settings.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-[0.65rem] font-semibold tracking-widest text-white/70 transition-colors hover:border-gold hover:text-gold"
                aria-label={s.label}
              >
                {s.label.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[0.72rem] font-bold tracking-[0.22em] text-gold uppercase">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.72rem] font-bold tracking-[0.22em] text-gold uppercase">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.filter((s) => s.active).map((s) => (
              <li key={s.id}>
                <Link to="/services" className="hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.72rem] font-bold tracking-[0.22em] text-gold uppercase">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="hover:text-gold">{settings.phone}</a></li>
            <li>{settings.email}</li>
            <li className="leading-relaxed">{settings.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© 2026 {company.name}. All Rights Reserved.</p>
          <Link
            to="/admin/login"
            className="font-semibold tracking-[0.18em] text-white/50 uppercase transition-colors hover:text-gold"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
