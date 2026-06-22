export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-[var(--gradient-warm)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl font-semibold leading-tight text-foreground md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}