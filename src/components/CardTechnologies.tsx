import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface CardTechnologiesProps extends ComponentProps<'ul'> { }

export function CardPTechnologies({ className, ...props }: CardTechnologiesProps) {
    return (
        <ul className={twMerge("w-full min-h-[200px] border-2 bg-first-red shadow-lg shadow-second-red border-first-red flex flex-col items-center justify-center gap-5 rounded-lg p-5 md:w-[500px] lg:p-10 lg:gap-7", className)} {...props} />
    )
}