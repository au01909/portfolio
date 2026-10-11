import type { Project } from '../data/portfolio'

export function ArchitectureDiagram({ arch }: { arch: NonNullable<Project['architecture']> }) {
  const box = 'border border-ink/30 bg-bg px-3 py-2 text-[13px] leading-snug text-ink'
  return (
    <figure>
      <figcaption className="eyebrow text-muted mb-4">{arch.title}</figcaption>
      <ol className="flex flex-col md:flex-row md:flex-wrap gap-y-2 md:items-stretch">
        {arch.steps.map((s, i) => (
          <li key={s} className="flex flex-col md:flex-row md:items-center">
            <span className={box}>{s}</span>
            {i < arch.steps.length - 1 && (
              <span aria-hidden className="text-primary font-mono px-2 py-1 md:py-0 text-center">→</span>
            )}
          </li>
        ))}
      </ol>
      {arch.branch && (
        <div className="mt-4 border-l-2 border-accent pl-4">
          <p className="font-mono text-[11px] text-muted mb-2">{arch.branch.label}</p>
          <ol className="flex flex-col md:flex-row md:flex-wrap gap-y-2 md:items-center">
            {arch.branch.steps.map((s, i) => (
              <li key={s} className="flex flex-col md:flex-row md:items-center">
                <span className={box}>{s}</span>
                {i < arch.branch!.steps.length - 1 && (
                  <span aria-hidden className="text-accent font-mono px-2 py-1 md:py-0 text-center">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
      <p className="text-sm text-muted mt-4 max-w-2xl leading-relaxed">{arch.caption}</p>
    </figure>
  )
}
