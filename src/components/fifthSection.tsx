import { DeveloperData } from "@/lib/Developer";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";


export default function FifthSection() {
    return (
        <section className="min-h-full flex flex-col items-center gap-5">
            <div className="flex flex-col items-center justify-center gap-7 p-8 lg:gap-12">
                <div className="flex flex-col items-center gap-5 lg:gap-10">
                    <h2 className="text-3xl text-custom-gradient text-center font-heading font-bold sm:text-4xl lg:text-5xl">Vamos trabalhar juntos em seu próximo projeto</h2>
                    <p className="text-center font-bold text-gray-200 sm:text-2xl lg:text-3xl lg:max-w-[900px]">Entre em contato agora mesmo através do WhatsApp clicando no botão, e vamos conversar!</p>
                </div>
                <Link className="duration-300 hover:transition-transform hover:scale-125" href={DeveloperData.whatsapp} target="blank">
                    <Image src={DeveloperData.whatsappImg} alt="WhatsApp" width={60} height={60} />
                </Link>
            </div>
            <div className="bg-second-red p-8 space-y-10 lg:space-y-14">
                <p className="text-center text-gray-200 font-bold text-xl sm:text-2xl lg:text-3xl">Você também pode me acompanhar em minhas redes sociais ou se preferir, entrar em contato através do e-mail.</p>
                <div className="flex items-center justify-center gap-10">
                    <Link className="duration-300 hover:transition-transform hover:scale-125" href={DeveloperData.github} target="blank">
                        <Image src={DeveloperData.githubImg} alt="GitHub" width={60} height={60} />
                    </Link>
                    <Link className="duration-300 hover:transition-transform hover:scale-125" href={DeveloperData.linkedin} target="blank">
                        <Image src={DeveloperData.linkedinImg} alt="LinkedIn" width={60} height={60} />
                    </Link>
                    <Link className="duration-300 hover:transition-transform hover:scale-125" href={DeveloperData.email}>
                        <Mail width={60} height={60}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}