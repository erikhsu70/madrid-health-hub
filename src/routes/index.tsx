import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { Eyebrow, FaqList } from "@/components/site/blocks";
import { memberships, assessments, tests, type Product } from "@/data/catalog";
import { faqGroups } from "@/data/faq";

export const Route = createFileRoute("/")({
  component: Home,
});

const googleReviews = [
  {
    name: "Daniela Burgos",
    when: "8 days ago",
    quote:
      "They were very kind since I scheduled the appointment and explained to me exactly what I…",
  },
  {
    name: "Jonathan C",
    when: "17 days ago",
    quote:
      "Had a positive experience coming in for an assessment as someone who doesn't really do these sort…",
  },
  {
    name: "Joshua Langevin",
    when: "17 days ago",
    quote:
      "Fantastic experience, they provided state of the art testing with friendliness you rarely see…",
  },
];

const reviewSummary = [
  "Flexible and quick scheduling",
  "Detailed reports provided the same day",
  "Professional and informative staff",
];

const team = [
  {
    name: "Dr. Rodrigo Ortega",
    role: "Medical Director",
    detail:
      "Sports cardiologist at QuirónSalud Madrid and Olympia. PhD cum laude, researcher at the CNIC, National End-of-Degree Award 2023.",
    photo: null as string | null,
    initials: "RO",
  },
  {
    name: "Mauricio Serrano Richards",
    role: "Head Performance Coach",
    detail:
      "MSc in Sports Physiotherapy & Reconditioning. Formerly with Club Puebla's Liga MX first team, rehab internship at Atlético de Madrid.",
    photo: "/team-mauricio.jpg" as string | null,
    initials: "MS",
  },
];

// Five questions pulled from the full FAQ page groups:
// prep, cancellation, results, gift cards, location.
const homeFaqs = [
  faqGroups[1].items[0],
  faqGroups[0].items[1],
  faqGroups[2].items[0],
  faqGroups[4].items[0],
  faqGroups[5].items[0],
];

const featuredTests = tests.filter((t) =>
  ["vo2max", "3d-body-composition", "metabolic-assessment"].includes(t.slug),
);

