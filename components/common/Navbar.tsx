import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import FadeUpMotionDiv from "../utils/FadeUpMotion";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white bg-opacity-30 p-4 text-black pt-5 pl-10 top-0 fixed z-[999] w-full"
    style={{ backdropFilter: "blur(5px)" }}>
      <div className="container mx-auto flex justify-between">
        <FadeUpMotionDiv>
        <div className="justify-start">
          <span className="text-xl font-bold
                    bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
            DNA Biotronix
          </span>
        </div>
        </FadeUpMotionDiv>
        
        <div className="justify-end flex pt-0.5 text-gray-600">
        <FadeUpMotionDiv>
          <Link to="about" smooth={true} duration={1000} 
                className="mx-10 text-sm hover:text-black hover:cursor-pointer 
                 transition duration-300">
            About
          </Link>
          </FadeUpMotionDiv>
          <FadeUpMotionDiv>
          <Link to="news" smooth={true} duration={1000} 
            className="mx-10 text-sm hover:text-black hover:cursor-pointer 
                 transition duration-300">
            News</Link>
            </FadeUpMotionDiv>
            <FadeUpMotionDiv>
          <Link to="team" smooth={true} duration={1000} 
           className="mx-10 text-sm hover:text-black hover:cursor-pointer
           transition duration-300">
            Team</Link>
            </FadeUpMotionDiv>
            <FadeUpMotionDiv>
          <Link to="contact" smooth={true} duration={1000} 
            className="mx-10 text-sm hover:text-black hover:cursor-pointer
            transition duration-300">
            Contact</Link>
            </FadeUpMotionDiv>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
