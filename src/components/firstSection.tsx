import { DeveloperData } from "@/lib/Developer";
import Image from "next/image";


export default function FirstSection() {
    return (
        <section className="min-h-full flex flex-col items-center">
            <Image src={DeveloperData.avatar} alt="Bruno" width={200} height={300}/>
            <div>
                <p>Olá eu sou <span>{DeveloperData.name}</span></p>
                <h1>Desenvolvedor Front-End</h1>
                <p>Apaixonado em criar experiências de usuários intuitivas e visualmente atraentes, quero te ajudar a transformar sua idéia em realidade digital. </p>
                <button>Saiba mais</button>
            </div>
        </section>
    )
}