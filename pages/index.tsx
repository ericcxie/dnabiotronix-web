import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/sections/Hero";
import Team from "../components/sections/Team";
import Technology from "../components/sections/Technology";
import News from "../components/sections/News";
import Connect from "../components/sections/Connect";
import About from "../components/sections/About";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen font-sora">
      <Navbar />
      <Hero />
      <div className="hidden xl:block absolute right-[100px] top-[400px] z-[0] opacity-30 lg:opacity-100 
      transform translate-x-[300px] w-[78vw]">
        <img src="/assets/SH_doublehelix_01.svg" alt="Hero Background" />
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
