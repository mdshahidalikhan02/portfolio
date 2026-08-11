import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      requestAnimationFrame(() => {
        if (id === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      // Clear the state so a refresh or back-nav doesn't re-trigger the scroll.
      navigate(".", { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
