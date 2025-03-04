'use client'

import { CircleX, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from '../assets/new-logo.png'


export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: "Inicio", href: "/" },
        { name: "Sobre", href: "/about" },
        { name: "Projetos", href: "/news" },
        { name: "Tecnologias", href: "/contact" },
        { name: "Contatos", href: "/contact" },
    ]

    return (
        <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-opacity-90 sticky top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
            <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-200">
                <div className="mr-4 cursor-pointer py-1.5">
                    <Link href="/" className=" flex items-center">
                        <Image className="w-16" src={logo} alt="BCode - Desenvolvimento web" />
                        <span className="text-custom-gradient text-3xl"> - BCode</span>
                    </Link>

                </div>

                <div className="lg:hidden">
                    <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase cursor-pointer text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={toggleMobileMenu} type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-colors duration-300 hover:text-gray-900">
                            <Menu />
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 left-0 min-h-screen w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden z-50`}
                >
                    <div className="flex items-center justify-between border-b border-first-red p-4">
                        <Link href="/" className="flex items-center">
                            <Image className="w-16" src={logo} alt="BCode - Desenvolvimento web" />
                            <span className="text-custom-gradient"> - BCode</span>
                        </Link>
                        <button onClick={toggleMobileMenu} className="text-first-red text-center cursor-pointer transition-colors duration-300 hover:text-gray-400">
                            <CircleX />
                        </button>
                    </div>
                    <ul className="flex flex-col h-full gap-4 p-4">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center p-1 text-lg gap-x-2 text-first-red hover:text-gray-400"
                            >
                                <Link href={item.href} className="flex items-center">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center p-1 text-lg gap-x-2 text-gray-200 transition-colors duration-300 hover:text-gray-300"
                            >
                                <Link href={item.href} className="flex items-center">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}