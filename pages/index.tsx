import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import About from "../components/sections/About";
import Connect from "../components/sections/Connect";
import Hero from "../components/sections/Hero";
import News from "../components/sections/News";
import Team from "../components/sections/Team";
import Technology from "../components/sections/Technology";

import FadeUpMotionDiv from "../components/utils/FadeUpMotion";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen font-sora">
      <Navbar />
      <Hero />
      <div
        className="hidden xl:block absolute right-[100px] top-[400px] z-[0] opacity-30 lg:opacity-100 
      transform translate-x-[300px] w-[78vw]"
      >
        <FadeUpMotionDiv>
          <img src="/assets/SH_doublehelix_01.svg" alt="Hero Background" />
        </FadeUpMotionDiv>
      </div>
      <main className="flex-grow mx-4 md:px-10 z-10">
        <About />
        <Technology />
        <Team />
        <News />
        <Connect />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
