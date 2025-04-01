import { BackEndTechnology, FrontEndTechnology } from "@/lib/Technologies";
import { CardPTechnologies } from "./CardTechnologies";
import Image from "next/image";

export default function FourthSection() {
    return (
        <section id="technologies" className="min-h-full flex flex-col items-center gap-8 p-8 lg:flex-row lg:justify-center lg:items-start lg:gap-10">
            <CardPTechnologies>
                <li>
                    <h1 className="text-4xl font-heading font-bold -mt-2">Front-End</h1>
                </li>
                {FrontEndTechnology.map((item) => (
                    <li key={item.id} className="flex items-center justify-between w-[60%] lg:w-[70%] duration-300 hover:transition-transform hover:scale-110">
                        <p className="text-xl text-gray-800 font-bold">{item.technologyName}</p>
                        <Image src={item.imageTechnology} alt={item.technologyName} width={40} height={40} />
                    </li>
                ))}
            </CardPTechnologies>


            <CardPTechnologies>
                <li><h1 className="text-4xl font-heading font-bold -mt-2">Back-End</h1></li>
                {BackEndTechnology.map((item) => (
                    <li key={item.id} className="flex items-center justify-between w-[60%] duration-300 hover:transition-transform hover:scale-110">
                        <p className="text-xl text-gray-800 font-bold">{item.technologyName}</p>
                        <Image src={item.imageTechnology} alt={item.technologyName} width={40} height={40} />
                    </li>
                ))}
            </CardPTechnologies>
        </section>
    )
}