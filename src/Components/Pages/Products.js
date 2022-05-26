import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(" http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className=" px-12 mt-28">
      <h2 className=" text-3xl text-center mb-28 underline">Our Products</h2>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
