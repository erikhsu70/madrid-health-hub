import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { BookBand } from "@/components/site/BookBand";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <SiteChrome>
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <h1 className="animate-slide-up font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-balance md:text-8xl">
                Madrid's first boutique Human <br />
                Health &amp; Performance Lab.
              </h1>
            </div>
            <div className="animate-slide-up pb-4 lg:col-span-3">
              <p className="text-lg text-pretty text-muted">
                <a
                  href="https://www.google.com/maps?q=Calle+Churruca+5,+Madrid,+Spain"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  Calle Churruca 5 (centro)
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>About</SectionEyebrow>
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
                <p className="mt-1 text-xs text-muted">Calle Churruca 5</p>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl">
                Madrid's first boutique Human Health &amp; Performance Lab
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p>
                  You've spent decades building a career. Your body deserves the same attention, and,
                  finally, the same quality of data.
                </p>
                <p>
                  Volumes brings together the team, the technology and the expertise to understand your
                  health and lift your performance, all under one roof. Our medical and performance team
                  measures what actually matters, VO2max, strength, mobility, metabolism, body composition
                 , and turns those numbers into a plan that's yours alone. When it helps, we can prescribe
                  and oversee treatments too, including peptide therapies such as GLP-1 agonists.
                </p>
                <p>
                  Come in for a single test. Book a full assessment. Or join us for the long game, a
                  membership that blends personal training, medical oversight and regular retesting, so
                  you're not guessing about your health. You're watching it improve.
                </p>
              </div>
              <div className="pt-2">
                <PillLink to="/book">Book now →</PillLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookBand text="Book appointment" />

      {/* HOW IT WORKS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>How it works</SectionEyebrow>
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

          <div className="mt-16">
            <PillLink to="/book">Book now →</PillLink>
          </div>
        </div>
      </section>

      <BookBand text="Book appointment" />

      {/* WHAT WE MEASURE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>What we measure</SectionEyebrow>
          <h2 className="mt-8 max-w-5xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
            The numbers that quietly decide how well, and how long, you'll live.
          </h2>

          <ul className="mt-16 divide-y divide-border border-y border-border">
            <Measure
              title="VO2max"
              body="The strongest single predictor of a long life. Most people never measure it. You will."
            />
            <Measure
              title="Strength &amp; Grip"
              body="Muscle is the organ of longevity. We tell you exactly how much you have, and how much you're keeping."
            />
            <Measure
              title="Mobility &amp; Gait"
              body="How freely you move today is how freely you'll move at seventy. Worth knowing early."
            />
            <Measure
              title="3-D Body Composition &amp; Bone Density"
              body="Past the bathroom scale, to what's really there: muscle, fat, bone."
            />
            <Measure
              title="Metabolic Assessment"
              body="How your body makes and spends energy, measured breath by breath."
            />
            <Measure
              title="Peptide &amp; GLP-1 Therapies"
              body="Modern tools, prescribed and overseen by doctors who know your full picture."
            />
          </ul>

          <div className="mt-16">
            <PillLink to="/book">See all tests →</PillLink>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
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

      <BookBand text="Book appointment" />
    </SiteChrome>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-foreground">
      [ {children} ]
    </p>
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

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="border-t border-border pt-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{n}</p>
      <h3 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function Measure({ title, body }: { title: string; body: string }) {
  return (
    <li className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
      <h3
        className="font-display text-2xl font-extrabold uppercase tracking-tight md:col-span-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-lg leading-relaxed text-muted md:col-span-8">{body}</p>
    </li>
  );
}
