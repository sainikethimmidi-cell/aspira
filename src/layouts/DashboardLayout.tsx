import { NavLink, Outlet, Link } from 'react-router-dom'

type Props = { title: string; base: string; links: string[] }
const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-')

export default function DashboardLayout({ title, base, links }: Props) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 shrink-0 bg-navy p-5 text-white">
        <Link to="/" className="text-2xl font-extrabold text-violet-400">Aspira</Link>
        <p className="mb-5 mt-1 text-xs uppercase tracking-widest text-slate-400">{title}</p>
        <nav className="flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l}
              to={`${base}/${slug(l)}`}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-brand font-semibold' : 'text-slate-300 hover:bg-white/10'}`
              }
            >
              {l}
            </NavLink>
          ))}
        </nav>
        <Link to="/" className="mt-6 block text-sm text-slate-400 hover:text-white">Log out</Link>
      </aside>
      <main className="flex-1 p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  )
}
