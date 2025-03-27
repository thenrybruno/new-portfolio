import Button from "@/components/Button";
import { Frown, Home } from "lucide-react";
import Link from "next/link";


export default function NotFound() {
    return (
        <div className="h-lvh w-screen flex flex-col items-center justify-center gap-7">
            <h2 className="flex items-center gap-4 text-3xl font-bold">Opsss.... Algo deu errado <Frown className="w-[40px] h-[40px]"/></h2>
            <p className="text-2xl text-custom-gradient text-center">Clique no botão abaixo para te redirecionar!</p>
            <Link href='/' className="w-[300px]">
                <Button>
                    Voltar para Home
                    <Home />
                </Button>
            </Link>
        </div>
    )
}