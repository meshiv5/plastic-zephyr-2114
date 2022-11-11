import React from "react";

const ProductCard = ({ name, price, rating, image }) => {
  return (
    <div>
      <img src={"https://via.placeholder.com/200"} alt="" />
      <h4>{name}</h4>
      <p>{price.formattedValue}</p>
      <p>Ratings: {rating || "NA"}</p>
    </div>
  );
};

export default ProductCard;
