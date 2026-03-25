import { Heading } from './heading.tsx'

type HeaderProps = {
    title: string
}

export function Header({ title }: HeaderProps) {
    return (
        <header className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
            <Heading level={1}>{title}</Heading>
        </header>
    )
}