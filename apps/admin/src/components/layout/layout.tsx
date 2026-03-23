import type React from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header.tsx'

type LayoutProps = {
    title: string
    children: React.ReactNode
}

export function Layout({ title, children }: LayoutProps) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header title={title} />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}