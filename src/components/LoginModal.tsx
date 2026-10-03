import { Link } from 'react-router-dom'

type Props = { open: boolean; onClose: () => void }

export default function LoginModal({ open, onClose }: Props) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-3 text-2xl text-slate-400" aria-label="Close">×</button>
        <h2 className="text-2xl font-bold">Login to VIT Aspira</h2>
        <p className="mb-5 text-sm text-slate-500">Choose how you want to continue</p>

        <Link to="/student/login" className="mb-3 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-brand">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-xl text-white">🎓</span>
          <span><b className="block">Student</b><span className="text-sm text-slate-500">Roadmaps, practice and mentoring</span></span>
        </Link>

        <Link to="/employee/login" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-teal-500">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-500 text-xl text-white">💼</span>
          <span><b className="block">Employee</b><span className="text-sm text-slate-500">Faculty and mentors: track students</span></span>
        </Link>
      </div>
    </div>
  )
}
