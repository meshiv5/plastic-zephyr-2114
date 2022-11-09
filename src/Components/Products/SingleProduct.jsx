import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const param = useParams();

  console.log(param);

  return <div>SingleProduct</div>;
};

export default SingleProduct;
