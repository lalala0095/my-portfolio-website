import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeaderInProjects from "./components/HeaderInProjects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechStackShowcase from "./components/TechStacks";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";
import YouTubeSection from "./components/YoutubeVideoSection";
import AdvPOSPage from "./pages/projects/AdvPOS";
import { useState } from "react";
import AdvPOSBackend from "./pages/projects/AdvPOSBackend";
import PBIRealEstateLondon from "./pages/projects/PBIRealEstateLondon";

function Layout() {
  const location = useLocation();
  const isProjectDetail = location.pathname.includes("/projects/");
  const [isOpen, setIsOpen] = useState(false);

  // const isProjectDetail = /^\/projects\/[^/]+$/.test(location.pathname);

  return (
    <>
      {isProjectDetail ? <HeaderInProjects /> : <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Routes>
        <Route path="/my-portfolio-website" element={
          <>
            <Hero isOpen={isOpen} setIsOpen={setIsOpen}/>
            <TechStackShowcase />
            <Projects />
            <YouTubeSection />
            <ContactSection />
          </>
        } />
        <Route path="/my-portfolio-website/projects/AdvPOS" element={<AdvPOSPage />} />
        <Route path="/my-portfolio-website/projects/AdvPOSBackend" element={<AdvPOSBackend />} />
        <Route path="/my-portfolio-website/projects/PBIRealEstateLondon" element={<PBIRealEstateLondon />} />
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
