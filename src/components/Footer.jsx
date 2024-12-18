import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Footer Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Suraksha Shrestha</h3>
          <p className="text-gray-400">
            Dedicated Nurse | Healthcare Professional
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=100082054083793"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/_surakshastha_/?fbclid=IwY2xjawHPNi5leHRuA2FlbQIxMAABHYbdQSO8Qfsm1cldS8X4K_Fvhuw-HkZ6YuhiRElPHPA7dygOpmgoeuir0g_aem_YOhhCk5Qx0-m6x4zUIJ50w#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-4 text-sm">
        &copy; {new Date().getFullYear()} Suraksha Shrestha| All Rights Reserved
        || Developer: Sijan Pradhan
      </div>
    </footer>
  );
}

export default Footer;
