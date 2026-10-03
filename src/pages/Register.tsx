import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const input = 'mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 outline-none focus:border-brand'

export default function Register() {
  const navigate = useNavigate()
  const [f, setF] = useState({
    name: '', regNo: '', email: '', password: '',
    leetcode: '', gfg: '', linkedin: '', other: '',
    track: 'placements', role: 'SDE',
  })
  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    // TODO: save f to your database, then create the student's roadmap
    console.log(f)
    navigate('/student/dashboard')
  }

  const field = (label: string, key: keyof typeof f, type = 'text', required = true) => (
    <div className="mb-3">
      <label className="text-sm font-semibold">{label}</label>
      <input type={type} required={required} value={f[key]} onChange={(e) => set(key, e.target.value)} className={input} />
    </div>
  )

  return (
    <div className="grid min-h-screen place-items-center p-4">
      <form onSubmit={submit} className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        <Link to="/" className="text-sm text-slate-500">← Back</Link>
        <h1 className="mb-5 mt-3 text-2xl font-bold">Student Registration</h1>

        <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-500">Basic details</h2>
        {field('Full name', 'name')}
        {field('Registration number', 'regNo')}
        {field('Email', 'email', 'email')}
        {field('Password', 'password', 'password')}

        <h2 className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-violet-500">Profile links</h2>
        {field('LeetCode link', 'leetcode', 'url')}
        {field('GeeksforGeeks link', 'gfg', 'url', false)}
        {field('LinkedIn link', 'linkedin', 'url')}
        {field('Other (GitHub, CodeChef...)', 'other', 'url', false)}

        <h2 className="mb-2 mt-5 text-xs font-bold uppercase tracking-widest text-violet-500">Your goal</h2>
        <div className="mb-3 grid grid-cols-2 gap-3">
          {['placements', 'gate'].map((t) => (
            <button type="button" key={t} onClick={() => set('track', t)}
              className={`rounded-xl border p-3 font-semibold capitalize ${f.track === t ? 'border-brand bg-brand/10 text-brand' : 'border-slate-200'}`}>
              {t === 'gate' ? 'GATE' : 'Placements'}
            </button>
          ))}
        </div>
        {f.track === 'placements' && (
          <select value={f.role} onChange={(e) => set('role', e.target.value)} className={input}>
            <option>SDE</option><option>Data Analyst</option><option>Testing / QA</option>
          </select>
        )}

        <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-brand to-violet-500 p-3 font-bold text-white">Create account</button>
      </form>
    </div>
  )
}
