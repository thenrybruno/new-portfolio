import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button({ className, ...props }: ButtonProps) {
    return (
        <button className={twMerge("flex items-center justify-between px-5 h-12 bg-first-red text-gray-200 font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-second-red hover:text-gray-400", className)} {...props} />
    )
}