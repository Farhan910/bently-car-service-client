import React from "react";
import image from '../Images//download (1).png'

const AboutOur = () => {
  return (
    <div class="hero h-screen bg-base-300 mt-[100px]">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={image}
          class="max-w-sm w-full rounded-lg mt-[-500px] shadow-2xl"
        alt=""/>
        <div class="mt-[-400px]">
          <h1 class="text-5xl font-bold">Our Best PowerFull Engine!</h1>
          <p class="py-6">
            Our best power full engine is the best engine in the world.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default AboutOur;
