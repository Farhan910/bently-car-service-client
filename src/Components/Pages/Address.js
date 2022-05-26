import React from "react";

const Address = () => {
  return (
    <div className=" my-[100px] grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 p-12">
      <div class="  card lg:mx-w-lg bg-base-300 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl text-white text-center underline mb-2 ">Bangladesh shop</h2>
          <p>
            House#12, Road#19, Sector#07, Uttara, Dhaka-1230, Bangladesh.
            KA-244, Kuril, Jamuna Future Park, GB-001 Southeast ground floor,
            Vatara, Dhaka-1229 +88 019 2225 7777
          </p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
      <div class="card lg:mx-w-lg bg-base-300 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl text-white text-center underline mb-2">USA shop</h2>
          <p>4 Corners Distribution L.T.D. Unit 3B Katella Trading Estate 10A River Road, Barking, Essex IG11 ODG , Essex United Kingdom England</p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
      <div class="card lg:mx-w-lg bg-base-300 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl text-white text-center underline mb-2">England shop</h2>
          <p>
            Sales Head Office, P.O. Box 13754, Dubai, United Arab Emirates Call
            Us: 80042726246 Whatsapp: +971 52 102 6080
          </p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Address;
