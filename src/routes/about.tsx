import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import teamImg from "@/assets/team-albinism.jpg";
import { Award, BadgeCheck, ShieldCheck, Star } from "lucide-react";

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

      {/* Brand Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">Founded in 2011, built by the community we serve.</h2>
          <p className="mt-5 text-muted-foreground">
            In 2011, a small circle of parents and young adults with albinism gathered in
            a Nairobi living room with a shared frustration: medical care was scarce,
            schools were unprepared, and harmful myths were going unchallenged. That
            meeting became the Albinism Forum.
          </p>
          <p className="mt-4 text-muted-foreground">
            Fifteen years on, we run sun-safe skin programs, scholarships, dermatology
            camps and a growing advocacy movement across East Africa — still led by the
            very community we serve.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[["2011","Founded"],["38+","Partner schools"],["20k+","Lives reached"]].map(([n,l]) => (
              <div key={l} className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]">
                <p className="font-serif text-2xl font-semibold text-primary">{n}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
          <img src={teamImg} alt="The Albinism Forum team" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

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

      {/* Team Profile */}
      <section className="border-y border-border bg-[var(--gradient-warm)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">Led by the community.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Amani Otieno", role: "Executive Director", bio: "Co-founder, advocate, and parent of a teen with albinism." },
              { name: "Dr. Faith Wanjiru", role: "Medical Lead", bio: "Dermatologist running our quarterly skin camps." },
              { name: "Brian Mwangi", role: "Programs Manager", bio: "Designs our education and livelihood programs." },
            ].map((m) => (
              <article key={m.name} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl">
                  <img src={teamImg} alt={m.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm font-medium text-primary">{m.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Certifications */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Recognition</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">Milestones & certifications.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: ShieldCheck, title: "NGO Board Certified", desc: "Registered NGO since 2012, in good standing." },
            { Icon: BadgeCheck, title: "ISO 9001:2015", desc: "Quality-managed programs and reporting." },
            { Icon: Award, title: "UN Albinism Award", desc: "Recognized for advocacy excellence, 2022." },
            { Icon: Star, title: "GuideStar Gold", desc: "Verified transparency in finance & impact." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
              <Icon className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-4 font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}