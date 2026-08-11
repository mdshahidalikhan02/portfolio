import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import CaseStudyPreview from "../components/CaseStudyPreview";
import Notes from "../components/Notes";
import SystemDesign from "../components/SystemDesign";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Experience />
      <Projects />
      <CaseStudyPreview />
      <Notes />
      <SystemDesign />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
