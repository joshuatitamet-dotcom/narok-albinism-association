import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Albinism Forum" },
      { name: "description", content: "Get in touch with the Albinism Forum — partnerships, support, media." },
      { property: "og:title", content: "Contact the Albinism Forum" },
      { property: "og:description", content: "Reach our team for support, partnerships and media." },
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
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          {[
            { Icon: Mail, label: "Email", value: "hello@albinismforum.org" },
            { Icon: Phone, label: "Phone", value: "+254 700 000 000" },
            { Icon: MapPin, label: "Office", value: "Nairobi, Kenya" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <Icon className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>
          <div className="mt-4">
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
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
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03] disabled:opacity-60"
          >
            {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "sent" && <p className="mt-4 text-sm text-primary">Thanks — your message has been received.</p>}
          {status === "error" && <p className="mt-4 text-sm text-destructive">{errMsg ?? "Something went wrong."}</p>}
        </form>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
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