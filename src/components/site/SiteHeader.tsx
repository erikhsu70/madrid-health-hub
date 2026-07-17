import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { memberships, assessments, tests } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { CartDrawer } from "./CartDrawer";

type MenuKey = "memberships" | "assessments" | "tests" | null;

export function SiteHeader() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center leading-none">
          <img
            src="/volumes-lab-logo.png"
            alt="Volumes Lab"
            className="h-5 w-auto md:h-6"
          />
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 font-mono text-[11px] font-bold uppercase tracking-widest text-foreground md:text-[12px]">
          <MenuTrigger label="Memberships" active={open === "memberships"} onOpen={() => setOpen("memberships")} />
          <MenuTrigger label="Assessments" active={open === "assessments"} onOpen={() => setOpen("assessments")} />
          <MenuTrigger label="Tests" active={open === "tests"} onOpen={() => setOpen("tests")} />
          <Link to="/blog" className="py-2 hover:text-foreground" onMouseEnter={() => setOpen(null)}>
            Journal
          </Link>
          <Link to="/faq" className="py-2 hover:text-foreground" onMouseEnter={() => setOpen(null)}>
            FAQ
          </Link>
          <Link to="/contact" className="py-2 hover:text-foreground" onMouseEnter={() => setOpen(null)}>
            Contact
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            className="relative border border-border px-3 py-2 tracking-widest hover:border-foreground"
          >
            Cart{count > 0 && <span className="ml-2 text-foreground">[{count}]</span>}
          </button>
          <Link
            to="/book"
            className="bg-foreground px-4 py-2 tracking-widest text-primary-foreground hover:opacity-80"
          >
            Book Now
          </Link>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-background shadow-lg">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-10 md:grid-cols-3">
            {open === "memberships" && (
              <MenuColumn label="Memberships" items={memberships.map((m) => ({ to: `/memberships/${m.slug}`, name: m.name, sub: m.tagline }))} />
            )}
            {open === "assessments" && (
              <MenuColumn label="Complete Assessments" items={assessments.map((a) => ({ to: `/assessments/${a.slug}`, name: a.name, sub: a.tagline }))} />
            )}
            {open === "tests" && (
              <>
                <MenuColumn label="Individual Tests" items={tests.slice(0, 4).map((t) => ({ to: `/tests/${t.slug}`, name: t.name, sub: t.tagline }))} />
                <MenuColumn label="\u00A0" items={tests.slice(4).map((t) => ({ to: `/tests/${t.slug}`, name: t.name, sub: t.tagline }))} />
              </>
            )}
          </div>
        </div>
      )}

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </nav>
  );
}

function MenuTrigger({ label, active, onOpen }: { label: string; active: boolean; onOpen: () => void }) {
  return (
    <button
      onMouseEnter={onOpen}
      onFocus={onOpen}
      className={`py-2 transition-colors ${active ? "text-foreground" : "hover:text-foreground"}`}
    >
      {label}
    </button>
  );
}

function MenuColumn({
  label,
  items,
}: {
  label: string;
  items: { to: string; name: string; sub: string }[];
}) {
  return (
    <div>
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-foreground">{label}</p>
      <ul className="space-y-4">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="group block">
              <p className="font-display text-lg font-bold uppercase group-hover:opacity-70">{i.name}</p>
              <p className="mt-1 text-xs text-muted">{i.sub}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
