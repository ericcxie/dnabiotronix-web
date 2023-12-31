import SectionHeader from "../common/Header";
import { technologyData } from "../data/technologyData";
import { motion } from "framer-motion";
import FadeUpMotionDiv from "../utils/FadeUpMotion";

const Technology: React.FC = () => {
  const { paragraph1, paragraph2, paragraph3 } = technologyData[0];
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-8 xl:px-20 py-8" id="technology">
      <FadeUpMotionDiv>
        <SectionHeader text="Science Behind Our Innovation" />
      </FadeUpMotionDiv>
      <FadeUpMotionDiv>
        <h1 className="text-3xl lg:text-5xl leading-tight text-gray-900 mb-4">
          Technology
        </h1>
      </FadeUpMotionDiv>

      <FadeUpMotionDiv>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-14">
          <div className="border-2 bg-gray-100 bg-opacity-50 rounded-3xl p-6 lg:p-10 space-y-4 lg:space-y-10 w-full md:w-1/2 leading-snug md:leading-8 flex flex-col justify-center">
            <p className="text-black">{paragraph1}</p>
            <p className="text-gray-500 font-light">{paragraph2}</p>
            <p className="text-gray-500 font-light">{paragraph3}</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center lg:space-y-10 justify-center mt-8 md:mt-0">
            <img
              src="/assets/img/technology_1.png"
              alt="Tech 1"
              className="mb-4 px-8"
            />
            <img
              src="/assets/img/technology_2.png"
              alt="Tech 2"
              className="pl-4"
            />
          </div>
        </div>
      </FadeUpMotionDiv>
    </div>
  );
};

export default Technology;
