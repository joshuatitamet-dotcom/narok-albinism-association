import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Sun, GraduationCap, Stethoscope, Briefcase, Megaphone, Users } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Albinism Forum" },
      { name: "description", content: "Sunscreen distribution, education scholarships, health camps and advocacy programs." },
      { property: "og:title", content: "Programs — Albinism Forum" },
      { property: "og:description", content: "How we serve communities living with albinism." },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  { icon: Sun, name: "Sun-Safe Skin Project", desc: "Quarterly sunscreen and protective-clothing distribution across rural counties." },
  { icon: Stethoscope, name: "Dermatology & Eye Camps", desc: "Free annual screenings with partner clinics — early detection saves lives." },
  { icon: GraduationCap, name: "Bright Futures Scholarships", desc: "School fees, low-vision aids and mentorship for learners with albinism." },
  { icon: Briefcase, name: "Livelihood & Skills", desc: "Vocational training and seed grants for adults launching small businesses." },
  { icon: Megaphone, name: "Voices Campaign", desc: "Media training and storytelling so members lead the public narrative." },
  { icon: Users, name: "Parent & Peer Circles", desc: "Monthly support meet-ups for families and youth across the region." },
];

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Practical programs. Measurable change."
        subtitle="Each program is co-designed with people with albinism and measured by real-world outcomes — skin protected, children in school, jobs created."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-3">
        {programs.map(({ icon: Icon, name, desc }) => (
          <article key={name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}