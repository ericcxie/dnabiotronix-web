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
    <div className="bg-white flex flex-col min-h-screen font-inter">
      <Navbar />
      <Hero />
      <main className="flex-grow px-32">
        <About />
        <Technology />
        <Team />
        <News />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
