import React from "react";
import SectionHeader from "../common/Header";
import ArticleCard from "../UI/ArticleCard";
import { newsData } from "../data/newsData";

const News: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const numArticles = newsData.length;

  const handleBackwardClick = () => {
    setCurrentIndex((oldIndex) =>
      oldIndex > 0 ? oldIndex - 1 : newsData.length - 1
    );
  };

  const handleForwardClick = () => {
    setCurrentIndex((oldIndex) =>
      oldIndex < newsData.length - 1 ? oldIndex + 1 : 0
    );
  };

  const currentNewsItem = newsData[currentIndex];

  return (
    <div className="container mx-auto px-4 xl:px-20 py-8">
      <SectionHeader text="News" />
      <div className="flex flex-col lg:flex-row justify-center xl:justify-between items-center space-y-8 lg:space-y-0 md:space-x-20 mx-auto">
        <div className="text-black text-5xl xl:text-7xl flex flex-col justify-between h-64 xl:h-96">
          <h1>Our______</h1>
          <h1>__Latest__</h1>
          <h1>_____News</h1>
        </div>
        <ArticleCard
          key={currentIndex}
          date={currentNewsItem.date}
          title={currentNewsItem.title}
          readMoreLink={currentNewsItem.readMoreLink}
          description={currentNewsItem.description}
          onBackwardClick={handleBackwardClick}
          onForwardClick={handleForwardClick}
          numArticles={numArticles}
        />
      </div>
    </div>
  );
};

export default News;
