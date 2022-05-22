import React from "react";

const ProductCard = ({product}) => {

    const {name,image} = product;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">
          {name}
            <div class="badge badge-secondary text-white">New</div>
          </h2>
          
          <p >If a dog chews shoes whose shoes does he choose?</p>
          
          <button type="button" class="text-white bg-gradient-to-r from-primary via-secondary to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-secondary dark:focus:ring-secondary shadow-lg shadow-secondary dark:shadow-lg dark:shadow-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
