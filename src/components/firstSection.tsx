'use client'

import { DeveloperData } from "@/lib/Developer";
import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function FirstSection() {
    return (
        <section id="home" className="min-h-full flex flex-col items-center gap-12 p-8 mt-20 lg:flex-row lg:justify-center lg:gap-36">
            <Image className="rounded-4xl lg:w-[250px] lg:h-[350px]" src={DeveloperData.avatar} alt="Bruno" width={200} height={300} />
            <motion.div className="flex flex-col items-center gap-4 lg:max-w-[500px] lg:pt-32" initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .2,
                        duration: 1
                    }
                },
            }}>
                <p className="text-gray-300 text-sm md:text-base lg:text-xl">Olá eu sou <span className="text-custom-gradient text-base lg:text-xl">{DeveloperData.name}</span></p>
                <h1 className="text-5xl text-custom-gradient text-center leading-none font-heading font-medium flex flex-col md:text-4xl lg:text-7xl">Desenvolvedor Front-End JR</h1>
                <p className="text-center text-gray-200">Apaixonado em criar experiências de usuários intuitivas e visualmente atraentes, quero te ajudar a <span className="text-custom-gradient text-xl font-bold">transformar sua idéia em realidade digital.</span></p>
                <Link className="w-full flex items-center justify-center" href='#about'>
                    <Button>
                        Saiba mais
                        <ArrowRight />
                    </Button>
                </Link>
            </motion.div>
        </section>
    )
}