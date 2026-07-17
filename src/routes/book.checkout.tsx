import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/book/checkout")({
  component: Checkout,
  head: () => ({
    meta: [
      { title: "Checkout, Volumes Lab Madrid" },
      { name: "description", content: "Review your booking and complete your appointment at Volumes Lab." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Checkout() {
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const total = items.reduce((n, i) => n + i.qty * i.price, 0);

  return (
    <SiteChrome>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">[ Checkout ]</p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">Your cart.</h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          {items.length === 0 ? (
            <div className="border border-border p-12 text-center">
              <p className="text-lg text-muted">Your cart is empty.</p>
              <Link
                to="/book"
                className="mt-6 inline-block bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-white hover:bg-primary"
              >
                Browse the catalog
              </Link>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-border border-y border-border">
                {items.map((i) => (
                  <li key={i.slug + i.giftCard} className="flex items-center justify-between gap-6 py-6">
                    <div>
                      <p className="font-display text-xl font-bold">{i.name}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                        {i.giftCard ? "Gift card" : "Booking"} · Qty {i.qty}
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-display text-xl font-bold">€{i.price * i.qty}</span>
                      <button
                        onClick={() => remove(i.slug, i.giftCard)}
                        className="font-mono text-[10px] uppercase text-primary hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-baseline justify-between border-b border-border pb-6">
                <span className="font-mono text-xs uppercase tracking-widest">Total</span>
                <span className="font-display text-4xl font-extrabold">€{total}</span>
              </div>
              <div className="mt-8 rounded-sm border border-dashed border-border p-6 text-sm text-muted">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">[ Payment ]</p>
                Payments will be enabled shortly. For now, submit your booking request and our team will
                confirm your appointment and payment details by email.
              </div>
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => {
                    toast.success("Booking request received. We'll email you shortly.");
                    clear();
                  }}
                  className="flex-1 bg-primary py-4 font-mono text-xs uppercase tracking-widest text-primary-foreground hover:bg-foreground"
                >
                  Submit booking request
                </button>
                <Link
                  to="/book"
                  className="border border-border px-6 py-4 font-mono text-xs uppercase tracking-widest hover:border-foreground"
                >
                  Continue shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </SiteChrome>
  );
}
