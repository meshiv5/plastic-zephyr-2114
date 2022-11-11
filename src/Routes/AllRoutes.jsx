import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products/Products";
import SingleProduct from "../Components/Products/SingleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default AllRoutes;
