import Image from "next/image";
import { CardProjects } from "./CardProjects";
import { ProjectData } from "@/lib/Projects";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import Button from "./Button";
import { DeveloperData } from "@/lib/Developer";


export default function ThirtySection() {
    return (
        <section className="min-h-full flex flex-col items-center gap-5 p-8 lg:grid lg:grid-cols-2 lg:px-18 lg:gap-16">
            {ProjectData.map((item) => (
                <div key={item.id} className="space-y-7 mt-5 lg:h-[500px]">
                    <h2 className="text-center text-3xl font-bold font-heading text-custom-gradient border border-b-first-red lg:text-5xl">
                        {item.projectName}
                    </h2>
                    <CardProjects>
                        <Image className="w-[80%] lg:w-[90%]" src={item.image} alt={`Imagem do projeto ${item.projectName}`} width={200} height={150} />
                        <p className="text-center text-gray-300 lg:text-[18px]">
                            {item.description}
                        </p>
                    </CardProjects>
                    <Link className="flex gap-5 text-gray-200 w-[140px] ml-5 transition-colors duration-300 hover:text-second-red" href={item.url} target="blank">
                        <span>Acessar Site</span>
                        <ArrowUpRight />
                    </Link>
                </div>
            ))}
            <div className="w-full flex flex-col items-center gap-5 mt-12 -mb-8 lg:flex-row lg:w-dvh">
                <p className="font-heading text-xl lg:w-full">
                    Acesse e veja mais projetos
                </p>
                <Link className="w-full" href={DeveloperData.github}>
                    <Button className="text-gray-200 hover:text-gray-400">
                        Veja mais
                        <Github />
                    </Button>
                </Link>
            </div>
        </section>
    )
}