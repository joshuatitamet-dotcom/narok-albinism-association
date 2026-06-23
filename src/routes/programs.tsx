import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Sun, GraduationCap, Stethoscope, Briefcase, Megaphone, Users, Check, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";

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

      {/* Curriculum / Agenda */}
      <section className="border-y border-border bg-[var(--gradient-warm)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Curriculum & Agenda</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">What you'll learn in our flagship program.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { week: "Week 1", title: "Understanding Albinism", points: ["Genetics & medical basics","Common myths debunked","Family support systems"] },
              { week: "Week 2", title: "Sun-Safe Living", points: ["Daily skin routines","Sunscreen application clinic","Protective clothing fittings"] },
              { week: "Week 3", title: "Education & Vision", points: ["Low-vision aids workshop","School advocacy toolkit","Teacher partnerships"] },
              { week: "Week 4", title: "Livelihoods & Voice", points: ["Vocational training tracks","Media & storytelling","Rights & legal protections"] },
            ].map((m) => (
              <div key={m.week} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{m.week}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{m.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Registration */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing & Registration</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">Choose how you want to take part.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { name: "Community", price: "Free", desc: "Open to all persons with albinism and their families.", features: ["Monthly peer circles","Resource library","WhatsApp support"], cta: "Join Free" },
            { name: "Learner", price: "$25", per: "/ program", desc: "Full 4-week curriculum + materials.", features: ["All Community perks","Workbook & sunscreen kit","Certificate of completion"], cta: "Enroll Now", featured: true },
            { name: "Partner", price: "$250", per: "/ year", desc: "For schools, clinics and NGOs.", features: ["Staff training","Co-branded materials","Quarterly impact reports"], cta: "Become a Partner" },
          ].map((p) => (
            <article key={p.name} className={`rounded-3xl border p-7 shadow-[var(--shadow-card)] ${p.featured ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
              <p className="font-serif text-xl font-semibold text-foreground">{p.name}</p>
              <p className="mt-4 font-serif text-4xl font-semibold text-foreground">{p.price}<span className="text-base font-normal text-muted-foreground">{p.per ?? ""}</span></p>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {p.features.map((f) => <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />{f}</li>)}
              </ul>
              <Link to="/contact" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]">
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-[var(--gradient-warm)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">Voices from the program.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { quote: "The scholarship changed my daughter's life. She's now in secondary school with the low-vision aids she needs.", name: "Mary K.", role: "Parent, Kisumu" },
              { quote: "I learned how to protect my skin properly — and I now train others in my village.", name: "Daniel O.", role: "Peer Educator" },
              { quote: "The Forum's media training gave me the confidence to share my story on national TV.", name: "Grace W.", role: "Youth Advocate" },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-4 text-sm text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}