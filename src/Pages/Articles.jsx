import React, { useState } from "react";
import Button from "../Common/Button";

const Articles = () => {
  const initialArticles = [
    {
      title: "Article 1",
      upvotes: 10,
      date: "2019-01-21",
    },
    {
      title: "Article 2",
      upvotes: 5,
      date: "2019-10-21",
    },
    {
      title: "Article 3",
      upvotes: 15,
      date: "2010-12-31",
    },
    {
      title: "Article 4",
      upvotes: 3,
      date: "2019-11-22",
    },
    {
      title: "Article 5",
      upvotes: 1,
      date: "2022-04-25",
    },
  ];

  const [articles, setArticles] = useState(initialArticles);

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

  useState(() => {
    sortByUpvotes();
  }, []);

  return (
    <>
      <section>
        <div className="text-4xl text-center font-bold">Sorting Articles</div>

        <div className="grid grid-cols-12 gap-4 pt-24 ">
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
        {articles.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-12 gap-4 pt-24 ">
              <div className="col-span-4  bg-gray-200 text-center p-4 xs:text-sm xs:px-0 text-red-700">
                {item.title}
              </div>
              <div className="col-span-4 bg-gray-200 text-center p-4 xs:text-sm xs:px-0 text-yellow-500">
                {item.upvotes}
              </div>
              <div className="col-span-4 bg-gray-200 text-center p-4 xs:text-sm xs:px-0  text-green-700">
                {item.date}
              </div>
            </div>
          );
        })}

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
