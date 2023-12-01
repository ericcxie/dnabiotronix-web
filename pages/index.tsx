import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/sections/Hero";
import Team from "../components/sections/Team";
import Technology from "../components/sections/Technology";
import News from "../components/sections/News";
import Connect from "../components/sections/Connect";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Team />
        <Technology />
        <News />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
