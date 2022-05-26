import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import swal from "sweetalert";

const PurchaseDetail = () => {
  const [user] = useAuthState(auth);
  const [purchase, setPurchase] = useState({});
  const { id } = useParams();
  

  const navigate = useNavigate();
  // const productDetail = purchase?.find((product) => product.id === id);
  const handlePay = (e) => {
    e.preventDefault();

    const purchases = {
      name: e.target.name?.value,
      productName: e.target.productName?.value,
      quantity: e.target.quantity?.value,
      phone: e.target.phone?.value,
      price: e.target.productPrice?.value,
      email:user?.email
    };

    const name = purchases.name;
    const productName = purchases.productName;
    const quantity = parseInt(purchases.quantity) > 0 ? parseInt(purchases.quantity) : 0;
    const phone = purchases.phone;
    const price = parseInt(purchases.price) * parseInt(purchases.quantity);
    const email = purchases.email;
    const total = { name, productName, quantity, phone, price,email };

    
    if (
      name === "" ||
      productName === "" ||
      quantity === "" ||
      phone === "" ||
      price === ""
    ) {
      swal(
        "Oops!",
        "Please fill in all the fields or maybe you have a purchase !!!",
        "error"
      );
      
    }
    else if(quantity > purchase.stock){
      swal("Oops!", "You can't buy more than what you have in stock", "error");
      return;
    }

    
     else {
      fetch(` http://localhost:5000/purchase/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(total),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("successfully", data);
        });
      swal("Thank you!", "Your purchase has been made", "success");
    }

    e.target.reset();
    if ("successfully") {
      navigate("/payment/" + id);
    }
  };

  useEffect(() => {
    fetch(` http://localhost:5000/product/${id}`,{
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setPurchase(data);
      });
  });

  return (
    <div className="flex justify-center mt-[100px]">
      <div className="card w-96  bg-base-300 shadow-xl">
        <div className="card-body">
          <img src={purchase.image} alt="" />

          <label class="label">
            <span class="label-text-alt text-white">Available Stock</span>
          </label>
          <h2>{purchase.stock}</h2>

          <label class="label">
            <span class="label-text-alt">minimum</span>
          </label>
          <h2>{purchase.minimum}</h2>

          <form onSubmit={handlePay}>
            <label class="label">
              <span class="label-text-alt text-white">Product Name</span>
            </label>
            <input
              type="text"
              name="productName"
              disabled
              value={purchase.name}
              className="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt text-white">Product Price</span>
            </label>
            <input
              type="number"
              name="productPrice"
              disabled
              value={purchase.price}
              className="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Customer Name</span>
            </label>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              className="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text-alt">Phone Number</span>
            </label>
            <input
              type="number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />

            <div>
              <button className="btn btn-secondary text-gray-200">Pay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetail;
