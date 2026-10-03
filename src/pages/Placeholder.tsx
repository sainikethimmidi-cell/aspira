export default function Placeholder({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-slate-500">This page is coming soon.</p>
    </div>
  )
}
