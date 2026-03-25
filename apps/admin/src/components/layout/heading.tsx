import type {ReactNode, ComponentPropsWithoutRef, ElementType} from 'react';
import clsx from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type HeaderProps = {
    level?: HeadingLevel
    children?: ReactNode
    className?: string
} & ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

export function Heading({ level = 1, className, children, ...props }: HeaderProps) {
    const Element = `h${level}` as ElementType

    return (
        <Element
            {...props}
            className={clsx('text-2xl font-semibold text-zinc-950 dark:text-white', className)}
        >
            {children}
        </Element>
    )
}

export function Subheading({ level = 2, className, children, ...props }: HeaderProps) {
    const Element = `h${level}` as ElementType

    return (
        <Element
            {...props}
            className={clsx('text-2xl font-semibold text-zinc-950 dark:text-white', className)}
        >
            {children}
        </Element>
    )
}