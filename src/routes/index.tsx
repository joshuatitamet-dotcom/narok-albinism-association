import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-albinism.jpg";
import { Sun, HeartHandshake, Megaphone, GraduationCap, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Albinism Forum — Home" },
      { name: "description", content: "We advocate, educate, and empower people living with albinism through community programs, awareness, and health support." },
      { property: "og:title", content: "Albinism Forum — Home" },
      { property: "og:description", content: "Advocacy, education and empowerment for people living with albinism." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO with image + overlay text */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="A diverse group of people with albinism smiling together at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground">
            <Sun className="h-3.5 w-3.5" /> Understanding Albinism
          </span>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl">
            Every shade of human deserves dignity, sunlight and a future.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Albinism is a rare, inherited condition that reduces melanin in the
            skin, hair, and eyes. People living with albinism face real risks —
            from skin cancer and visual impairment to stigma and discrimination.
            We exist to change that story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]">
              Learn About Us
            </Link>
            <Link to="/programs" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Key Highlights</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground">
            What the Albinism Forum stands for
          </h2>
          <p className="mt-3 text-muted-foreground">
            Six pillars that guide our work across communities, classrooms and clinics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Skin Health & Sun Safety", desc: "Free sunscreen distribution, dermatology screenings and protective clothing for at-risk members." },
            { icon: GraduationCap, title: "Inclusive Education", desc: "Low-vision learning aids and scholarships so children with albinism stay in school and thrive." },
            { icon: Megaphone, title: "Awareness & Advocacy", desc: "We confront myths and discrimination through public campaigns and policy engagement." },
            { icon: HeartHandshake, title: "Family Support", desc: "Peer groups and counseling for parents raising a child with albinism." },
            { icon: Users, title: "Community Empowerment", desc: "Skills training and small-business grants that build long-term independence." },
            { icon: Sun, title: "Visibility & Dignity", desc: "Telling our stories on our terms — in media, art, and public life." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/30 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "12k+", v: "People supported" },
            { k: "38", v: "Schools partnered" },
            { k: "9", v: "Counties reached" },
            { k: "100%", v: "Community-led" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="font-serif text-5xl font-semibold text-primary">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONCLUSION / CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">In conclusion</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold text-foreground md:text-5xl">
          Albinism is not a curse. It is a colour of humanity.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          When we protect skin, fund education, and tell honest stories, an
          entire community moves from the margins into full participation in
          society. You can be part of that shift — as a volunteer, a partner,
          a donor or simply a friend.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:scale-[1.03] transition-transform">
            Join the movement
          </Link>
          <Link to="/blogs" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
            Read our stories
          </Link>
        </div>
      </section>
    </>
  );
}
