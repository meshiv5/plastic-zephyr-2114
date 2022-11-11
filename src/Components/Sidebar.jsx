import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import SidebarItems from "./SidebarItems";
import items from "../data/sidebar.json";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ menuDisplay }) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: menuDisplay }} className="sidebar">
      <div className="sidebar-login-item">
        <span style={{ display: "flex", alignItems: "center" }}>
          <FaUser />{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            style={{ marginLeft: "5px" }}
            className="links"
          >
            Login
          </span>{" "}
          |{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            className="links"
          >
            Register
          </span>
        </span>
      </div>
      {items.map((item, index) => (
        <SidebarItems key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
