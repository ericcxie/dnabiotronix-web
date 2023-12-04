import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-lg px-4 xl:px-20">
      <hr className="mb-6 mt-6 h-0.5 border-t-0 bg-gray-600 opacity-100" />
      <div className="text-center text-md text-gray-500 mt-2 mb-6">
        &copy; {new Date().getFullYear()} DNA Biotronix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
