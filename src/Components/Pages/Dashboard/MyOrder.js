import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import MyOrderCard from "./MyOrderCard";

const MyOrder = () => {
  const [orders, setOrders] = useState();

  fetch(``, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setOrders(data);
    });
  return (
    <div>
      {orders?.map((product) => (
        <MyOrderCard key={product._id} product={product}></MyOrderCard>
      ))}
    </div>
  );
};

export default MyOrder;
