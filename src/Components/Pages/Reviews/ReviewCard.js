import React from "react";

const ReviewCard = ({ review }) => {
  const { name, reviews, img, country, star } = review;
  console.log(review);
  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-2xl text-accent">
        <div className="card-body">
          <p>{reviews}</p>
          <div className="relative flex ">
            <div>
              <img className="w-full h-10 rounded-full mt-2" src={img} alt="" />

              <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full mt-2"></span>
            </div>
            <div>
              <h2 className="ml-5 text-white">Name : {name}</h2>
              <h2 className="ml-5 text-white">Country : {country}</h2>
              <p className="ml-5 text-white">Ratting : {star}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
