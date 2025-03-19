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

function Layout() {
  const location = useLocation();
  
  const isProjectDetail = /^\/projects\/[^/]+$/.test(location.pathname);

  return (
    <>
      {isProjectDetail ? <HeaderInProjects /> : <Header />}
      <Routes>
        <Route path="/my-portfolio-website" element={
          <>
            <Hero />
            <TechStackShowcase />
            <Projects />
            <YouTubeSection />
            <ContactSection />
          </>
        } />
        <Route path="/projects/AdvPOS" element={<AdvPOSPage />} />
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
