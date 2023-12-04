import React from "react";
import Layout from "../components/Layout";
import About from "../components/sections/About";
import Technology from "../components/sections/Technology";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <About />
      <Technology />
    </Layout>
  );
};

export default AboutPage;
