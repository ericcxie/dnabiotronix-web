import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
      className={`bg-white bg-opacity-30 px-4 py-2 text-black top-0 fixed z-[999] w-full ${
        scrolled ? "border-b-[1px] border-gray-200 backdrop-blur-sm" : ""
      }`}
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div
        ref={menuRef}
        className="container lg:mx-auto flex items-center justify-between w-100vw"
      >
        <div className="justify-start pt-2 md:pt-0">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
            <Link href="/">
              <img
                className="w-[210px] md:w-[250px] 2xl:w-[265px]"
                src="/assets/img/logo.png"
                alt="DNA Biotronix"
              />
            </Link>
          </span>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="hover:bg-gray-200 hover:bg-opacity-60 p-2 rounded-lg"
          >
            {isOpen ? <IoClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-20 mt-1 left-4 right-4 mx-auto p-4 pl-6 bg-white border rounded-3xl shadow-md z-10">
            <nav>
              <Link href="/">
                <div
                  onClick={toggleMenu}
                  className="block py-2 text-gray-900 hover:text-gray-700"
                >
                  Home
                </div>
              </Link>
              <Link href="/about">
                <div
                  onClick={toggleMenu}
                  className="block py-2 text-gray-900 hover:text-gray-700"
                >
                  About
                </div>
              </Link>
              <Link href="/technology">
                <div
                  onClick={toggleMenu}
                  className="block py-2 text-gray-900 hover:text-gray-700"
                >
                  Technology
                </div>
              </Link>
              <Link href="/team">
                <div
                  onClick={toggleMenu}
                  className="block py-2 text-gray-900 hover:text-gray-700"
                >
                  Team
                </div>
              </Link>
              <Link href="/news">
                <div
                  onClick={toggleMenu}
                  className="block py-2 text-gray-900 hover:text-gray-700"
                >
                  News
                </div>
              </Link>
              <Link href="/contact">
                <div
                  onClick={toggleMenu}
                  className="block py-2 text-gray-900 hover:text-gray-700"
                >
                  Contact
                </div>
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-end pt-0.5 text-gray-600 w-80vw">
          <Link href="/">
            <div className="mx-4 text-sm hover:text-black hover:cursor-pointer transition duration-300">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="mx-4 text-sm hover:text-black hover:cursor-pointer transition duration-300">
              About
            </div>
          </Link>
          <Link href="/technology">
            <div className="mx-4 text-sm hover:text-black hover:cursor-pointer transition duration-300">
              Technology
            </div>
          </Link>

          <Link href="/team">
            <div className="mx-4 text-sm hover:text-black hover:cursor-pointer transition duration-300">
              Team
            </div>
          </Link>

          <Link href="/news">
            <div className="mx-4 text-sm hover:text-black hover:cursor-pointer transition duration-300">
              News
            </div>
          </Link>

          <Link href="/contact">
            <div className="mx-4 text-sm hover:text-black hover:cursor-pointer transition duration-300">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
