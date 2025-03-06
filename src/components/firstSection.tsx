import { DeveloperData } from "@/lib/Developer";
import Image from "next/image";
import Button from "./Button";
import { ArrowRight } from "lucide-react";


export default function FirstSection() {
    return (
        <section className="min-h-full flex flex-col items-center gap-5 p-8 lg:flex-row lg:justify-center lg:gap-36">
            <Image className="rounded-4xl lg:w-[250px] lg:h-[350px]" src={DeveloperData.avatar} alt="Bruno" width={200} height={300}/>
            <div className="flex flex-col items-center gap-4 lg:max-w-[500px] lg:pt-32">
                <p className="text-gray-300 text-sm md:text-base">Olá eu sou <span className="text-custom-gradient text-base">{DeveloperData.name}</span></p>
                <h1 className="text-4xl text-custom-gradient text-center leading-none font-heading font-medium flex flex-col md:text-4xl lg:text-7xl">Desenvolvedor Front-End</h1>
                <p className="text-center text-gray-200">Apaixonado em criar experiências de usuários intuitivas e visualmente atraentes, quero te ajudar a <span className="text-custom-gradient text-xl font-bold">transformar sua idéia em realidade digital.</span></p>
                <Button>
                    Saiba mais
                    <ArrowRight />
                </Button>
            </div>
        </section>
    )
}