type Student = {
  name: string; regNo: string; track: string; role: string; stage: number
  links: { label: string; url: string }[]
}

// Sample data. Replace with data fetched from your database.
const students: Student[] = [
  {
    name: 'Sai Niketh', regNo: '24PA1A45A2', track: 'Placements', role: 'SDE', stage: 3,
    links: [
      { label: 'LeetCode', url: 'https://leetcode.com/' },
      { label: 'GFG', url: 'https://www.geeksforgeeks.org/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
    ],
  },
  { name: 'Sample Student', regNo: '24PA1A0000', track: 'GATE', role: 'CSE', stage: 1, links: [] },
]

export default function Students() {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">Students</h1>
      <p className="mb-6 text-slate-500">Open a student's coding profiles and check their progress.</p>
      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>{['Name', 'Reg. no', 'Track', 'Role', 'Stage', 'Profile links'].map((h) => <th key={h} className="p-4">{h}</th>)}</tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.regNo} className="border-t border-slate-100">
                <td className="p-4 font-semibold">{s.name}</td>
                <td className="p-4">{s.regNo}</td>
                <td className="p-4">{s.track}</td>
                <td className="p-4">{s.role}</td>
                <td className="p-4">{s.stage} / 9</td>
                <td className="flex flex-wrap gap-2 p-4">
                  {s.links.length === 0 && <span className="text-slate-400">None</span>}
                  {s.links.map((l) => (
                    <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="rounded-lg bg-brand/10 px-3 py-1 font-semibold text-brand">{l.label}</a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
