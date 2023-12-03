import React from "react";

interface ForwardButtonProps {
  onClick: () => void;
}

const ForwardButton: React.FC<ForwardButtonProps> = ({ onClick }) => {
  const baseClass =
    "inline-block rounded-full p-3 focus:outline-none focus:ring";
  const baseVariant =
    "bg-[#D9D9D9] text-black hover:bg-[#bebebe] active:text-indigo-500";

  return (
    <button className={`${baseClass} ${baseVariant}`} onClick={onClick}>
      <span className="sr-only">Next</span>
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
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
};

export default ForwardButton;
