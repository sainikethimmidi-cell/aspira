import { useEffect, useState } from 'react'
import { placementSDE } from '../../data/roadmap'

const KEY = 'aspira_roadmap_done'

export default function Roadmap() {
  const [done, setDone] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
  })
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(done)) } catch { /* ignore */ }
  }, [done])

  const toggle = (i: number) =>
    setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]))

  const total = placementSDE.length
  const pct = Math.round((done.length / total) * 100)
  const current = placementSDE.findIndex((_, i) => !done.includes(i))

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-3xl bg-gradient-to-br from-brand to-violet-500 p-6 text-white">
        <h1 className="text-2xl font-bold">My Roadmap</h1>
        <p className="text-sm opacity-90">Sai Niketh · Placements · SDE</p>
        <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/25">
          <div className="h-full rounded-full bg-white transition-all" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <span>{done.length} of {total} stages done</span><span>{pct}%</span>
        </div>
      </div>

      <div className="relative mt-6 pl-10 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
        {placementSDE.map((s, i) => {
          const isDone = done.includes(i)
          const isCur = i === current
          return (
            <div key={s.title} className={`relative mb-4 rounded-2xl border bg-white p-5 ${isCur ? 'border-brand ring-4 ring-brand/10' : 'border-slate-200'}`}>
              <div className={`absolute -left-10 top-4 grid h-8 w-8 place-items-center rounded-full border-2 text-xs font-bold ${isDone ? 'border-teal-500 bg-teal-500 text-white' : isCur ? 'border-brand bg-white text-brand' : 'border-slate-200 bg-white text-slate-400'}`}>
                {isDone ? '✓' : i}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-violet-500">Stage {i}{isCur && ' · current'}</div>
              <h3 className={`text-lg font-semibold ${isDone ? 'line-through opacity-60' : ''}`}>{s.title}</h3>
              <p className="my-2 text-sm text-slate-500">{s.desc}</p>
              <div className="mb-3 flex flex-wrap gap-2">
                {s.resources.map((r) => (
                  <span key={r} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500">{r}</span>
                ))}
              </div>
              <button onClick={() => toggle(i)} className={`rounded-xl border px-4 py-2 text-sm font-semibold ${isDone ? 'border-teal-500 bg-teal-500 text-white' : 'border-brand text-brand'}`}>
                {isDone ? 'Completed ✓' : 'Mark as done'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
