import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface CardProjectProps extends ComponentProps<'div'> { }

export function CardProjects({ className, ...props }: CardProjectProps) {
    return (
        <div className={twMerge("max-w-full min-h-[200px] bg-gray-600 flex flex-col items-center justify-center gap-5 rounded-md p-5", className)} {...props} />
    )
}