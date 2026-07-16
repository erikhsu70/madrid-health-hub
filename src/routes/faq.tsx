import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { faqs } from "@/data/faq";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Volumes Lab Madrid" },
      { name: "description", content: "Answers to common questions about testing, memberships, gift cards and bookings at Volumes Lab." },
      { property: "og:title", content: "FAQ — Volumes Lab Madrid" },
      { property: "og:description", content: "Preparation, cancellations, gift cards and more." },
    ],
  }),
});

function FaqPage() {
  return (
    <SiteChrome>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">[ Frequently asked ]</p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">Questions.</h1>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ul className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <li key={i}>
                <details className="group py-8">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-8">
                    <span className="font-display text-2xl font-bold group-hover:text-primary">{f.q}</span>
                    <span className="font-mono text-xs uppercase text-muted group-open:hidden">Open +</span>
                    <span className="hidden font-mono text-xs uppercase text-primary group-open:inline">Close −</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteChrome>
  );
}
