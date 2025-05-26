import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeaderInProjects from "./components/HeaderInProjects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechStackShowcase from "./components/TechStacks";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";
import YouTubeSection from "./components/YoutubeVideoSection";
import { useState, useEffect } from "react";
import Certificates from "./components/Certificates";
import ProjectDetailDynamic from "./pages/projects/ProjectDetailDynamic";

function Layout() {
  const location = useLocation();
  const isProjectDetail = location.pathname.includes("/projects/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" && location.state && location.state.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState({}, document.title);
      }, 300);
    }
  }, [location]);

  return (
    <>
      {isProjectDetail ? <HeaderInProjects /> : <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero isOpen={isOpen} setIsOpen={setIsOpen}/>
              <TechStackShowcase />
              <Projects />
              <YouTubeSection />
              <Certificates />
              <ContactSection />
            </>
          }
          key={location.state && location.state.scrollTo ? location.state.scrollTo + Date.now() : "home"}
        />
        <Route path="/projects/:projectId" element={<ProjectDetailDynamic />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
