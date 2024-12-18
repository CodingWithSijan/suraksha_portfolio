import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Blog from "./Blog";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900">
        <Navbar />
        <Hero />
        <About />
        <Blog />
        <Resume />
        <Contact />
        <Footer /> {/* Add Footer here */}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        draggable
        theme="colored"
      />
    </>
  );
}

export default Home;
