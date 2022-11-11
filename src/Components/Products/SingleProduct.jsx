import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const getProduct = async (id) => {
  return fetch(
    "https://reliance-digital-backend.vercel.app/api/products/" + id
  ).then((res) => res.json());
};

const SingleProduct = () => {
  const [param] = useSearchParams();
  const { id } = useParams({});

  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  console.log(param);

  return (
    <div>
      <div>
        <img src={product?.productData?.media[0]?.productImageUrl} alt="" />
      </div>
      <div>{product?.pageTitle}</div>
      <div></div>
    </div>
  );
};

export default SingleProduct;
