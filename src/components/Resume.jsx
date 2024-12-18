import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <div
      className="py-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      id="resume"
    >
      <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
      <a
        href="/assets/Suraksha_Resume.pdf"
        download
        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
      >
        <FaDownload className="mr-2" /> Download Resume
      </a>
    </div>
  );
}

export default Resume;
