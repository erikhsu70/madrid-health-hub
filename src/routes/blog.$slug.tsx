import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { BookBand } from "@/components/site/BookBand";
import { getPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — Volumes Lab" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Volumes Lab` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: PostNotFound,
  errorComponent: PostError,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteChrome>
      <article className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-primary"
          >
            ← Back to Journal
          </Link>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-primary">
            {post.category}
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
            {formatDate(post.date)} · {post.readingTime} · {post.author}
          </p>
        </div>
      </article>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          {post.body.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/85">
              {para}
            </p>
          ))}
        </div>
      </section>

      <BookBand />

      {others.length > 0 && (
        <section className="border-t border-border px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 font-mono text-xs uppercase tracking-widest text-primary">
              [ Keep reading ]
            </p>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group block border-t border-border pt-6"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {p.category}
                    </p>
                    <p className="mt-3 font-display text-xl font-bold group-hover:text-primary">
                      {p.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </SiteChrome>
  );
}

function PostNotFound() {
  return (
    <SiteChrome>
      <section className="px-6 py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-6 font-display text-4xl font-extrabold">Article not found.</h1>
        <Link
          to="/blog"
          className="mt-10 inline-block font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary"
        >
          ← Back to Journal
        </Link>
      </section>
    </SiteChrome>
  );
}

function PostError() {
  return (
    <SiteChrome>
      <section className="px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Something went wrong loading this article.</h1>
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
