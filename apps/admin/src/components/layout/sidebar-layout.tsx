import type { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'

type SidebarLayoutProps = {
    title: string
    children: ReactNode
}

export function SidebarLayout({ title, children }: SidebarLayoutProps) {
    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Header title={title} />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}