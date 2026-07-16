import { useState } from "react";
import type { Product } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { BookBand } from "./BookBand";
import { toast } from "sonner";

export function ProductPage({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [gift, setGift] = useState(false);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            [ {product.categoryLabel} ]
          </p>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-7xl">
                {product.name}
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-muted text-pretty">{product.tagline}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="border border-border p-6">
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Price</span>
                  <span className="font-display text-3xl font-bold">€{product.price}</span>
                </div>
                {product.duration && (
                  <div className="flex items-center justify-between border-b border-border py-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Duration</span>
                    <span className="text-sm">{product.duration}</span>
                  </div>
                )}
                {product.giftable && (
                  <label className="mt-4 flex cursor-pointer items-center gap-3 py-2 font-mono text-[11px] uppercase tracking-widest">
                    <input
                      type="checkbox"
                      checked={gift}
                      onChange={(e) => setGift(e.target.checked)}
                      className="accent-primary"
                    />
                    Purchase as gift card
                  </label>
                )}
                <button
                  onClick={() => {
                    add({ slug: product.slug, name: product.name, price: product.price, giftCard: gift });
                    toast.success(`${product.name} added to cart`);
                  }}
                  className="mt-4 block w-full bg-foreground py-3 text-center font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-primary"
                >
                  {gift ? "Add gift card to cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
          <DetailBlock title="What we measure" items={product.measures} />
          <DetailBlock title="Protocol" items={product.protocol} numbered />
          <DetailBlock title="Good for" items={product.goodFor} />
        </div>
      </section>

      <BookBand text={`Book your ${product.name}.`} />
    </div>
  );
}

function DetailBlock({ title, items, numbered }: { title: string; items: string[]; numbered?: boolean }) {
  return (
    <div>
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-primary">{title}</p>
      <ul className="space-y-4">
        {items.map((it, i) => (
          <li key={i} className="flex gap-4 border-t border-border pt-4">
            <span className="font-mono text-[10px] text-muted">
              {numbered ? String(i + 1).padStart(2, "0") : "—"}
            </span>
            <span className="text-sm text-foreground">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
