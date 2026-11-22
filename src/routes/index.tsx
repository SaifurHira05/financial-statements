import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
      <h1 className="font-serif text-5xl font-bold text-amber-900 mb-2">Welcome to QC Baked Goods</h1>
      <h2 className="text-xl font-medium uppercase tracking-widest text-amber-700 border-b border-amber-200 pb-3 mb-6">Financial Statements</h2>
    </div>
  )
}
