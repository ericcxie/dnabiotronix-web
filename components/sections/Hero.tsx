const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden text-black h-screen">
      <div
        className="absolute inset-0 z-0 bg-hero-pattern bg-cover bg-no-repeat bg-[center_left_20rem]"
        style={{ backgroundSize: "95%", backgroundPositionY: "25%" }}
      ></div>
      <div className="relative z-10 p-8 max-w-2xl mx-auto flex flex-col justify-center h-full">
        <h1 className="text-6xl font-bold">Cutting Edge AI Genomics</h1>
        <p className="mt-4 text-lg">
          Our cutting-edge technology is revolutionizing the field of genomics
          by providing advanced solutions for analyzing and interpreting genetic
          data.
        </p>
      </div>
    </div>
  );
};

export default Hero;
