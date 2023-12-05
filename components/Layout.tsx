import React, { ReactNode } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sora">
      <Navbar />
      <main className="flex-grow">
        {children} {/* This is where your page content will go */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
