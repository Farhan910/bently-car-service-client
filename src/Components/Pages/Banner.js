import React from "react";
import banner from "../Images//bannee.jpg";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <h1 class="title is-1 text-3xl has-text-white">
                  Bentley Car Service
                </h1>
                <h2 class="subtitle is-4 has-text-white">
                  We provide the best car service in the city
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    

export default Banner;
