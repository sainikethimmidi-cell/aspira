import { Link } from 'react-router-dom'

const cards = [
  ['Roadmap', 'Track your stages', '/student/roadmap'],
  ['Interview Studio', 'Practice with the AI interviewer', '/student/interview-studio'],
  ['DSA', 'Practice links and sheets', '/student/dsa'],
  ['Companies', 'Explore target companies', '/student/companies'],
]

export default function StudentDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome back, Sai Niketh</h1>
      <p className="mb-6 text-slate-500">Placements · SDE</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map(([t, d, to]) => (
          <Link key={t} to={to} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5">
            <b className="text-lg">{t}</b>
            <p className="text-sm text-slate-500">{d}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
