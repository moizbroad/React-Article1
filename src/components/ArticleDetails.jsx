import React from "react";
import data from "../utils/data.json";

const ArticleDetails = ({ article }) => {
  return (
    <>
      {article.map((item, index) => {
        return (
          <div key={index} className="grid grid-cols-12 gap-4 pt-16 ">
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
    </>
  );
};

export default ArticleDetails;
