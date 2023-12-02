import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] h-[100vh]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp max-w-[700px] text-left ml-20"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-6xl font-regular leading-tight text-black sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight text-left">
                Sweat-based Glucose Monitoring with DNA Transistors
                </h1>
                <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-gray-500 sm:text-lg md:text-xl">
                Revolutionizing diabetes management
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[-240px] z-[-1] opacity-30 lg:opacity-100 transform translate-x-[300px]">
          <img src="/assets/SH_doublehelix_01.svg" alt="Hero Background" />
        </div>
      </section>
    </>
  );
};

export default Hero;
