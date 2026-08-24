'use client'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#060608] text-white">
      {/* CONTENIDO PRINCIPAL */}
      <main className="p-8">
        {children}
      </main>
    </div>
  )
}