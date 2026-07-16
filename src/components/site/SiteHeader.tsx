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
      className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-display text-xl font-extrabold uppercase tracking-tighter">
            Volumes<span className="text-primary">.</span>
          </Link>
          <div className="hidden gap-8 font-mono text-[11px] uppercase tracking-widest text-muted md:flex">
            <MenuTrigger label="Memberships" active={open === "memberships"} onOpen={() => setOpen("memberships")} />
            <MenuTrigger label="Assessments" active={open === "assessments"} onOpen={() => setOpen("assessments")} />
            <MenuTrigger label="Tests" active={open === "tests"} onOpen={() => setOpen("tests")} />
            <Link to="/faq" className="py-5 hover:text-foreground" onMouseEnter={() => setOpen(null)}>
              FAQ
            </Link>
            <Link to="/contact" className="py-5 hover:text-foreground" onMouseEnter={() => setOpen(null)}>
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[10px] text-muted lg:block">MADRID // CHURRUCA 5</span>
          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest hover:border-foreground"
          >
            Cart{count > 0 && <span className="ml-2 text-primary">[{count}]</span>}
          </button>
          <Link
            to="/book"
            className="bg-foreground px-5 py-2 font-mono text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-primary"
          >
            Book Now
          </Link>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-16 w-full border-b border-border bg-background shadow-lg">
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
      className={`py-5 transition-colors ${active ? "text-foreground" : "hover:text-foreground"}`}
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
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-primary">{label}</p>
      <ul className="space-y-4">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="group block">
              <p className="font-display text-lg font-bold group-hover:text-primary">{i.name}</p>
              <p className="mt-1 text-xs text-muted">{i.sub}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
