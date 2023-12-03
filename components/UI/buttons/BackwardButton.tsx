import React from "react";

interface BackwardButtonProps {
  onClick: () => void;
}

const BackwardButton: React.FC<BackwardButtonProps> = ({ onClick }) => {
  const baseClass =
    "inline-block rounded-full p-3 focus:outline-none focus:ring";
  const baseVariant =
    "bg-[#D9D9D9] text-black hover:bg-[#bebebe] active:text-indigo-500";

  return (
    <button className={`${baseClass} ${baseVariant}`} onClick={onClick}>
      <span className="sr-only">Previous</span>
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );
};

export default BackwardButton;
