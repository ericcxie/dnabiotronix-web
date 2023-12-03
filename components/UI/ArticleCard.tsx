import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface ArticleCardProps {
  date: string;
  title: string;
  description: string;
  readMoreLink: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  date,
  title,
  description,
  readMoreLink,
}) => {
  return (
    <div className="bg-[#D9D9D9] bg-opacity-20 rounded-3xl border-2 p-6 w-[20rem] xl:w-[40rem] h-[20rem] xl:h-[26rem] relative">
      <div className="text-gray-500 mb-2 absolute top-8 uppercase">{date}</div>
      <a href={readMoreLink} target="_blank" rel="noreferrer">
        <h2 className="text-2xl xl:text-3xl text-black pt-12 xl:pt-14 hover:underline">
          {title}
        </h2>
      </a>
      <p className="hidden xl:block text-gray-700 pt-4">{description}</p>
      <a
        href={readMoreLink}
        className="text-gray-600 flex uppercase hover:underline absolute bottom-2 right-3 mb-4 mr-4"
        target="_blank"
        rel="noreferrer"
      >
        Read More
        <span className="text-gray-600 ml-2">
          <GoArrowUpRight size={25} />
        </span>
      </a>
    </div>
  );
};

export default ArticleCard;
