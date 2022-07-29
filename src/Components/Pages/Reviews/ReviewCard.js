import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const ReviewCard = ({ review }) => {
  const { name, reviews, img, country, star } = review;
  console.log(review);
  return (
    <div>
      <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-2xl ">
        <div className="card-body">
          <p>{reviews}</p>
          <div className="relative flex ">
            <div>
              <img className="w-full h-10 rounded-full mt-2" src={img} alt="" />

              <span className="top-0 left-7 absolute  w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full mt-2"></span>
            </div>
            <div>
              <h2 className="ml-5 font-bold ">Name : {name}</h2>
              <h2 className="ml-5 font-bold">Country : {country}</h2>
              <p className="ml-5 font-bold">Ratting : {star}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
