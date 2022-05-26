import React from "react";
import image from '../Images//WhatsApp Image 2022-05-26 at 7.45.30 PM.jpeg'
import Footer from "./Shared/Footer";

const Portfolio = () => {
  return (
    <div>
        <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={image}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-3xl font-bold">Name : Farhan Faruk</h1>
            <h1 class="text-2xl font-bold">Email : Farhanfaruk221@gmail.com</h1>
            <h1>Phone number : +8801888702284</h1>
            <h1>Project Name : Doctor-Home</h1>
            <h1>Live Link : <a class="underline"href="https://doctor-home-webapp.web.app/">Visit </a> </h1>
            <h1>Project Name : Al-Haramain Shop</h1>
            <h1>Live Link : <a class="underline"href="https://al-harmain-webapp.web.app/">Visit </a> </h1>
            <h1>Project Name : Phone-House</h1>
            <h1>Live Link : <a class="underline"href="https://phones-company.netlify.app/">Visit </a> </h1>
            
             
            
          <p class="py-6 text-red-400">
           Skills : React, React-Native, NodeJs, ExpressJs, MongoDb, Firebase,
          </p>
          
      
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Portfolio;
