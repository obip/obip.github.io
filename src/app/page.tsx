import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import WorkPackages from "@/components/WorkPackages";
import Publications from "@/components/Publications";
import Events from "@/components/Events";
import News from "@/components/News";
import SteeringBoard from "@/components/SteeringBoard";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Partners />
      <WorkPackages />
      <Publications />
      <Events />
      <News />
      <SteeringBoard />
    </>
  );
}
