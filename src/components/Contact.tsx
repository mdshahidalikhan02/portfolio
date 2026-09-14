import { profile, RESUME_LINK } from "../data/content";
import { SectionHeading } from "./Metrics";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[connect] contact" title="Let's talk systems" />
        <p className="mt-4 max-w-xl text-text-muted">
          Open to backend / distributed-systems engineering conversations — reach out directly.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:max-w-2xl">
          <ContactCard label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactCard label="Phone" value={profile.phone} href={`tel:+91${profile.phone}`} />
          <ContactCard label="LinkedIn" value={profile.linkedinLabel} href={profile.linkedin} />
          <ContactCard label="GitHub" value={profile.githubLabel} href={profile.github} />
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="card group flex flex-col p-5 transition-colors hover:border-signal/50 sm:col-span-2"
          >
            <span className="font-mono text-[0.68rem] uppercase tracking-wide text-text-faint">Resume</span>
            <span className="mt-1.5 flex items-center gap-2 text-[0.95rem] text-text group-hover:text-signal">
              View Resume ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="card group flex flex-col p-5 transition-colors hover:border-signal/50"
    >
      <span className="font-mono text-[0.68rem] uppercase tracking-wide text-text-faint">{label}</span>
      <span className="mt-1.5 truncate text-[0.95rem] text-text group-hover:text-signal">{value}</span>
    </a>
  );
}
