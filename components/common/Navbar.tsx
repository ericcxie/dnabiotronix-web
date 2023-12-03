import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 text-black pt-5 pl-10 top-0 fixed z-999 w-full">
      <div className="container mx-auto flex justify-between">
        <div className="justify-start">
          <span className="text-xl font-bold
                    bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
            DNA Biotronix
          </span>
        </div>
        
        <div className="justify-end flex pt-0.5 text-gray-600">
          <Link to="about" smooth={true} duration={1000} 
                className="mx-10 text-sm hover:text-black hover:cursor-pointer 
                 transition duration-300">
            About
          </Link>
          <Link to="news" smooth={true} duration={1000} 
            className="mx-10 text-sm hover:text-black hover:cursor-pointer 
                 transition duration-300">
            News</Link>
          <Link to="team" smooth={true} duration={1000} 
           className="mx-10 text-sm hover:text-black hover:cursor-pointer
           transition duration-300">
            Team</Link>
          <Link to="contact" smooth={true} duration={1000} 
            className="mx-10 text-sm hover:text-black hover:cursor-pointer
            transition duration-300">
            Contact</Link>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
