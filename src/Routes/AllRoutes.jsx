import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Components/Products/Products";
import SingleProduct from "../Components/Products/SingleProduct";
import Sidebar from "../Components/Sidebar";
import Contact from "../Pages/Contact";
import Findstore from "../Pages/Findstore";
import Home from "../Pages/Home";
import Return from "../Pages/Return";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Register from '../Pages/Register'
import Checkout from '../Pages/Checkout'
import Payments from '../Pages/Payment'
import Final from '../Pages/Final'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/easyreturn" element={<Return />} />
      <Route path="/findstore" element={<Findstore />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/payments' element={<Payments/>}/>
      <Route path='/final' element={<Final/>}/>
    </Routes>
  );
};

export default AllRoutes;
