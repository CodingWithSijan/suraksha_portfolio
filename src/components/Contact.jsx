import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xgvejryo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setIsSent(true);
      toast.success(
        "Form Submitted. Thank you for contacting. I will get in touch with you as soon as possible!",
        {
          position: "top-center",
          autoClose: 400,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "colored",
        }
      );
      e.target.reset();
    } else {
      toast.error(
        "There was an issue submitting your form. Please try again.",
        {
          position: "top-center",
          autoClose: 400,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: "colored",
        }
      );
    }
  };

  return (
    <div id="contact" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Toast Container */}
    </div>
  );
}

export default Contact;
