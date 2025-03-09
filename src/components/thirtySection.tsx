import Image from "next/image";
import { CardProjects } from "./CardProjects";
import { ProjectData } from "@/lib/Projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


export default function ThirtySection() {
    return (
        <section className="min-h-full flex flex-col items-center gap-5 p-8">
            {ProjectData.map((item) => (
                <div key={item.id} className="space-y-7 mt-5">
                    <h2 className="text-center text-3xl font-bold font-heading text-custom-gradient border border-b-first-red">
                        {item.projectName}
                    </h2>
                    <CardProjects>
                        <Image className="w-[80%]" src={item.image} alt={`Imagem do projeto ${item.projectName}`} width={200} height={150}/>
                        <p className="text-center text-gray-300">
                            {item.description}
                        </p>
                    </CardProjects>
                    <Link className="flex gap-5 text-gray-200 w-[140px] transition-colors duration-300 hover:text-second-red" href={item.url} target="blank">
                        <span>Acessar Site</span>
                        <ArrowUpRight />
                    </Link>
                </div>
            ))}
        </section>
    )
}