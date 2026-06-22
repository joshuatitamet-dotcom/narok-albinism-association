import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Albinism Forum" },
      { name: "description", content: "Our mission, vision and the people behind the Albinism Forum." },
      { property: "og:title", content: "About the Albinism Forum" },
      { property: "og:description", content: "Our mission, vision and the people behind our work." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We are a community, not a campaign."
        subtitle="The Albinism Forum was founded by parents, persons with albinism, doctors and educators who believed a better life was possible — and were tired of waiting."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-foreground">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            To protect the health, education and dignity of every person living
            with albinism through community-led programs, advocacy and honest
            storytelling.
          </p>
          <h2 className="mt-10 font-serif text-3xl font-semibold text-foreground">Our Vision</h2>
          <p className="mt-4 text-muted-foreground">
            A society where albinism is understood, celebrated, and never a
            barrier to opportunity.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-serif text-2xl font-semibold text-foreground">Our Values</h3>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            {[
              ["Dignity first", "Every program starts with the lived experience of our members."],
              ["Evidence-based", "Our health and education work is grounded in clinical guidance."],
              ["Local leadership", "Programs are designed and led by people with albinism."],
              ["Radical visibility", "We refuse to be hidden, pitied, or spoken over."],
            ].map(([t, d]) => (
              <li key={t}>
                <p className="font-semibold text-foreground">{t}</p>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}