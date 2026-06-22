import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Albinism Forum" },
      { name: "description", content: "Stories, research, and lived experience from our community." },
      { property: "og:title", content: "Blogs — Albinism Forum" },
      { property: "og:description", content: "Stories and articles from our community." },
    ],
  }),
  component: BlogsPage,
});

const posts = [
  { title: "What every parent should know in the first 100 days", excerpt: "A pediatric dermatologist and three parents share the milestones that matter.", tag: "Family", date: "June 12, 2026" },
  { title: "Sunscreen is a school supply", excerpt: "Why we are pushing ministries of education to fund sun protection like textbooks.", tag: "Advocacy", date: "May 28, 2026" },
  { title: "Low vision, full sight: classroom tools that work", excerpt: "Affordable assistive tech we have tested across 38 partner schools.", tag: "Education", date: "May 04, 2026" },
  { title: "Myths we are tired of hearing", excerpt: "A plain-language guide to debunking the most harmful albinism myths.", tag: "Awareness", date: "April 18, 2026" },
];

function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Honest stories from our community."
        subtitle="No saviors, no pity — just lived experience, research and ideas worth sharing."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
              <span className="rounded-full bg-accent/30 px-3 py-1 font-semibold text-foreground">{p.tag}</span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground group-hover:text-primary">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            <button className="mt-5 text-sm font-semibold text-primary hover:underline">Read article →</button>
          </article>
        ))}
      </section>
    </>
  );
}