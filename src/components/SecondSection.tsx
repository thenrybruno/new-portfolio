import { CardContent } from "@/lib/CardsContent";
import { Card, TextCard, TitleCard } from "./Card";
import { GraduationCap, Trophy, User } from "lucide-react";


export default function SecondSection() {
    return (
        <section id="about" className="min-h-full flex flex-col items-center gap-5 p-8 lg:flex-row lg:justify-center lg:gap-18">
            <Card className="bg-gray-700 text-gray-200">
            <TitleCard className="text-first-red">
                    <h2>{CardContent[0].title}</h2>
                    <User />
                </TitleCard>
                <TextCard>
                    {CardContent[0].description}
                </TextCard>
            </Card>
            <Card className="bg-first-red text-gray-900">
                <TitleCard className="text-gray-200">
                    <h2>{CardContent[1].title}</h2>
                    <GraduationCap width={50}/>
                </TitleCard>
                <TextCard> 
                    {CardContent[1].description}
                </TextCard>
            </Card>
            <Card className="bg-gray-700 text-gray-200">
                <TitleCard className="text-first-red">
                    <h2>{CardContent[2].title}</h2>
                    <Trophy />
                </TitleCard>
                <TextCard>
                    {CardContent[2].description}
                </TextCard>
            </Card>
        </section>
    )
}