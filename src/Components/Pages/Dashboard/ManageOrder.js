import React, { useEffect, useState } from "react";

import OrderTable from "./OrderTable";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(" https://hidden-dawn-20976.herokuapp.com/purchase", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(orders);
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
        </thead>
      </table>
      {orders.map((order) => (
        <OrderTable order={order} key={order._id}></OrderTable>
      ))}
    </div>
  );
};

export default ManageOrder;
