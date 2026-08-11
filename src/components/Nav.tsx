import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/content";

const LINKS = [
  { href: "#impact", label: "impact" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#notes", label: "notes" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/" || location.hash === "" || location.pathname === "";

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-bg/85 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 font-display text-[0.95rem] font-semibold tracking-tight">
          <span className="text-signal">$</span>
          <span>{profile.name}</span>
        </Link>

        {onHome ? (
          <ul className="hidden items-center gap-7 font-mono text-[0.78rem] text-text-muted md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-signal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <Link to="/" className="hidden font-mono text-[0.78rem] text-text-muted transition-colors hover:text-signal md:block">
            ← back home
          </Link>
        )}

        <a
          href="/resume/Md_Shahid_Khan_Resume.pdf"
          download
          className="hidden rounded-full border border-hairline-strong px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-wider text-text transition-colors hover:border-signal hover:text-signal md:inline-block"
        >
          resume.pdf
        </a>

        <button
          aria-label="Toggle menu"
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-lg">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && onHome ? (
        <div className="border-t border-hairline bg-bg md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3 font-mono text-sm text-text-muted">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block py-2" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume/Md_Shahid_Khan_Resume.pdf" download className="block py-2 text-signal">
                resume.pdf ↓
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