function Home() {
  return (
    <SiteChrome>
      {/* Hero, 50/50 split with lab photo */}
      <header className="grid border-b border-border lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 lg:py-28">
          <div className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-0 lg:pr-16">
            <p className="animate-slide-up font-mono text-[11px] uppercase tracking-widest text-warm">
              [ Madrid · Chamberí ]
            </p>
            <h1 className="animate-slide-up mt-6 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-balance md:text-7xl">
              Madrid's first boutique Human Health &amp; Performance Lab.
            </h1>
            <p className="animate-slide-up mt-8 max-w-md text-lg leading-relaxed text-muted">
              Lab-grade testing, medical oversight and coaching under one roof. Every number that
              matters, read by people who know what to do with it.
            </p>
            <div className="animate-slide-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PillLink to="/book">Book now →</PillLink>
              <GhostLink to="/book">Explore tests →</GhostLink>
            </div>
          </div>
        </div>
        <div className="relative min-h-[320px] border-t border-border lg:min-h-[82vh] lg:border-l lg:border-t-0">
          <img
            src="/hero-lab.jpg"
            alt="VO2max test in progress at Volumes Lab, Madrid"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <p className="absolute bottom-4 left-4 bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground">
            [ VO2max test · Volumes Lab ]
          </p>
        </div>
      </header>

      {/* Contact bar */}
      <div className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-muted">
          <a
            href="https://www.google.com/maps?q=Calle+Churruca+5,+Madrid,+Spain"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-foreground/30 underline-offset-4 hover:text-foreground hover:decoration-foreground"
          >
            Calle Churruca 5, Centro (28004)
          </a>
          <span>Mon–Fri 07:00–20:00</span>
          <span>Sat–Sun 09:00–18:00</span>
          <a href="tel:+34910000000" className="hover:text-foreground">
            +34 910 000 000
          </a>
          <a href="mailto:hello@volumeslab.com" className="hover:text-foreground">
            hello@volumeslab.com
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>About</Eyebrow>
          <div className="mt-12 grid items-start gap-16 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-sm md:aspect-auto md:h-full md:min-h-[520px]">
              <iframe
                title="Volumes Lab, Calle Churruca 5, Madrid"
                src="https://www.google.com/maps?q=Calle+Churruca+5,+Madrid,+Spain&output=embed"
                className="h-full min-h-[500px] w-full grayscale-[.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-8 left-8 border border-border bg-background p-4 shadow-xl">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-foreground">[ Pin ]</p>
                <p className="font-display text-sm font-bold uppercase">Volumes Madrid</p>
                <p className="mt-1 text-xs text-muted">Calle Churruca 5, Centro</p>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl">
                One roof. One team. Every number that matters.
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  Volumes' medical and performance team measures VO2max, strength, mobility,
                  metabolism and body composition, then turns the results into a clear,
                  personalised plan.
                </p>
                <p>
                  Our medical team can also prescribe and oversee clinical treatments, including
                  GLP-1 agonists and other peptide therapies.
                </p>
                <p>
                  Our performance team helps clients improve strength, cardio, conditioning and
                  mobility in our dedicated training area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>The team</Eyebrow>
          <h2 className="mt-8 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            The people behind the numbers.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {team.map((m) => (
              <article key={m.name} className="border border-border">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-card">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover grayscale"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-display text-8xl font-extrabold uppercase tracking-tight text-foreground/15">
                        {m.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-warm">{m.role}</p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">{m.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="mt-8 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            Three ways in.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            <OfferColumn title="Memberships" items={memberships} />
            <OfferColumn title="Assessments" items={assessments} />
            <OfferColumn title="Tests" items={featuredTests} total={tests.length} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-8 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            No guesswork. No noise. Just a clear picture of you.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <Step
              n="01"
              title="Measure"
              body="We test what matters, properly, VO2max, strength, mobility, metabolism, body composition, on lab-grade equipment, with a medical team reading every result. No wearable estimates. No wishful thinking."
            />
            <Step
              n="02"
              title="Understand"
              body="Your numbers become a story you can act on. Not a dashboard you'll ignore, but a clear, personalised plan: what to change, why it matters, and what it means for the next thirty years."
            />
            <Step
              n="03"
              title="Improve"
              body="Then we get to work, training, treating, retesting. Because a single snapshot tells you where you are. We're here for where you're going."
            />
          </div>
        </div>
      </section>

      {/* WHAT WE MEASURE */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>What we measure</Eyebrow>
          <h2 className="mt-8 max-w-5xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            The numbers that quietly decide how well, and how long, you'll live.
          </h2>

          <ul className="mt-16 divide-y divide-border border-y border-border">
            <Measure
              n="01"
              title="VO2max"
              body="The strongest single predictor of a long life. Most people never measure it. You will."
            />
            <Measure
              n="02"
              title="Strength &amp; Grip"
              body="Muscle is the organ of longevity. We tell you exactly how much you have, and how much you're keeping."
            />
            <Measure
              n="03"
              title="Mobility &amp; Gait"
              body="How freely you move today is how freely you'll move at seventy. Worth knowing early."
            />
            <Measure
              n="04"
              title="3-D Body Composition &amp; Bone Density"
              body="Past the bathroom scale, to what's really there: muscle, fat, bone."
            />
            <Measure
              n="05"
              title="Metabolic Assessment"
              body="How your body makes and spends energy, measured breath by breath."
            />
            <Measure
              n="06"
              title="Peptide &amp; GLP-1 Therapies"
              body="Modern tools, prescribed and overseen by doctors who know your full picture."
            />
          </ul>

          <div className="mt-12">
            <GhostLink to="/book">See all tests →</GhostLink>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Reviews</Eyebrow>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-4">
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
              5.0 on Google.
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-warm">
              ★★★★★ <span className="text-muted">· 269 reviews</span>
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {/* AI summary */}
            <div className="border border-border bg-card p-8 lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                [ What reviews repeat ]
              </p>
              <ul className="mt-8 space-y-6">
                {reviewSummary.map((s) => (
                  <li key={s} className="flex gap-4 border-t border-border pt-4">
                    <span aria-hidden className="font-mono text-[11px] text-warm">✓</span>
                    <span className="text-base leading-relaxed text-foreground/85">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-[9px] uppercase tracking-widest text-muted">
                Summary of 269 Google reviews
              </p>
            </div>

            {/* Review cards */}
            <div className="grid gap-6 md:grid-cols-3 lg:col-span-8">
              {googleReviews.map((r) => (
                <figure key={r.name} className="flex flex-col border border-border p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground font-mono text-[11px] font-bold uppercase">
                      {r.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-tight">{r.name}</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-muted">{r.when}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-mono text-[10px] tracking-widest text-warm">★★★★★</p>
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    "{r.quote}"
                  </blockquote>
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-widest text-muted">
                    Google review
                  </p>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Before you ask</Eyebrow>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
              The practical stuff.
            </h2>
            <GhostLink to="/faq">All questions →</GhostLink>
          </div>
          <div className="mt-12">
            <FaqList items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <img
            src="/volumes-mark.png"
            alt=""
            aria-hidden
            className="mx-auto mb-10 w-16 opacity-90"
            loading="lazy"
          />
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            The best time to measure was ten years ago. The second best is now.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted">
            Your healthspan isn't a mystery, it's a set of numbers waiting to be read. Come read them with
            us.
          </p>
          <div className="mt-10 flex justify-center">
            <PillLink to="/book">Book appointment →</PillLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}

function offerPath(p: Product): string {
  if (p.category === "membership") return `/memberships/${p.slug}`;
  if (p.category === "assessment") return `/assessments/${p.slug}`;
  return `/tests/${p.slug}`;
}

function OfferColumn({
  title,
  items,
  total,
}: {
  title: string;
  items: Product[];
  total?: number;
}) {
  return (
    <div>
      <p className="flex items-baseline justify-between border-b border-foreground pb-4">
        <span className="font-display text-xl font-extrabold uppercase tracking-tight">{title}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {total ?? items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </p>
      <ul className="divide-y divide-border">
        {items.map((p) => (
          <li key={p.slug}>
            <Link to={offerPath(p)} className="group block py-5">
              <span className="flex items-baseline justify-between gap-4">
                <span className="font-display text-lg font-bold uppercase tracking-tight text-foreground/90 group-hover:text-foreground">
                  {p.name}
                </span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {p.duration ? `${p.duration} · ` : ""}€{p.price}
                </span>
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted">{p.tagline}</span>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-widest text-foreground/60 group-hover:text-warm">
                Book →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {total && total > items.length ? (
        <Link
          to="/book"
          className="group mt-2 flex items-center justify-between border border-dashed border-border px-5 py-4 transition-colors hover:border-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-foreground">
            View all {total} tests
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-warm">
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}

function PillLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function GhostLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="font-mono text-[11px] uppercase tracking-widest text-foreground underline decoration-foreground/30 underline-offset-8 transition-colors hover:decoration-warm hover:text-warm"
    >
      {children}
    </Link>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border-t border-border pt-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{n}</p>
      <h3 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Measure({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-warm md:col-span-1">{n}</p>
      <h3
        className="font-display text-2xl font-extrabold uppercase tracking-tight md:col-span-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-lg leading-relaxed text-muted md:col-span-7">{body}</p>
    </li>
  );
}
