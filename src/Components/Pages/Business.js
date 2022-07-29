import React from "react";
import { AiOutlineFlag } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import CountUp from "react-countup";

const Business = () => {
  return (
    <div className="px-12  mt-[170px]">
        <h2 className="text-3xl text-center mb-28 underline">Our Business Summary</h2>
      <div className="grid lg:grid-cols-4 grid-cols-1   md:grid-cols-2 ">
      <div>
        <h2>
          <AiOutlineFlag className="text-8xl text-neutral"></AiOutlineFlag>
        </h2>
        <p className="text-7xl my-3 flex">
          <CountUp end={400} />{" "}
          <BsStars className="text-xl text-yellow-400"></BsStars>
        </p>
        <p className="text-2xl text-neutral">Countries </p>
      </div>
      <div>
        <h2>
          <FaRegNewspaper className="text-8xl text-neutral"></FaRegNewspaper>
        </h2>
        <p className="text-7xl my-3 flex">
          <CountUp end={650} />{" "}
          <BsStars className="text-xl text-yellow-400"></BsStars>+
        </p>
        <p className="text-2xl text-neutral">Happy clients</p>
      </div>
      <div>
        <h2>
          {" "}
          <IoIosPeople className="text-8xl text-neutral "></IoIosPeople>
        </h2>
        <p className="text-7xl my-3 flex">
          <CountUp end={450} />{" "}
          <BsStars className="text-xl text-yellow-400"></BsStars>+
        </p>
        <p className="text-2xl text-neutral">Completed Projects</p>
      </div>
      <div>
        <h2>
          {" "}
          <FiHeart className="text-8xl text-neutral"></FiHeart>
        </h2>
        <p className="text-7xl my-3 flex">
          <CountUp end={4562} />{" "}
          <BsStars className="text-xl text-yellow-400"></BsStars>+
        </p>
        <p className="text-2xl text-neutral  ">Reviews</p>
      </div>
      </div>
    </div>
  );
};

export default Business;
