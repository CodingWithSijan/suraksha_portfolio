import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profilePic from "../assets/profile_suraksha.png";

function Hero() {
  return (
    <motion.div
      id="home"
      className="h-screen pt-20 flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 via-purple-400 to-pink-300 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left px-8">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Suraksha Shrestha
        </h1>
        <ReactTyped
          strings={[
            "Dedicated Nurse",
            "Healthcare Professional",
            "Patient-Centered Advocate",
            "Committed to Mental Health Awareness",
            "Delivering Compassionate Care",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
          className="text-lg md:text-2xl font-medium mb-6 block"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        />
        <p
          className="text-lg md:text-xl leading-relaxed mb-6"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          As a <span className="font-bold text-blue-200">Registered Nurse</span>
          , I specialize in{" "}
          <span className="font-bold text-purple-200">compassionate care</span>,
          promoting{" "}
          <span className="font-bold text-pink-200">
            mental health awareness
          </span>
          , and ensuring holistic well-being for my patients.
        </p>
        <a
          href="#about"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-gray-200 transition duration-300"
        >
          Explore My Journey
        </a>
      </div>

      {/* Right Section - Profile Picture */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative">
          <motion.img
            src={profilePic}
            alt="Suraksha Shrestha"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-white object-cover transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
