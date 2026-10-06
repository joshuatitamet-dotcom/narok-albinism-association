import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { Download, Mail, Newspaper, Sparkles } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Albinism Forum" },
      {
        name: "description",
        content: "Stories, research, and lived experience from our community.",
      },
      { property: "og:title", content: "Blogs — Albinism Forum" },
      { property: "og:description", content: "Stories and articles from our community." },
    ],
  }),
  component: BlogsPage,
});

const posts = [
  {
    type: "Guide",
    title: "What every parent should know in the first 100 days",
    excerpt: "A pediatric dermatologist and three parents share the milestones that matter.",
    tag: "Family",
    date: "June 12, 2026",
  },
  {
    type: "News",
    title: "Forum signs new sunscreen partnership across 5 counties",
    excerpt: "20,000 more bottles of SPF50+ now headed to rural schools this quarter.",
    tag: "News",
    date: "June 02, 2026",
  },
  {
    type: "Article",
    title: "Sunscreen is a school supply",
    excerpt: "Why we are pushing ministries of education to fund sun protection like textbooks.",
    tag: "Advocacy",
    date: "May 28, 2026",
  },
  {
    type: "Guide",
    title: "Low vision, full sight: classroom tools that work",
    excerpt: "Affordable assistive tech we have tested across 38 partner schools.",
    tag: "Education",
    date: "May 04, 2026",
  },
  {
    type: "News",
    title: "Annual impact report 2025 released",
    excerpt: "A year of growth: scholarships, skin camps, and policy wins — by the numbers.",
    tag: "News",
    date: "April 22, 2026",
  },
  {
    type: "Article",
    title: "Myths we are tired of hearing",
    excerpt: "A plain-language guide to debunking the most harmful albinism myths.",
    tag: "Awareness",
    date: "April 18, 2026",
  },
];

const categories = ["All", "Family", "Advocacy", "Education", "Awareness", "News"];
const tags = [
  "#sunsafe",
  "#parents",
  "#lowvision",
  "#scholarships",
  "#policy",
  "#myth-busting",
  "#community",
];

function BlogsPage() {
  const [active, setActive] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const filtered = active === "All" ? posts : posts.filter((p) => p.tag === active);

  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Honest stories from our community."
        subtitle="No saviors, no pity — just lived experience, research and ideas worth sharing."
      />

      {/* Categories & Tags */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${active === c ? "bg-primary text-primary-foreground" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2">
        {filtered.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] sm:p-7"
          >
            <div className="flex flex-col gap-3 text-xs uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                  {p.type}
                </span>
                <span className="rounded-full bg-accent/30 px-3 py-1 font-semibold text-foreground">
                  {p.tag}
                </span>
              </span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold text-foreground group-hover:text-primary sm:text-2xl">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            <button className="mt-5 text-sm font-semibold text-primary hover:underline">
              Read article →
            </button>
          </article>
        ))}
      </section>

      {/* Lead Magnets */}
      <section className="border-y border-border bg-[var(--gradient-warm)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <Sparkles className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
              Get the free Parent Starter Kit
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A 24-page PDF with skin-care routines, school checklists and questions to ask your
              doctor.
            </p>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03] sm:w-auto">
              <Download className="h-4 w-4" /> Download the PDF
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
              setEmail("");
            }}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <Newspaper className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
              Subscribe to the newsletter
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Monthly stories, program updates and resources — no spam, unsubscribe any time.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-border bg-background py-3 pl-9 pr-4 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]">
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className="mt-3 text-sm text-primary">Thanks — check your inbox to confirm.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
