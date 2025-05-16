import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CSChatBotPage = () => {
  function YouTubeEmbed() {
    return (
      <div className="w-full max-w-4xl mx-auto aspect-video mt-4">
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/34i7gQlUldE"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
          
  // Static project object with detailed information
  const project = {
    id: "CSChatBot",
    title: "React Typescript + FastAPI - Live AI Customer Support Chat Bot with  Google Gemini API",
    deployed_link: "https://cd-chatbot-lilac.vercel.app/",
    description:
      "The objective of this web app is to assist users of an E-commerce website about his/her orders and complaints.",
    challenge:
      "Some customer complaints are minor and can be resolved by allowing an AI to interact with the user.",
    approach:
      "Develop a full stack web app that acts as a customer support specialist, to attend to the basic issues that customers may encounter. These issues are complaints, returns, deffective items, inquiries and etc.",
    impact: {
      AIAssistant: "The assistance of an AI agent helps optimize business proccesses by allowing minor customer complaints to be resolved by the AI itself.",
      OrderDetailsRetrieval: "The backend server is built to help the AI agent, understand the nature of the complaint of the customers. Such details stored in the database are status, order id and item name that speeds up thinking of the AI agent.",
      LastResortCustomerSupportTicketing: "The AI Agent avoids escalation to the management of those issues that can be resolved beforehand. It is the last thing to do if the customer persists on escalating the complaint. This isolates AI resolved tickets to those tickets that need more attention.",
      HelpForTheBusiness: "This helps the business's productivity metric by allowing an AI agent to be involved in complex tasks, that can be resolved through automation.",
    },
    image: "/my-portfolio-website/images/cs-chatbot/conversation1.png",
    gallery: [
      "/my-portfolio-website/images/cs-chatbot/home.png",
      "/my-portfolio-website/images/cs-chatbot/conversation1.png",
      "/my-portfolio-website/images/cs-chatbot/conversation2.png",
      "/my-portfolio-website/images/cs-chatbot/conversation3.png",
      "/my-portfolio-website/images/cs-chatbot/conversation4.png",
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;
  
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

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

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Deployed Link</h3>
        <p className="text-gray-700" href={project.deployed_link}>{project.deployed_link}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Challenge</h3>
        <p className="text-gray-700">{project.challenge}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Approach</h3>
        <p className="text-gray-700">{project.approach}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Impact</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Maximize AI Assistance Technology:</strong> {project.impact.AIAssistant}</li>
          <li><strong>Optimizes Order Details Retrieval:</strong> {project.impact.OrderDetailsRetrieval}</li>
          <li><strong>Last Resort Customer Support Ticketing:</strong> {project.impact.LastResortCustomerSupportTicketing}</li>
          <li><strong>Helps the Business Grow:</strong> {project.impact.HelpForTheBusiness}</li>
        </ul>

        {/* Gallery Section */}
        <h3 className="text-lg font-semibold text-gray-900 mt-6">Gallery</h3>
        <div>
          <YouTubeEmbed />
        </div>
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

export default CSChatBotPage;
