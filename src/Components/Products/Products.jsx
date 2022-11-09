import React from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [params] = useSearchParams();

  const query = params.get("q") || "all";

  console.log(query);

  return <div>Products</div>;
};

export default Products;
