import Navbar from "@/components/navbar";
import FifthSection from "@/components/fifthSection";
import FirstSection from "@/components/firstSection";
import FourthSection from "@/components/fourthSection";
import SecondSection from "@/components/SecondSection";
import ThirtySection from "@/components/thirtySection";
import Footer from "@/components/footer";

export default async function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <FirstSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <h1 id="about" className="mt-20 text-center font-heading text-4xl font-bold md:text-4xl text-second-red lg:text-5xl">Sobre</h1>
      <SecondSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <h1 id="projects" className="mt-20 text-center font-heading text-4xl font-bold md:text-4xl text-second-red lg:text-5xl">Projetos</h1>
      <ThirtySection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <h1 id="technologies" className="mt-20 text-center font-heading text-4xl font-bold md:text-4xl text-second-red lg:text-5xl">Tecnologias</h1>
      <FourthSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <h1 id="contacts" className="mt-20 text-center font-heading text-4xl font-bold md:text-4xl text-second-red lg:text-5xl">Contatos</h1>
      <FifthSection />
      <Footer />
    </>
  );
}
