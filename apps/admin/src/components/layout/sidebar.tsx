import { Link } from '@tanstack/react-router'
import clsx from "clsx";

const navItems = [
    {label: 'Dashboard', to: '/'},
    {label: 'Products', to: '/products'},
]

export function Sidebar() {
    return (
        <aside className="w-64 border-r border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className={clsx(
                            'rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
                        )}
                        activeProps={{
                            className: 'bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white',
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}