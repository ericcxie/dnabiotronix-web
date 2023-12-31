import { aboutData } from "../data/aboutData";
import FadeUpMotionDiv from "../utils/FadeUpMotion";
import SectionHeader from "../common/Header";

const About: React.FC = () => {
  const { paragraph1, paragraph2, paragraph3 } = aboutData[0];
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-8 xl:px-20 py-8 z-[10]" id="about">
      <FadeUpMotionDiv>
        <div className="md:">
          <SectionHeader text="Our story" />
        </div>
        <div className="flex flex-col space-x-0 md:space-x-14">
          <div
            className="bg-gray-100 bg-opacity-50 border-2 rounded-3xl p-6 lg:p-10 space-y-4
                    lg:space-y-10 w-full leading-8 flex flex-col justify-center z-[10]"
          >
            <h1 className="text-3xl lg:text-5xl leading-tight text-gray-900 mb-0 sm:pt-6 sm:p-5">
              About
            </h1>
            <div
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
              style={{ lineHeight: "1.8" }}
            >
              <div className="flex-1 text-gray-500 font-regular sm:pl-5 sm:pr-5 leading-snug md:leading-normal">
                <span className="text-black text-2xl pb-1 ">Challenge</span>
                <div className="pt-4 sm:pt-8"></div>
                <span className="text-gray-500 font-light">{paragraph1}</span>
                <img
                  src="assets/img/about1.jpg"
                  width="440"
                  alt=""
                  className="mx-auto mt-4 rounded-xl"
                />
              </div>
              <div className="flex-1 text-gray-500 font-regular sm:pl-5 sm:pr-5 leading-snug md:leading-normal">
                <span className="text-black text-2xl">What can we do?</span>
                <div className="pt-4 sm:pt-8"></div>
                <span className="text-gray-500 font-light">{paragraph2}</span>
                <img
                  src="assets/img/about2.jpg"
                  width="300"
                  alt=""
                  className="mx-auto mt-4 rounded-xl"
                />
              </div>
            </div>

            <hr className="mb-8 mt-6 h-[1px] border-t-0 bg-gray-300 opacity-100" />
            <p
              className="text-black sm:pl-5 sm:pr-5 pt-5 sm:pt-0"
              style={{ fontSize: "19px" }}
            >
              DNA Biotronix is developing a wearable nano-electronic biosensor
              for non-invasive, real-time monitoring of glucose in sweat at the
              single-molecule level.
            </p>
            <img
              src="assets/img/about3.png"
              width="500"
              alt=""
              className="mx-auto"
            />
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center lg:space-y-10 justify-center mt-8 md:mt-0"></div>
        </div>
      </FadeUpMotionDiv>
    </div>
  );
};

export default About;
