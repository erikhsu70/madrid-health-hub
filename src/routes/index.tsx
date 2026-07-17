import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { BookBand } from "@/components/site/BookBand";
import heroLab from "@/assets/hero-lab.jpg";

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
                Madrid's first boutique <br />
                Human Health &amp; Performance Lab.
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

      {/* Big image */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <img
            src={heroLab}
            alt="Physiological testing sensors on an athlete at Volumes Lab Madrid"
            className="aspect-[21/9] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-black/5"
            loading="lazy"
          />
        </div>
      </section>

      {/* About + Map */}
      <section id="about" className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl items-start gap-24 md:grid-cols-2">
          <div className="space-y-10">
            <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance">
              Madrid's first boutique <br /> Human Health &amp; Performance Lab
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Volumes brings together the team, technology and expertise needed to improve health and
                performance, all under one roof.
              </p>
              <p>
                Our medical and performance team measures VO2max, strength, mobility, metabolism and body
                composition, then turns the results into a clear and personalised plan. Our medical team can
                also prescribe and oversee treatments, including peptide therapies such as GLP-1 agonists.
              </p>
              <p>
                Book individual tests or a comprehensive assessment, or join a membership combining personal
                training, medical oversight and regular retesting.
              </p>
            </div>
            <div className="flex items-center gap-4 border-t border-border pt-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider">Location</p>
                <a
                  href="https://www.google.com/maps?q=Calle+Churruca+5,+Madrid,+Spain"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  Calle Churruca 5, Madrid
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-sm md:aspect-auto md:h-full">
            <iframe
              title="Volumes Lab — Calle Churruca 5, Madrid"
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
        </div>
      </section>

      <BookBand />
    </SiteChrome>
  );
}
