import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,            // The form itself
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.log("Failed:", error.text);
        }
      );
  };
  
  return (
    <section id="contact" className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-600 mb-8">Feel free to reach out through any of my contact channels below.</p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="mailto:torrefiellemuel@gmail.com" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
            <FaEnvelope className="text-xl" />
            <span>torrefiellemuel@gmail.com</span>
          </a>
          <a href="tel:+69069204648" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
            <FaPhone className="text-xl" />
            <span>+63 906 920 4648</span>
          </a>
          <a href="https://www.linkedin.com/in/lemuel-torrefiel/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/lalala0095" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto w-full">
          {submitted ? (
            <p className="text-green-600 text-center font-medium">Message sent! I'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={submitted}
                className={`w-full py-2 rounded-lg transition ${
                    submitted ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
                >
                {submitted ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;