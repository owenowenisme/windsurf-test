import { ReactNode } from 'react'
import { Header } from './header'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  )
}
