import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">
            Albinism Forum
          </h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Championing dignity, visibility, and opportunity for people living
            with albinism — one community at a time.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-foreground">Programs</Link></li>
            <li><Link to="/blogs" className="hover:text-foreground">Blogs</Link></li>
            <li><Link to="/pages" className="hover:text-foreground">Pages</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Get in Touch
          </h4>
          <p className="mt-3 text-sm text-muted-foreground">
            reubenmpatiany@gmail.com<br />
            254 728855087<br />
            Narok, Kenya
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Albinism Forum. All rights reserved.
      </div>
    </footer>
  );
}