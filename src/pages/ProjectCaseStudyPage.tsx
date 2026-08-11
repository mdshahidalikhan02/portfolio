import { Link, useParams } from "react-router-dom";
import { projects } from "../data/content";
import { PaymentDiagram } from "../components/CaseStudyPreview";

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    return (
      <div className="container-page py-24 text-center">
        <p className="text-text-muted">Project not found.</p>
        <Link to="/" className="mt-4 inline-block font-mono text-signal">
          ← back home
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <article className="py-16 md:py-20">
      <div className="container-page max-w-4xl">
        <Link to="/#projects" className="font-mono text-xs text-text-faint hover:text-signal">
          ← projects
        </Link>

        <p className="eyebrow mt-6 mb-3">{project.type} · case study</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">{project.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.7rem] text-text-muted">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-14">
          <Section title="Problem">
            <p className="text-[1.02rem] leading-relaxed text-text-muted">{cs.problem}</p>
          </Section>

          <Section title="Architecture">
            <p className="text-[1.02rem] leading-relaxed text-text-muted">{cs.architecture}</p>
            <div className="card mt-6 max-w-md p-6">
              <p className="eyebrow mb-4">request flow</p>
              <PaymentDiagram />
            </div>
          </Section>

          <Section title="Engineering decisions">
            <div className="space-y-6">
              {cs.decisions.map((d) => (
                <div key={d.heading} className="border-l-2 border-signal/50 pl-5">
                  <p className="font-display text-base font-semibold text-text">{d.heading}</p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-muted">{d.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Failure scenarios">
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.failureScenarios.map((f) => (
                <div key={f.heading} className="card p-5">
                  <p className="font-mono text-[0.72rem] uppercase tracking-wide text-danger">
                    {f.heading}
                  </p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-text-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Performance">
            <ul className="space-y-3">
              {cs.performance.map((p, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ok" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Trade-offs">
            <div className="space-y-6">
              {cs.tradeoffs.map((t) => (
                <div key={t.heading} className="border-l-2 border-hairline-strong pl-5">
                  <p className="font-display text-base font-semibold text-text">{t.heading}</p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-text-muted">{t.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Outcome">
            <p className="text-[1.02rem] leading-relaxed text-text-muted">{cs.outcome}</p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-hairline pt-10">
      <h2 className="font-mono text-xs uppercase tracking-wide text-signal">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
