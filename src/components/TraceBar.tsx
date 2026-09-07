type TraceBarProps = {
  label: string;
  before?: string | null;
  after: string;
  beforeVal?: number | null;
  afterVal: number;
  maxVal?: number;
  detail?: string;
};

export default function TraceBar({
  label,
  before,
  after,
  beforeVal,
  afterVal,
  maxVal,
  detail,
}: TraceBarProps) {
  const max = maxVal ?? (beforeVal ?? afterVal) * 1.08;
  const beforePct = beforeVal ? Math.min(100, (beforeVal / max) * 100) : 0;
  const afterPct = Math.min(100, (afterVal / max) * 100);

  return (
    <div className="group">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-text-muted">
          {label}
        </span>
        <span className="font-mono text-[0.7rem] text-signal">
          {before ? `${before} → ${after}` : after}
        </span>
      </div>

      <div className="relative mt-2 h-2.5 w-full overflow-hidden rounded-sm bg-hairline/40">
        {beforeVal ? (
          <div
            className="absolute inset-y-0 left-0 rounded-sm bg-danger/35"
            style={{ width: `${beforePct}%` }}
          />
        ) : null}
        <div
          className="absolute inset-y-0 left-0 rounded-sm bg-ok/80 transition-all duration-700 ease-out group-hover:bg-ok"
          style={{ width: `${afterPct}%` }}
        />
      </div>

      {detail ? (
        <p className="mt-2 text-[0.8rem] leading-snug text-text-faint">{detail}</p>
      ) : null}
    </div>
  );
}
