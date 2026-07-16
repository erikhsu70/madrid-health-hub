import { Link } from "@tanstack/react-router";

export function BookBand({ text = "Optimize your biology today." }: { text?: string }) {
  return (
    <Link
      to="/book"
      className="group relative block overflow-hidden bg-primary px-6 py-12 text-primary-foreground"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <h3 className="font-display text-2xl font-bold uppercase italic tracking-tighter md:text-3xl">
          {text}
        </h3>
        <span className="flex shrink-0 items-center gap-4 font-mono text-xs uppercase tracking-widest transition-transform group-hover:translate-x-2 md:text-sm">
          Book your assessment <span aria-hidden>→</span>
        </span>
      </div>
      <div className="absolute inset-0 bg-foreground opacity-0 transition-opacity group-hover:opacity-10" />
    </Link>
  );
}
