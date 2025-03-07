import FirstSection from "@/components/firstSection";
import SecondSection from "@/components/SecondSection";


export default function Home() {
  return (
    <>
      <FirstSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <SecondSection />
    </>
  );
}
