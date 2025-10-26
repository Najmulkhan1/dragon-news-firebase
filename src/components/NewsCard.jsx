import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { format } from "date-fns";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router";

const  NewsCard = ({ news }) => {
  const { id, title, thumbnail_url, details, author, rating, total_view, others } =
    news;

  const formattedDate = format(new Date(author.published_date), "yyyy-MM-dd");

  return (
    <div className="card bg-base-100 shadow-md rounded-lg  ">
      {/* Author and Date */}
      <div className="flex items-center justify-between  bg-base-300 w-full px-4 py-2">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className=" flex gap-2">
          {/* Share/Bookmark Icons could go here */}
          <CiBookmark />

          <CiShare2 />
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <h1 className="text-lg font-bold mb-3">{title}</h1>

        {/* Thumbnail */}
        <figure className="mb-4">
          <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="w-full h-60 object-cover rounded"
          />
        </figure>

        {/* Details */}
        <p className="text-sm text-gray-700 mb-4">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <Link to={`/news-details/${id}`} className="text-blue-500 font-semibold cursor-pointer">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Rating and Views */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-black">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
