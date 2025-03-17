import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechStackShowcase from "./components/TechStacks";
import Projects from "./components/Projects";
import ContactSection from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TechStackShowcase />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
