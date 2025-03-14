import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-800"> </h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
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
          <a href="#work" className="block nav-link hover:bg-red-700">
            Work
          </a>
          <a href="#blog" className="block nav-link">
            Blog
          </a>
          <a href="#contact" className="block nav-link">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
