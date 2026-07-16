import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site/SiteChrome";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Volumes Lab Madrid" },
      { name: "description", content: "Get in touch with Volumes Lab. Calle Churruca 5, Madrid. Email, phone, and directions." },
      { property: "og:title", content: "Contact — Volumes Lab Madrid" },
      { property: "og:description", content: "Calle Churruca 5, Madrid. Reach the team." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteChrome>
      <section className="border-b border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">[ Contact ]</p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">Come see the lab.</h1>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div className="space-y-10">
            <InfoRow label="Address" value={<>Calle Churruca 5<br />28004 Madrid, Spain</>} />
            <InfoRow label="Email" value={<a className="hover:text-primary" href="mailto:hello@volumeslab.com">hello@volumeslab.com</a>} />
            <InfoRow label="Phone" value={<a className="hover:text-primary" href="tel:+34910000000">+34 910 000 000</a>} />
            <InfoRow label="Hours" value={<>Mon–Fri · 07:00–21:00<br />Sat · 09:00–14:00</>} />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Message sent. We'll be in touch shortly.");
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-4 border-t border-border pt-10"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Send a message</p>
              <input required name="name" placeholder="Your name" className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:border-foreground focus:outline-none" />
              <input required name="email" type="email" placeholder="Email" className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:border-foreground focus:outline-none" />
              <textarea required name="message" placeholder="Message" rows={5} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:border-foreground focus:outline-none" />
              <button className="bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-white hover:bg-primary">
                {sent ? "Sent ✓" : "Send message"}
              </button>
            </form>
          </div>
          <div className="min-h-[500px]">
            <iframe
              title="Volumes Lab map"
              src="https://www.google.com/maps?q=Calle+Churruca+5,+Madrid,+Spain&output=embed"
              className="h-full min-h-[500px] w-full grayscale-[.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-6">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">{label}</p>
      <p className="text-lg">{value}</p>
    </div>
  );
}
