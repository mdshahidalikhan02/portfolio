import { Link, useParams } from "react-router-dom";
import { notes } from "../data/content";

export default function NotePage() {
  const { slug } = useParams();
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div className="container-page py-24 text-center">
        <p className="text-text-muted">Note not found.</p>
        <Link to="/" className="mt-4 inline-block font-mono text-signal">
          ← back home
        </Link>
      </div>
    );
  }

  const idx = notes.findIndex((n) => n.slug === slug);
  const prev = notes[idx - 1];
  const next = notes[idx + 1];

  return (
    <article className="py-16 md:py-20">
      <div className="container-page max-w-3xl">
        <Link to="/#notes" className="font-mono text-xs text-text-faint hover:text-signal">
          ← engineering notes
        </Link>

        <div className="mt-6 flex flex-wrap gap-2">
          {note.tags.map((t) => (
            <span key={t} className="font-mono text-[0.68rem] uppercase tracking-wide text-signal">
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
          {note.title}
        </h1>

        <p className="mt-4 font-mono text-xs text-text-faint">{note.readTime} read · Engineering Note</p>

        <div className="mt-10 space-y-6 border-t border-hairline pt-10">
          {note.content.map((para, i) => (
            <p key={i} className="text-[1.02rem] leading-relaxed text-text-muted">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <Link to={`/notes/${prev.slug}`} className="font-mono text-xs text-text-muted hover:text-signal">
              ← {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/notes/${next.slug}`} className="font-mono text-xs text-text-muted hover:text-signal sm:text-right">
              {next.title} →
            </Link>
          ) : <span />}
        </div>
      </div>
    </article>
  );
}
