import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile, RESUME_PATH } from "../data/content";
import { useSectionNav } from "../lib/navigation";

const LINKS = [
  { id: "impact", label: "impact" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "notes", label: "notes" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { goToSection } = useSectionNav();

  useEffect(() => {
    setOpen(false);
  }, []);

  function handleClick(e: React.MouseEvent, id: string) {
    e.preventDefault();
    setOpen(false);
    goToSection(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-bg/85 backdrop-blur">
      <nav className="container-page flex h-[4.5rem] items-center justify-between">
        <Link
          to="/"
          onClick={(e) => handleClick(e, "top")}
          className="flex flex-col justify-center leading-tight"
        >
          <span className="flex items-baseline gap-2 font-display text-[0.95rem] font-semibold tracking-tight">
            <span className="text-signal">$</span>
            <span>{profile.name}</span>
          </span>
          <span className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-text-faint">
            Backend Software Engineer
          </span>
        </Link>

        <ul className="hidden items-center gap-7 font-mono text-[0.78rem] text-text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => handleClick(e, l.id)}
                className="transition-colors hover:text-signal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={RESUME_PATH}
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

      {open ? (
        <div className="border-t border-hairline bg-bg md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3 font-mono text-sm text-text-muted">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className="block py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={RESUME_PATH} download className="block py-2 text-signal">
                resume.pdf ↓
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
