import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
// import { useSearchParams } from "react-router-dom";

const getProducts = async (q) => {
  return fetch(
    `https://reliance-digital-backend.vercel.app/api/products?q=${q}`
  ).then((res) => res.json());
};

const Products = () => {
  const [products, setProducts] = useState([]);

  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "mobiles";

  useEffect(() => {
    getProducts(q).then((res) => {
      console.log(res);
      setProducts(res.results);
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
      }}
    >
      <div></div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {products.map((item, i) => (
          <Link to={`/products/${item.code}`}>
            <ProductCard
              key={i}
              name={item.name}
              price={item.price}
              rating={item.averageRating}
              image={item.images}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
