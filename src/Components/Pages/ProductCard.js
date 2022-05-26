import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { name, image, minimum, stock, _id, price } = product;
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary text-white">New</div>
          </h2>

          
          <p>Minimum purchase : {minimum} Pieces</p>
          <p>Available Now : {stock} Pieces</p>
          <p>Price : $ {price}</p>

          <button
            onClick={() => navigate(`/purchaseDetail/${_id}`)}
            type="button"
            className="btn btn-secondary text-white"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
