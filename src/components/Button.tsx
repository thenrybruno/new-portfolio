import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
    return (
        <button className="flex items-center justify-between px-5 h-12 bg-first-red text-gray-700 font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-second-red hover:text-gray-900 md:max-w-[500px] " {...props} />
    )
}