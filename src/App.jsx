import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeaderInProjects from "./components/HeaderInProjects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechStackShowcase from "./components/TechStacks";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";
import YouTubeSection from "./components/YoutubeVideoSection";
import { useState } from "react";
import Certificates from "./components/Certificates";
import ProjectDetailDynamic from "./pages/projects/ProjectDetailDynamic";

function Layout() {
  const location = useLocation();
  const isProjectDetail = location.pathname.includes("/projects/");
  const [isOpen, setIsOpen] = useState(false);

  // const isProjectDetail = /^\/projects\/[^/]+$/.test(location.pathname);

  return (
    <>
      {isProjectDetail ? <HeaderInProjects /> : <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero isOpen={isOpen} setIsOpen={setIsOpen}/>
            <TechStackShowcase />
            <Projects />
            <YouTubeSection />
            <Certificates />
            <ContactSection />
          </>
        } />
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
