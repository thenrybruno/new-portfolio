import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface CardProps extends ComponentProps<'div'> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div className={twMerge("max-w-full min-h-[200px] flex flex-col items-center gap-5 rounded-md p-5 md:min-h-[150px] lg:max-w-[400px] lg:min-h-[270px] lg:gap-8", className)} {...props} />
    )
}

interface TitleCardProps extends ComponentProps<'div'> { }

export function TitleCard({ className, ...props }: TitleCardProps) {
    return (
        <div className={twMerge("flex items-center justify-between w-[90%] text-2xl font-bold font-heading lg:text-2xl", className)} {...props} />
    )
}

interface TextCardProps extends ComponentProps<'p'> { }

export function TextCard({className, ...props}: TextCardProps) {
    return (
        <p className={twMerge("text-justify text-sm font-bold w-[90%] lg:text-[1rem]", className)} {...props} />
    )
}