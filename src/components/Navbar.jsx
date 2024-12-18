import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import suraksha_logo from "../assets/suraksha_logo.webp";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <nav className="fixed w-full mb-6 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex justify-around gap-4 items-center">
          <Link to="home" smooth={true} duration={700}>
            <img
              src={suraksha_logo}
              alt="Suraksha Logo"
              className="h-12 cursor-pointer"
            />
          </Link>
          <h1 className="text-2xl font-bold text-blue-500">
            Suraksha Shrestha
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Blog", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={700}
                className="hover:text-blue-500 cursor-pointer transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden" onClick={toggleNav}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="absolute top-16 left-0 w-full bg-white text-center">
            {["Home", "About", "Blog", "Resume", "Contact"].map((item) => (
              <li key={item} className="p-4 hover:bg-blue-100">
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={700}
                  onClick={() => setNav(false)}
                  className="cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
