import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeaderInProjects from "./components/HeaderInProjects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechStackShowcase from "./components/TechStacks";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";
import YouTubeSection from "./components/YoutubeVideoSection";
import ProjectDetail from "./components/ProjectsDetail";
import ProjectsPage from "./pages/ProjectsPage";

function Layout() {
  const location = useLocation();
  
  const isProjectDetail = /^\/projects\/[^/]+$/.test(location.pathname);

  return (
    <>
      {isProjectDetail ? <HeaderInProjects /> : <Header />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TechStackShowcase />
            <Projects />
            <YouTubeSection />
            <ContactSection />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
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
