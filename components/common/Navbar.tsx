import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import FadeUpMotionDiv from "../utils/FadeUpMotion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`bg-white bg-opacity-30 p-4 text-black pt-5 pl-10 top-0 fixed z-[999] w-full ${
        scrolled ? "border-b-[1px] border-gray-200 backdrop-blur-sm" : ""
      }`}
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div ref={menuRef} className="container mx-auto flex justify-between">
        <FadeUpMotionDiv>
          <div className="justify-start pt-2 md:pt-0">
            <span
              className="text-xl font-bold
                bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text"
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-xl font-bold cursor-pointer
    bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text"
              >
                DNA Biotronix
              </Link>
            </span>
          </div>
        </FadeUpMotionDiv>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="hover:bg-gray-200 hover:bg-opacity-60 p-2 rounded-lg"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-20 mt-1 left-4 right-4 mx-auto p-4 pl-6 bg-white border rounded-3xl shadow-md z-10">
            <nav>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                offset={-100}
                onClick={toggleMenu}
                className="block py-2 text-gray-900 hover:text-gray-700"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                offset={-50}
                onClick={toggleMenu}
                className="block py-2 text-gray-900 hover:text-gray-700"
              >
                About
              </Link>
              <Link
                to="team"
                smooth={true}
                duration={1000}
                offset={-50}
                onClick={toggleMenu}
                className="block py-2 text-gray-900 hover:text-gray-700"
              >
                Team
              </Link>
              <Link
                to="news"
                smooth={true}
                duration={1000}
                offset={-50}
                onClick={toggleMenu}
                className="block py-2 text-gray-900 hover:text-gray-700"
              >
                News
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                offset={-50}
                onClick={toggleMenu}
                className="block py-2 text-gray-900 hover:text-gray-700"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-end pt-0.5 text-gray-600">
          <FadeUpMotionDiv>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              offset={-50}
              className="mx-10 text-sm hover:text-black hover:cursor-pointer transition duration-300"
            >
              About
            </Link>
          </FadeUpMotionDiv>
          <FadeUpMotionDiv>
            <Link
              to="news"
              smooth={true}
              duration={1000}
              offset={-50}
              className="mx-10 text-sm hover:text-black hover:cursor-pointer transition duration-300"
            >
              News
            </Link>
          </FadeUpMotionDiv>
          <FadeUpMotionDiv>
            <Link
              to="team"
              smooth={true}
              duration={1000}
              offset={-50}
              className="mx-10 text-sm hover:text-black hover:cursor-pointer transition duration-300"
            >
              Team
            </Link>
          </FadeUpMotionDiv>
          <FadeUpMotionDiv>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              offset={-50}
              className="mx-10 text-sm hover:text-black hover:cursor-pointer transition duration-300"
            >
              Contact
            </Link>
          </FadeUpMotionDiv>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
