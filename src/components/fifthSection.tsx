import { DeveloperData } from "@/lib/Developer";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";


export default function FifthSection() {
    return (
        <section className="min-h-full flex flex-col items-center gap-5 lg:grid lg:grid-cols-2 lg:px-18 lg:gap-16">
            <div className="flex flex-col items-center justify-center gap-7 p-8">
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl text-custom-gradient text-center font-heading font-bold">Vamos trabalhar juntos em seu próximo projeto</h2>
                    <p className="text-center font-bold text-gray-200">Entre em contato agora mesmo através do WhatsApp clicando no botão, e vamos conversar!</p>
                </div>
                <Link href={DeveloperData.whatsapp} target="blank">
                    <Image src={DeveloperData.whatsappImg} alt="WhatsApp" width={60} height={60} />
                </Link>
            </div>
            <div className="bg-second-red p-8 space-y-10">
                <p className="text-center text-gray-200 font-bold text-xl">Você também pode me acompanhar em minhas redes sociais ou se preferir, entrar em contato através do e-mail.</p>
                <div className="flex items-center justify-center gap-10">
                    <Link href={DeveloperData.github} target="blank">
                        <Image src={DeveloperData.githubImg} alt="GitHub" width={60} height={60} />
                    </Link>
                    <Link href={DeveloperData.linkedin} target="blank">
                        <Image src={DeveloperData.linkedinImg} alt="LinkedIn" width={60} height={60} />
                    </Link>
                    <Link href={DeveloperData.email}>
                        <Mail width={60} height={60}/>
                    </Link>
                </div>
            </div>
            <br /><br /><br /><br />
        </section>
    )
}