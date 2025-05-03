import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const AdvPOSPage = () => {
  // Static project object with detailed information
  const project = {
    id: "AdvPOS",
    title: "AdvPOS App",
    deployed_link: "https://advpos.vercel.app/",
    description:
      "The objective of this app is to help users manage their finances.",
    challenge:
      "People have this problem of mishandling of cash flows and expenses, leading to debts and financial instability.",
    approach:
      "Develop a stand alone app dedicated for tracking financial metrics like Expenses, Bills, Cash Flows and comparing them side by side to see gaps in the habit of the users and how much they are needing to generate if they want to defeat their spending habits.",
    impact: {
      RealTimeFinancialVisibility: "Provides a clear overview of expenses and cash flow at any given moment. Helps users quickly identify financial health and liquidity.",
      BetterBudgetingAndFinancialPlanning: "Allows users to allocate funds more effectively based on projected cash flow. Helps prevent overspending by setting spending limits.",
      IdentifiesSurpluses: "Shows when cash flow will exceed or fall short of expected expenses. Helps in planning for investments or cost-cutting measures.",
      ReducesFinancial: "Helps avoid last-minute financial issues by forecasting upcoming payments. Reduces uncertainty by providing a structured plan for managing finances.",
      SupportsSmarter: "Provides insights into spending trends and areas where costs can be optimized. Helps in deciding when to save, invest, or reduce expenses.",
      ImprovesDebt: "Tracks debt repayments and ensures they align with available cash flow. Helps avoid late fees and penalties by scheduling payments strategically.",
      EnhancesBusiness: "Allows businesses to manage operational expenses without affecting cash reserves. Helps individuals grow their savings by understanding cash flow trends.",
      DetectsPrevents: "Identifies unnecessary expenses that can be reduced or eliminated. Detects recurring expenses that might not be essential.",
      SupportsGoal: "Helps users set financial goals and track progress against them. Assists in planning for major expenses like investments, travel, or expansion.",
      EncouragesDiscipline: "Provides a structured system for tracking spending habits. Encourages better financial discipline by making expenses visible.",
      EnablesData: "Uses past trends to predict future financial performance. Helps in strategic planning for seasonal expenses or revenue fluctuations."
    },
    image: "/my-portfolio-website/images/LANDINGPAGE.png",
    gallery: [
      "/my-portfolio-website/images/advpos/New_Dashboard.png",
      "/my-portfolio-website/images/advpos/ADD NEW BILLER.png",
      "/my-portfolio-website/images/advpos/Billers.png",
      "/my-portfolio-website/images/advpos/Cash Flows.png",
      "/my-portfolio-website/images/advpos/DASHBOARD 2.png",
      "/my-portfolio-website/images/advpos/DASHBOARD.png",
      "/my-portfolio-website/images/advpos/EDIT EXPENSE.png",
      "/my-portfolio-website/images/advpos/Expenses.png",
      "/my-portfolio-website/images/advpos/New_Billers.png"
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

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Deployed Link</h3>
        <p className="text-gray-700">{project.deployed_link}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Challenge</h3>
        <p className="text-gray-700">{project.challenge}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Approach</h3>
        <p className="text-gray-700">{project.approach}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Impact</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Real-Time Financial Visibility:</strong> {project.impact.RealTimeFinancialVisibility}</li>
          <li><strong>Better Budgeting and Financial Planning:</strong> {project.impact.BetterBudgetingAndFinancialPlanning}</li>
          <li><strong>Identifies Surpluses and Shortfalls Early:</strong> {project.impact.IdentifiesSurpluses}</li>
          <li><strong>Reduces Financial Stress and Surprises:</strong> {project.impact.ReducesFinancial}</li>
          <li><strong>Supports Smarter Decision-Making:</strong> {project.impact.SupportsSmarter}</li>
          <li><strong>Improves Debt and Loan Management:</strong> {project.impact.ImprovesDebt}</li>
          <li><strong>Enhances Business and Personal Financial Growth:</strong> {project.impact.EnhancesBusiness}</li>
          <li><strong>Detects and Prevents Financial Leakages:</strong> {project.impact.DetectsPrevents}</li>
          <li><strong>Supports Goal-Oriented Financial Planning:</strong> {project.impact.SupportsGoal}</li>
          <li><strong>Encourages Discipline and Accountability:</strong> {project.impact.EncouragesDiscipline}</li>
          <li><strong>Enables Data-Driven Forecasting:</strong> {project.impact.EnablesData}</li>
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

export default AdvPOSPage;
