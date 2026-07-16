import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Journal — Volumes Lab Madrid" },
      {
        name: "description",
        content:
          "Field notes on VO2max, strength, body composition and longevity from the Volumes performance lab in Madrid.",
      },
      { property: "og:title", content: "Journal — Volumes Lab Madrid" },
      {
        property: "og:description",
        content: "Field notes on performance testing and longevity training.",
      },
    ],
  }),
});

function BlogIndex() {
  return (
    <SiteChrome>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">
            [ Journal / 01 ]
          </p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            Field notes on performance & longevity.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted">
            Short essays from the lab floor. What we measure, what the numbers mean,
            and how we translate them into training.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group grid grid-cols-1 gap-8 py-12 md:grid-cols-12"
                >
                  <div className="md:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      {p.category}
                    </p>
                    <p className="mt-2 font-mono text-xs text-muted">
                      {formatDate(p.date)} · {p.readingTime}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-display text-3xl font-bold tracking-tight group-hover:text-primary md:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base text-muted">{p.excerpt}</p>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-foreground">
                      Read →
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteChrome>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
