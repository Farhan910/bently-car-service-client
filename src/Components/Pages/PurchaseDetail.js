import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const PurchaseDetail = () => {
  const [user] = useAuthState(auth);
  const [purchase, setPurchase] = useState({});
  const { id } = useParams();
  console.log(purchase);
  // const productDetail = purchase?.find((product) => product.id === id);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPurchase(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="flex justify-center mt-[100px]">
      <div className="card w-96  bg-base-200 shadow-xl">
        <div className="card-body">
          <h2>{purchase.name}</h2>
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered w-full max-w-xs"
          />

          <div className="">
            <button className="btn btn-secondary text-gray-200">Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetail;
