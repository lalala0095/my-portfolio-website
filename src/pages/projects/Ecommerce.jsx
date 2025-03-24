import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Ecommerce = () => {
  // Static project object with detailed information
  const project = {
    id: "Ecommerce",
    title: "Power BI - Ecommerce Dashboard for Industrial Pipes Company",
    description:
      "The objective of this Powre BI Report is to support the decision making process of my previous client focusing on Sales analytics of their Website.",
    challenge:
      "This former client of mine does their reporting with the aid of SQL queries which can be tricky for non-technical for stakeholders. The company needs a visually compelling Power BI dashboard to aid Executives in business analytics focusing on their Ecommerce website.",
    approach:
      "Using Power BI with SQL connector, R for data manipulation - Develop a dashboard of several Ecommerce metrics such as Sales, Web Sales, Orders, Quotes Capture rate and etc.",
    impact: {
      StayAwayFromSQL: "The Data Team can now focus on implementing other system improvements instead of generating manual queries with SQL to be exported as report in CSV to be sent to Executives. This Power BI report optimizes this reporting problem.",
      SalesAnalysis: "Have an impactful view of different Ecommerce Metrics including the Sales and Web Sales comparison and Orders that benefits the decision making of stakeholders.",
      CategoriesView: "Can be viewed with multiple categories like most sales according to Branches and Sold Dates.",
      Sharing: "Since this project was made in Power BI, the sharing, row-level data security, scheduled refresh and SQL database connection will be handled easily with the help of built-in features of Power BI.",
      WebEmbedding: "Power BI also aids developers and organizations with public sharing with the web embedding feature of Power BI.",
      LongTermMaintenance: "Since this is connected with the dev database provided by the client, maintenance of this dashboard can be achieved by updating the datasets and adding more metrics to track to elevate the impact it can do to users.",
    },
    image: "/my-portfolio-website/images/ecommerce/ECOMMERCE.png",
    gallery: [
      "/my-portfolio-website/images/ecommerce/ECOMMERCE.png",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE DARK.PNG",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE2.PNG",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE DARK 2.PNG",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE3.PNG",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE8.PNG",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE9.PNG",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE10.PNG",
      "/my-portfolio-website/images/ecommerce/ECOMMERCE11.PNG",
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
          <li><strong>Transition Users to Power BI Reports from SQL:</strong> {project.impact.StayAwayFromSQL}</li>
          <li><strong>Comprehensive Sales Analytics:</strong> {project.impact.SalesAnalysis}</li>
          <li><strong>Categorical View of Charts in Power BI:</strong> {project.impact.CategoriesView}</li>
          <li><strong>Sharing, Security and Scheduled Data Refresh:</strong> {project.impact.Sharing}</li>
          <li><strong>Public Sharing by Web Embedding:</strong> {project.impact.WebEmbedding}</li>
          <li><strong>Long-term Maintenance:</strong> {project.impact.LongTermMaintenance}</li>
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

export default Ecommerce;
