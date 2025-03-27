import Image from 'next/image'
import logo from '../assets/new-logo.png'
import Link from 'next/link'
import { DeveloperData } from '@/lib/Developer'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='w-full max-w-screen p-3 space-y-5 my-5'>
            <div className="mr-4 cursor-pointer flex items-center justify-center">
                <Link href="/" className=" flex items-center">
                    <Image className="w-16" src={logo} alt="BCode - Desenvolvimento web" />
                    <span className="text-custom-gradient text-3xl"> - BCode</span>
                </Link>
            </div>
            <p className='text-center text-gray-200 text-sm'>
                Desenvolvido por <span className='text-custom-gradient font-heading font-bold text-xl'>{DeveloperData.name} © {currentYear}</span> . Todos os direitos reservados.
            </p>
        </footer>
    )
}