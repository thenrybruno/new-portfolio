import FirstSection from "@/components/firstSection";
import SecondSection from "@/components/SecondSection";
import ThirtySection from "@/components/thirtySection";


export default function Home() {
  return (
    <>
      <FirstSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <h1 className="text-center font-heading text-3xl font-bold md:text-4xl text-second-red lg:text-5xl">Sobre</h1>
      <SecondSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <h1 className="text-center font-heading text-3xl font-bold md:text-4xl text-second-red lg:text-5xl">Projetos</h1>
      <ThirtySection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <h1 className="text-center font-heading text-3xl font-bold md:text-4xl text-second-red lg:text-5xl">Tecnologias</h1>
    </>
  );
}
