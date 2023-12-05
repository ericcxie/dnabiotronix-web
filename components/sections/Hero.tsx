import { Link, animateScroll as scroll } from "react-scroll";
import FadeUpMotionDiv from "../utils/FadeUpMotion";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden px-2 pb-16 mt-[60px] 
                   md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] 
                   "
      >
        <div className="container mx-auto flex-wrap">
          <div className="-mx-4 flex flex-wrap mt-10 sm:-mt-20">
            <div className="px-4 flex-wrap">
              <div
                className="wow fadeInUp max-w-[420px] text-left ml-10 "
                data-wow-delay=".2s"
              >
                <FadeUpMotionDiv>
                  <h1 className="mt-0 pr-3 mb-5 text-3xl md:text-5xl font-regular leading-tight text-black sm:text-3xl sm:leading-tight md:leading-tight text-left">
                    Sweat-based Glucose Monitoring with
                    <br />{" "}
                    <span
                      className="font-semibold
                bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
                    >
                      DNA Transistors
                    </span>
                  </h1>
                </FadeUpMotionDiv>
                <FadeUpMotionDiv>
                  <p className="dark:text-body-color-dark mb-5 text-base !leading-relaxed text-gray-500 sm:text-lg md:text-xl">
                    Revolutionizing diabetes <br /> management
                  </p>
                </FadeUpMotionDiv>
                <FadeUpMotionDiv>
                  <Link
                    to="about"
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="text-black border-2 border-black text-sm font-bold
                inline-block px-6 py-3 bg-transparent rounded-full hover:bg-black hover:text-white
                transition duration-300"
                  >
                    LEARN MORE
                  </Link>
                </FadeUpMotionDiv>
                <div className="height:[100px] mt-8 pt-0 sm:mt-0 sm:pt-0"></div>
              </div>
            </div>
            <div className="md:w-1/3 lg:w-1/2 px-4 sm:absolute right-0  t-[50px]">
              {isMobile ? (
                <div
                  className="sm:top-[-50px] lg:opacity-100 
              pl-8 pr-8
              transform translate-x-[0px]"
                >
                  <FadeUpMotionDiv>
                    <img
                      src="/assets/landingImgMobile.svg"
                      alt="Mobile Hero Background"
                    />
                  </FadeUpMotionDiv>
                </div>
              ) : (
                <div className="rounded-3xl absolute left-[-70px] top-[450px] sm:top-[-50px] z-[-1] opacity-100 transform translate-x-[0px]">
                  <FadeUpMotionDiv>
                    <img
                      src="/assets/landingImg.svg"
                      alt="Hero Background"
                      className="rounded-tl-3xl rounded-bl-3xl"
                    />
                  </FadeUpMotionDiv>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
