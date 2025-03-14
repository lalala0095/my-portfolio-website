import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechStackShowcase from "./components/TechStacks";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "G-B2PCN0K3JB",
};

function App() {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <TechStackShowcase />
      <Footer />
    </div>
  );
}

export default App;
