import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail, MapPin, Phone, Loader2, MessageCircle, HelpCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Albinism Forum" },
      {
        name: "description",
        content: "Get in touch with the Albinism Forum — partnerships, support, media.",
      },
      { property: "og:title", content: "Contact the Albinism Forum" },
      {
        property: "og:description",
        content: "Reach our team for support, partnerships and media.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrMsg(null);
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name,
      email: form.email,
      subject: form.subject || null,
      message: form.message,
    });
    if (error) {
      setErrMsg(error.message);
      setStatus("error");
      return;
    }
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk."
        subtitle="Partnerships, volunteering, media, or simply a question — we read every message."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <div className="space-y-6">
          {[
            { Icon: Mail, label: "Email", value: "reubenmpatiany@gmail.com" },
            { Icon: Phone, label: "Phone", value: "254 728855087" },
            { Icon: MapPin, label: "Office", value: "Narok, Kenya" },
            {
              Icon: Clock,
              label: "Business Hours",
              value: "Open 24 / 7 — our support line never closes.",
            },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{label}</p>
                <p className="break-words text-sm text-muted-foreground">{value}</p>
              </div>
            </div>
          ))}
          <a
            href="https://wa.me/254728855087"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-primary/10 p-5 shadow-[var(--shadow-card)] transition-transform hover:scale-[1.01]"
          >
            <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Chat on WhatsApp</p>
              <p className="text-sm text-muted-foreground">Live chat with our support team.</p>
            </div>
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              required
            />
          </div>
          <div className="mt-4">
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-foreground">Message</label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03] disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="mt-4 text-sm text-primary">Thanks — your message has been received.</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-destructive">{errMsg ?? "Something went wrong."}</p>
          )}
        </form>
      </section>

      {/* Quick FAQs / Support Links */}
      <section className="border-t border-border bg-[var(--gradient-warm)]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-primary" />
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Quick FAQs
            </p>
          </div>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Before you write — you might find the answer here.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                q: "How do I enroll my child in the scholarship program?",
                a: "Visit our Programs page and click Enroll. Applications open quarterly.",
              },
              {
                q: "Do you ship sunscreen to rural areas?",
                a: "Yes — every quarter through our Sun-Safe Skin Project. Sign up via Programs.",
              },
              {
                q: "How can I volunteer or partner with you?",
                a: "Send us a message using the form above or chat on WhatsApp.",
              },
              {
                q: "Is the Albinism Forum a registered NGO?",
                a: "Yes, we have been a registered NGO since 2012.",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <p className="font-semibold text-foreground">{f.q}</p>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
