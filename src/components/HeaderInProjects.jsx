import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderInProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    navigate("/my-portfolio-website/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800"> </h1>

        <nav className="hidden md:flex space-x-6">
          <Link to="/my-portfolio-website/" className="nav-link">
            Home
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "tech-stacks")} className="nav-link">
            Tech Stacks
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "projects")} className="nav-link">
            Projects
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "youtube-section")} className="nav-link">
            Video Introduction
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "certificates")} className="nav-link">
            Certificates
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "contact")} className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link to="/my-portfolio-website/" className="block nav-link hover:bg-red-700">
            Home
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "tech-stacks")} className="nav-link">
            Tech Stacks
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "projects")} className="nav-link">
            Projects
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "youtube-section")} className="nav-link">
            Video Introduction
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "certificates")} className="nav-link">
            Certificates
          </Link>
          <Link to="/my-portfolio-website/" onClick={(e) => handleScroll(e, "contact")} className="nav-link">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderInProjects;
