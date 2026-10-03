import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login({ role }: { role: 'student' | 'employee' }) {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [showPw, setShowPw] = useState(false)
  const student = role === 'student'

  const submit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: replace with real authentication (Supabase or your backend)
    if (student) {
      localStorage.setItem('aspira_regno', id)
      const done = localStorage.getItem('aspira_onboarded') === 'yes'
      navigate(done ? '/student/dashboard' : '/student/onboarding')
    } else {
      navigate('/employee/dashboard')
    }
  }

  return (
    <div className="grid min-h-screen place-items-center p-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl">
        <Link to="/" className="text-sm text-slate-500">← Back</Link>
        <h1 className="mb-1 mt-3 text-2xl font-bold">{student ? 'Student' : 'Employee'} Login</h1>
        <p className="mb-5 text-sm text-slate-500">Enter your details to continue</p>

        <label className="text-sm font-semibold">{student ? 'Registration number' : 'Employee ID'}</label>
        <input required value={id} onChange={(e) => setId(e.target.value)} className="mb-4 mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none focus:border-brand" />

        <label className="text-sm font-semibold">Password</label>
        <div className="relative mt-1">
          <input
            required
            type={showPw ? 'text' : 'password'}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pr-12 outline-none focus:border-brand"
          />
          <button
            type="button"
            onClick={() => setShowPw((s) => !s)}
            aria-label={showPw ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            {showPw ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        <button className={`mt-6 w-full rounded-xl p-3 font-bold text-white ${student ? 'bg-brand' : 'bg-teal-500'}`}>Login</button>
      </form>
    </div>
  )
}