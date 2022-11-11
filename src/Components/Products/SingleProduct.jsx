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
    <div
      style={{
        margin: "1rem auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
        }}
      >
        <div>
          <img src={product?.productData?.media[0]?.productImageUrl} alt="" />
        </div>
        <div>
          <strong>
            <div>{product?.pageTitle}</div>
          </strong>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: product?.productData?.summary,
              }}
            />
            <div>
              <strong>Price:</strong>
              <strike>
                <p
                  style={{
                    fontSize: "24px",
                    color: "red",
                  }}
                >
                  ₹{product?.productData?.price.mrp}
                </p>
              </strike>
              <p
                style={{
                  fontSize: "24px",
                  color: "Blue",
                }}
              >
                ₹{product?.productData?.price.value}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    padding: "10px 2rem",
                    backgroundColor: "#E42529",
                    border: "none",
                    color: "white",
                  }}
                >
                  Add to Cart
                </button>
                <button
                  style={{
                    padding: "10px 2rem",
                    backgroundColor: "#F76027",
                    border: "none",
                    color: "white",
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: product?.productData?.description }}
      />
    </div>
  );
};

export default SingleProduct;
