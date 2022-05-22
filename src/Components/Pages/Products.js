import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
const [products,setProducts] = useState();

useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        setProducts(data);
        
        
    })
},[]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-12 mt-28">
      {
            products?.map(product => <ProductCard
            key={product.id}
            product={product}
            ></ProductCard>)
      }
    </div>
  );
};

export default Products;
