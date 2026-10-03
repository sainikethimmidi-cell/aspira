import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const stats = [
  ['Highest Package', '46 LPA'],
  ['Average Package', '22 LPA'],
  ['Placement %', '85%'],
  ['Companies Visited', '89'],
]
const provides = ['Placement Preparation', 'DSA', 'Aptitude', 'Communication', 'GATE', 'Mentorship', 'Mock Interviews']
const steps = ['Assess', 'Learn', 'Practice', 'Get Mentored', 'Get Placed']

export default function Landing() {
  return (
    <div>
      <Navbar />

      <section id="home" className="px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold md:text-6xl">Welcome to VIT Aspira</h1>
        <p className="mt-3 tracking-wider text-slate-500">Transforming From Zero To Hero</p>
        <p className="mx-auto mt-6 max-w-xl text-slate-600">
          Roadmaps, practice, mentoring and AI interviews to take you from scratch to placement.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/student/login" className="rounded-xl bg-gradient-to-r from-brand to-violet-500 px-6 py-3 font-semibold text-white">Student Login</Link>
          <a href="#placements" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold">Explore Placements</a>
        </div>
      </section>

      <section id="placements" className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
            <div className="text-3xl font-bold text-brand">{value}</div>
            <div className="mt-1 text-sm text-slate-500">{label}</div>
          </div>
        ))}
      </section>

      <section id="provides" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-center text-3xl font-bold">What Aspira Provides</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {provides.map((p) => (
            <div key={p} className="rounded-2xl bg-white p-6 font-semibold shadow-sm ring-1 ring-slate-200">{p}</div>
          ))}
        </div>
      </section>

      <section id="how" className="bg-navy px-6 py-16 text-white">
        <h2 className="mb-8 text-center text-3xl font-bold">How Aspira Works</h2>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
          {steps.map((s, i) => (
            <div key={s} className="w-40 rounded-2xl bg-white/10 p-5 text-center">
              <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-teal-500 font-bold">{i + 1}</div>
              {s}
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">© VIT Aspira</footer>
    </div>
  )
}
