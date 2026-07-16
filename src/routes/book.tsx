import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { memberships, assessments, tests, packages, type Product } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { BookBand } from "@/components/site/BookBand";

export const Route = createFileRoute("/book")({
  component: BookIndex,
  head: () => ({
    meta: [
      { title: "Book Appointment — Volumes Lab Madrid" },
      { name: "description", content: "Book memberships, complete assessments, individual tests and packages at Volumes Lab in Madrid." },
      { property: "og:title", content: "Book Appointment — Volumes Lab Madrid" },
      { property: "og:description", content: "Add memberships, assessments, tests and packages to your cart." },
    ],
  }),
});

function BookIndex() {
  return (
    <SiteChrome>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">[ Book appointment ]</p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">Choose your protocol.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Every item can be booked for yourself or purchased as a gift card. Your cart is saved
            automatically.
          </p>
        </div>
      </section>

      <CatalogSection title="Memberships" items={memberships} />
      <CatalogSection title="Complete Assessments" items={assessments} />
      <CatalogSection title="Individual Tests" items={tests} />
      <CatalogSection title="Buy Packages" items={packages} />

      <BookBand text="Ready to review your cart?" />
    </SiteChrome>
  );
}

function CatalogSection({ title, items }: { title: string; items: Product[] }) {
  return (
    <section className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="font-display text-3xl font-extrabold uppercase italic tracking-tight md:text-4xl">
            {title}
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function detailPath(p: Product): string {
  if (p.category === "membership") return `/memberships/${p.slug}`;
  if (p.category === "assessment") return `/assessments/${p.slug}`;
  if (p.category === "test") return `/tests/${p.slug}`;
  return "/book";
}

function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  return (
    <article className="flex flex-col border border-border bg-card p-6 transition-colors hover:border-foreground">
      <div className="flex-1">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
          {product.categoryLabel}
        </p>
        <h3 className="font-display text-2xl font-bold leading-tight">{product.name}</h3>
        <p className="mt-3 text-sm text-muted">{product.tagline}</p>
      </div>
      <div className="mt-6 flex items-baseline justify-between border-t border-border pt-4">
        <span className="font-display text-2xl font-bold">€{product.price}</span>
        {product.duration && <span className="font-mono text-[10px] uppercase text-muted">{product.duration}</span>}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() => {
            add({ slug: product.slug, name: product.name, price: product.price, giftCard: false });
            toast.success(`${product.name} added to cart`);
          }}
          className="bg-foreground py-2 font-mono text-[10px] uppercase tracking-widest text-white hover:bg-primary"
        >
          Add to cart
        </button>
        {product.giftable ? (
          <button
            onClick={() => {
              add({ slug: product.slug, name: `${product.name} (Gift)`, price: product.price, giftCard: true });
              toast.success(`${product.name} gift card added`);
            }}
            className="border border-border py-2 font-mono text-[10px] uppercase tracking-widest hover:border-foreground"
          >
            Gift card
          </button>
        ) : (
          <Link
            to={detailPath(product)}
            className="border border-border py-2 text-center font-mono text-[10px] uppercase tracking-widest hover:border-foreground"
          >
            Learn more
          </Link>
        )}
      </div>
      {product.category !== "package" && (
        <Link
          to={detailPath(product)}
          className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-primary"
        >
          Full details →
        </Link>
      )}
    </article>
  );
}
