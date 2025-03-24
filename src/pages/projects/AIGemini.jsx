import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const AIGemini = () => {
  // Static project object with detailed information
  const project = {
    id: "AIGemini",
    title: "React JS + Express JS - Google Gemini Chat Bot Clone",
    description:
      "This is a clone of Google Gemini Chat Bot using the Google Gemini API.",
    challenge:
      "This is an initiative for me to develop my practical skills and learnings in AI Engineering.",
    approach:
      "Using React JS and Express JS, develop a clone of Google Gemini to have an understanding of AI principles and learn more of the aspects of AI Engineering with the aid of Googel Gemini API.",
    impact: {
      LearnFromExperience: "This helps me to learn more in the field of AI Engineering, by practical usage and at the same time, improve my skills in Express JS which is new tool also for me since I've practiced more using Python.",
      ChatBotProgramming: "Since AI Agents are becoming popular, it is a good initiative to perform such project that will aid my learning with different AI models available in the world wide web.",
      SetAdditionalGoals: "This creates me a list of technologies to continue learn and contribute to the Data Community, and also support my clients with improved skills and tools.",
    },
    image: "/my-portfolio-website/images/GEMINI CHAT BOT CLONE.png",
    gallery: [
      "/my-portfolio-website/images/GEMINI CHAT BOT CLONE.png",
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(project.gallery[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % project.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
  };

  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + project.gallery.length) % project.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
  };  

  return (
    <div className="container mx-auto px-6 py-10 mt-4">
      <h2 className="text-4xl font-bold text-center mb-6">{project.title}</h2>
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold text-gray-900 mt-4">Overview</h3>
        <p className="text-gray-700">{project.description}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Challenge</h3>
        <p className="text-gray-700">{project.challenge}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Approach</h3>
        <p className="text-gray-700">{project.approach}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Impact</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Learn By Experience:</strong> {project.impact.LearnFromExperience}</li>
          <li><strong>Learn Chat Bot Programming:</strong> {project.impact.ChatBotProgramming}</li>
          <li><strong>Set More Learning Goals:</strong> {project.impact.SetAdditionalGoals}</li>
        </ul>

        {/* Gallery Section */}
        <h3 className="text-lg font-semibold text-gray-900 mt-6">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {project.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-32 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            <X />
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={prevImage}
          >
            <ChevronLeft />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged Screenshot"
            className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
          />
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={nextImage}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default AIGemini;
