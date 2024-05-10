import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import data from "../utils/data.json";
import logo from "../assets/logo.png";
import ArticleDetails from "../components/ArticleDetails";

const Articles = () => {
  const [articles, setArticles] = useState(data);

  const sortByUpvotes = () => {
    const sortedArticles = [...articles].sort((a, b) => b.upvotes - a.upvotes);
    setArticles(sortedArticles);
  };

  const sortByDate = () => {
    const sortedArticles = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticles(sortedArticles);
  };

  return (
    <>
      <section>
        <div className=" flex justify-center items-center gap-x-12 text-4xl text-center font-bold">
          Sorting Articles <img src={logo} />{" "}
        </div>

        <div className="grid grid-cols-12 gap-4 mt-24 ">
          <div className="col-span-4  bg-black text-center p-4 xs:text-sm xs:px-0  font-semibold text-white">
            Titles
          </div>
          <div className="col-span-4 bg-black text-center p-4 xs:text-sm xs:px-0 font-semibold text-white">
            Most Upvoted
          </div>
          <div className="col-span-4 bg-black text-center p-4 xs:text-sm xs:px-0  font-semibold text-white">
            Most Recent
          </div>
        </div>

        <ArticleDetails article={articles} />

        <div className="mt-20 flex justify-center items-center gap-x-[30px]">
          <div className="font-medium"> Sort By </div>
          <Button
            btnText="Most Upvoted"
            onClick={sortByUpvotes}
            breakpoint="sm:w-[180px] md:w-[190px] lg:w-[350px] xl:w-[300px]"
          />
          <Button
            btnText="Most Recent"
            onClick={sortByDate}
            breakpoint="sm:w-[180px] md:w-[190px] lg:w-[350px] xl:w-[300px]"
          />
        </div>
      </section>
    </>
  );
};

export default Articles;
