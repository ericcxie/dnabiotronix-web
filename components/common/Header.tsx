import React from "react";

interface DividerWithTextProps {
  text: string;
}

const SectionHeader: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <div className="mt-10">
      <h1 className="text-gray-600 uppercase">{text}</h1>
      <hr className="mb-8 mt-6 h-0.5 border-t-0 bg-gray-600 opacity-100" />
    </div>
  );
};

export default SectionHeader;
