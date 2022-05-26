import React from "react";

const MyOrderCard = ({ product }) => {
  const { name, price, phoneNumber,productName,quantity} = product;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Name : {name}</h2>
        <p>Product Name : {productName}</p>
        <p>Price : {price}</p>
        <p>Quantity : {quantity}</p>
        <p>Phone Number : {phoneNumber}</p>
        
      </div>
    </div>
  );
};

export default MyOrderCard;
