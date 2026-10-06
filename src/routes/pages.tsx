import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { FileText, HelpCircle, Calendar, ShieldQuestion, Newspaper, Heart } from "lucide-react";

export const Route = createFileRoute("/pages")({
  head: () => ({
    meta: [
      { title: "Pages — Albinism Forum" },
      { name: "description", content: "Resources, FAQs, events and more from the Albinism Forum." },
      { property: "og:title", content: "Pages — Albinism Forum" },
      { property: "og:description", content: "Browse all resources, FAQs and events." },
    ],
  }),
  component: PagesIndex,
});

const cards = [
  { icon: HelpCircle, title: "FAQ", desc: "Common questions about albinism, answered plainly." },
  {
    icon: FileText,
    title: "Resource Library",
    desc: "Guides for parents, teachers, and clinicians.",
  },
  {
    icon: Calendar,
    title: "Events Calendar",
    desc: "Health camps, training sessions and community meet-ups.",
  },
  {
    icon: ShieldQuestion,
    title: "Rights & Policy",
    desc: "Know your legal protections and reporting channels.",
  },
  {
    icon: Newspaper,
    title: "Press Room",
    desc: "Media coverage, statements and downloadable assets.",
  },
  {
    icon: Heart,
    title: "Ways to Give",
    desc: "Donate, sponsor a child, or fund a sunscreen drive.",
  },
];

function PagesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Pages"
        title="Everything else, in one place."
        subtitle="A directory of resources, events and quick links across the Albinism Forum site."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, desc }) => (
          <Link
            key={title}
            to="/contact"
            className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold text-foreground group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
