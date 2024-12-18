import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-800"
    >
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-center md:max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          I am a passionate and dedicated{" "}
          <span className="font-bold text-blue-500">Registered Nurse</span> with
          a Master’s degree in Nursing from Charles Darwin University and a
          Bachelor’s degree from Pokhara University. My mission is to provide{" "}
          <span className="font-bold text-purple-500">compassionate care</span>,
          promote{" "}
          <span className="font-bold text-pink-500">
            mental health awareness
          </span>
          , and make a meaningful impact in the lives of patients and their
          families.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Skills Cards */}
          {[
            {
              title: "Compassionate Care",
              gradient: "from-blue-500 to-blue-700",
            },
            {
              title: "Mental Health Advocate",
              gradient: "from-purple-500 to-purple-700",
            },
            {
              title: "Holistic Patient Support",
              gradient: "from-pink-500 to-pink-700",
            },
            {
              title: "Team Collaboration",
              gradient: "from-green-500 to-green-700",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg text-white bg-gradient-to-r ${skill.gradient} shadow-lg w-60`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-center">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
