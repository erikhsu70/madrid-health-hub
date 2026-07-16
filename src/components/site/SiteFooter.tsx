import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-6 pb-12 pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <p className="mb-8 font-display text-4xl font-extrabold uppercase tracking-tighter">
              Volumes<span className="text-primary">.</span>
            </p>
            <p className="max-w-xs text-sm text-zinc-400">
              A medical performance lab designed for the pursuit of physical and cognitive longevity.
              Calle Churruca 5, Madrid.
            </p>
          </div>
          <FooterCol title="Services">
            <FooterLink to="/book">Book Appointment</FooterLink>
            <FooterLink to="/memberships/health-performance">Memberships</FooterLink>
            <FooterLink to="/assessments/foundations">Assessments</FooterLink>
            <FooterLink to="/tests/vo2max">Individual Tests</FooterLink>
          </FooterCol>
          <FooterCol title="Studio">
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/faq">Privacy</FooterLink>
            <FooterLink to="/faq">Terms</FooterLink>
          </FooterCol>
          <div className="col-span-2">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Social</p>
            <div className="flex gap-6 text-sm text-zinc-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 hover:decoration-primary"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 hover:decoration-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase text-zinc-500">
            Volumes Health & Performance Lab © {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] uppercase text-zinc-500">Designed for longevity</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-zinc-500">{title}</p>
      <ul className="space-y-3 text-sm text-zinc-300">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="hover:text-primary">
        {children}
      </Link>
    </li>
  );
}
