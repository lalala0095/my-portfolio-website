const Footer = () => {
    return (
      <footer className="bg-white py-6 border-t border-gray-200 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Lemuel Torrefiel. All rights reserved.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-3">
          <a href="https://github.com/lalala0095" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="mailto:torrefiellemuel@gmail.com" className="text-gray-600 hover:text-gray-900 transition">
            <i className="fas fa-envelope text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/lemuel-torrefiel/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  