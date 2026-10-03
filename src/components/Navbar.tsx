import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/90 px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#home" className="hidden sm:block">Home</a>
          <a href="#placements" className="hidden sm:block">Placements</a>
          <a href="#provides" className="hidden sm:block">What we provide</a>
          <a href="#how" className="hidden sm:block">How it works</a>
          <button onClick={() => setOpen(true)} className="rounded-lg border border-brand px-4 py-2 font-semibold text-brand">Login</button>
          <Link to="/student/register" className="rounded-lg bg-gradient-to-r from-brand to-violet-500 px-4 py-2 font-semibold text-white">Get Started</Link>
        </div>
      </nav>
      <LoginModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
