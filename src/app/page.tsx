import FirstSection from "@/components/firstSection";
import SecondSection from "@/components/SecondSection";
import ThirtySection from "@/components/thirtySection";


export default function Home() {
  return (
    <>
      <FirstSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <SecondSection />
      <div className="border border-first-red w-[90%] m-auto my-8"></div>
      <ThirtySection />
    </>
  );
}
