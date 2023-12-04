import SectionHeader from "../common/Header";
import { aboutData } from "../data/aboutData";
import { motion } from "framer-motion";
import FadeUpMotionDiv from "../utils/FadeUpMotion";

const About: React.FC = () => {
  const { paragraph1, paragraph2, paragraph3 } = aboutData[0];
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 xl:px-20 py-8 z-[10]" id="about">
      <FadeUpMotionDiv>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-14">
          <div className="bg-gray-50 bg-opacity-50 border-2 rounded-3xl p-10 lg:p-10 space-y-4 ml-[-40px]
                    lg:space-y-10 w-full md:w-full leading-8 flex flex-col justify-center  z-[10]">
          <h1 className="text-4xl lg:text-5xl leading-tight text-gray-900 mb-0 pt-6 p-5">
          About
          </h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"  style={{ lineHeight: '1.8' }}>
            <div className="flex-1 text-gray-500 font-regular pl-5 pr-5">
              <span className="text-black text-2xl">Challenge</span> <br/> <br/>
              <span className="text-gray-500 font-light">
                {paragraph1}
              </span>
            </div>
            <div className="flex-1 text-gray-500 font-regular pl-15 pr-5">
            <span className="text-black text-2xl">What can we do?</span> <br/> <br/>
              <span className="text-gray-500 font-light">
                {paragraph2}
              </span>
            </div>     
      </div>

      <hr className="mb-8 mt-6 h-0.5 border-t-0 bg-gray-300 opacity-100" />
      <p className="text-black pl-5 pr-5"  style={{ fontSize: '19px' }}>
        DNA Biotronix is developing a {" "}
        <span className="font-bold"> wearable </span>
        nano-electronic biosensor for  
        <span className="font-bold">
          non-invasive, real-time monitoring 
        </span> {" "}
        of glucose in sweat at the single-molecule level.
      </p>

      </div>
      <div className="w-full md:w-1/4 flex flex-col items-center lg:space-y-10 justify-center mt-8 md:mt-0">
        </div>
      </div>
    </FadeUpMotionDiv>
    {/* <div className="md:w-1/3 lg:w-1/2 px-4 absolute right-0">
      <div className="absolute left-[-70px] top-[-50px] z-[-1] opacity-30 lg:opacity-100 transform translate-x-[0px]">
        <img
          src="/assets/landingImg.svg"
          alt="Hero Background"
        />
      </div>
    </div> */}
    </div>
  );
};

export default About;
