'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Package, 
  DollarSign, 
  Users, 
  ShoppingBag, 
  Tag, 
  Settings, 
  LogOut 
} from 'lucide-react'

const navItems = [
  { name: 'Inventario', href: '/dashboard', icon: Package },
  { name: 'Finanzas', href: '/dashboard/finanzas', icon: DollarSign },
  { name: 'Asesores', href: '/dashboard/asesores', icon: Users },
  { name: 'Pedidos', href: '/dashboard/pedidos', icon: ShoppingBag },
  { name: 'Eventos & Ofertas', href: '/dashboard/ofertas', icon: Tag },
  { name: 'Configuración', href: '/dashboard/configuracion', icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-[#060608] text-white">
      {/* SIDEBAR VERTICAL */}
      <aside className="w-64 border-r border-neutral-800/80 bg-[#0c0c0e] p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-8">
          <div className="px-2">
            <h2 className="font-heading text-lg font-black uppercase tracking-wider text-white">
              REALITY<span className="text-red-600">SHOP</span>
            </h2>
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Admin Control</p>
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                      : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <Icon className="size-4" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:bg-neutral-900 hover:text-red-500 transition-all">
          <LogOut className="size-4" />
          Cerrar Sesión
        </button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}