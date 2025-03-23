const Hero = ({ isOpen }) => { // Destructure isOpen from props
  return (
    <section
      id="home"
      className={`flex flex-col-reverse md:flex-row items-center justify-center min-h-screen text-center md:text-left bg-white px-4 sm:px-6 transition-all duration-300 ${
        isOpen ? "mt-50" : "mt-15"
      }`}
    >
      <div className="max-w-2xl flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Hi, I’m Lemuel,  
          <span className="text-gray-900"> Data Analyst</span> and  
          <span className="text-gray-900"> Data Engineer</span>  
          <br /> who aspires to dive into  
          <span className="text-gray-900"> Web Development.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to my Portfolio website.
          My vision is to utilize my past experiences with Data Analytics and Data Engineering to become an effective Web Developer. 
        </p>

        {/* Download CV Button - Positioned at the bottom */}
        <div className="my-11 flex flex-wrap justify-center gap-4">
          <a
            href="/my-portfolio-website/Lemuel-Torrefiel-CV.pdf"
            download="Lemuel-Torrefiel-CV.pdf"
            className="mx-11 mt-6 px-6 py-3 text-black font-semibold bg-white rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
          >
            Download CV
          </a>
          <a
            href="/my-portfolio-website/Lemuel-Torrefiel-Portfolio.pdf"
            download="Lemuel-Torrefiel-Portfolio.pdf"
            className="mt-6 px-6 py-3 text-black font-semibold bg-white rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
          >
            Download Portfolio
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
        <img
          src="/my-portfolio-website/profile.png"
          alt="Lemuel Torrefiel"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
