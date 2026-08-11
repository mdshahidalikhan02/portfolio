import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotePage from "./pages/NotePage";
import ProjectCaseStudyPage from "./pages/ProjectCaseStudyPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes/:slug" element={<NotePage />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
