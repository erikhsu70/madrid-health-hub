import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-6 pb-12 pt-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/volumes-lab-logo.png"
              alt="Volumes Lab"
              className="mb-4 h-6 w-auto brightness-0 invert"
            />
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Calle Churruca 5, Madrid
            </p>
          </div>
          <FooterCol title="Services">
            <FooterLink to="/book">Book Now</FooterLink>
            <FooterLink to="/memberships/health-performance">Memberships</FooterLink>
            <FooterLink to="/assessments/foundations">Assessments</FooterLink>
            <FooterLink to="/tests/vo2max">Individual Tests</FooterLink>
          </FooterCol>
          <FooterCol title="Studio">
            <FooterLink to="/blog">Journal</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/faq">Privacy</FooterLink>
            <FooterLink to="/faq">Terms</FooterLink>
          </FooterCol>
          <FooterCol title="Follow">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70"
              >
                LinkedIn
              </a>
            </li>
          </FooterCol>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase text-zinc-500">
            Volumes Lab © {new Date().getFullYear()}
          </p>
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
      <Link to={to} className="hover:opacity-70">
        {children}
      </Link>
    </li>
  );
}
