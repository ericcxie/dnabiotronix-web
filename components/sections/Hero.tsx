import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 mt-[60px] 
                   md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] 
                   "
      >
        <div className="container mx-auto flex-wrap">
          <div className="-mx-4 flex flex-wrap -mt-20">
            <div className="px-4 flex-wrap">
              <div
                className="wow fadeInUp max-w-[420px] text-left ml-20"
                data-wow-delay=".2s"
              >
                <h1 className="mt-0 mb-5 text-5xl font-regular leading-tight text-black sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight text-left">
                Sweat-based Glucose Monitoring with {" "}
                <span className="font-semibold
                bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                  DNA Transistors
                </span>
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-gray-500 sm:text-lg md:text-xl">
                Revolutionizing diabetes <br/> management
                </p>
                <Link to="about" smooth={true} duration={1000} 
                className="text-black border-2 border-black text-sm font-bold
                inline-block px-6 py-3 bg-transparent rounded-full hover:bg-black hover:text-white
                transition duration-300">
                  LEARN MORE
              </Link>
              </div>
            </div>
            <div className="md:w-1/3 lg:w-1/2 px-4 absolute right-0">
              <div className="absolute left-[-70px] top-[-50px] z-[-1] opacity-30 lg:opacity-100 transform translate-x-[0px]">
                <img
                  src="/assets/landingImg.svg"
                  alt="Hero Background"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute right-0 top-[-240px] z-[-1] opacity-30 lg:opacity-100 transform translate-x-[300px]">
          <img src="/assets/SH_doublehelix_01.svg" alt="Hero Background" />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
