import React from "react";
import SectionHeader from "../common/Header";
import ArticleCard from "../UI/ArticleCard";
import { newsData } from "../data/newsData";

const News: React.FC = () => {
  return (
    <div className="container mx-auto px-4 xl:px-20 py-8">
      <SectionHeader text="News" />
      <div className="text-start mb-8"></div>
      <div className="flex flex-col lg:flex-row justify-center xl:justify-between items-center space-y-8 lg:space-y-0 md:space-x-20 mx-auto">
        <div className="text-black text-5xl xl:text-7xl flex flex-col justify-between h-64 xl:h-96">
          <h1>Our______</h1>
          <h1>__Latest__</h1>
          <h1>_____News</h1>
        </div>
        <div>
          {newsData.map((newsItem, index) => (
            <ArticleCard
              key={index}
              date={newsItem.date}
              title={newsItem.title}
              readMoreLink={newsItem.readMoreLink}
              description={newsItem.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
