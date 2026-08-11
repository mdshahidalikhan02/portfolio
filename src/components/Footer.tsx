import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Tailwind.
        </p>
        <div className="flex gap-5 font-mono text-xs text-text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-signal">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-signal">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
