import React from "react";
import SectionHeader from "../common/Header";
import ArticleCard from "../UI/ArticleCard";
import { newsData } from "../data/newsData";
import FadeUpMotionDiv from "../utils/FadeUpMotion";

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
    <div className="container mx-auto px-8 xl:px-20 py-8" id="news">
      <FadeUpMotionDiv>
        <SectionHeader text="In the spotlight" />
      </FadeUpMotionDiv>
      <FadeUpMotionDiv>
        <div className="flex flex-col lg:flex-row justify-start xl:justify-between space-y-8 lg:space-y-0 md:space-x-20 mx-auto">
          <div className="text-black items-start text-3xl xl:text-5xl flex flex-col md:justify-between h-10 xl:h-96">
            <h1>News</h1>
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
      </FadeUpMotionDiv>
    </div>
  );
};

export default News;
