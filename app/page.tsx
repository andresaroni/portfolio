import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Resume />
      <Jobs />
    </>
  );
}
