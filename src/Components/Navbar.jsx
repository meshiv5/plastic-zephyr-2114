import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../Styles/Navbar/Navbar.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
//  import { Route,Routes } from 'react-router-dom'
// import Login from "../Pages/Login"

export default function Navbar() {
  const navigate = useNavigate();
  const [isGreaterThan1100px, setIsGreaterThan1100px] = useState(false);
  const menyStyle2 = {
    display: "none",
  };
  const [menuDisplay, setMenuDisplay] = useState("none");
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1100) {
        setIsGreaterThan1100px(true);
        setMenuDisplay("none");
      } else {
        setIsGreaterThan1100px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenuDisplay() {
    setMenuDisplay(menuDisplay === "none" ? "block" : "none");
  }
  return (
    <div id="navbar">
      <div id="topNav">
        <h5>OUR BRAND PROMISE</h5>
        <Link to={"/easyreturn"}>
          <h5>EASY RETURN</h5>
        </Link>
        <hr className="topNavDivider" />
        <h5>NEXT DAY DELIVERY</h5>
        <hr className="topNavDivider" />
        <h5>SERVICE GUARANTEE</h5>
        <hr className="topNavDivider" />
        <h5>UNMATCHED NETWORK</h5>
        <hr className="topNavDivider" />
        <Link to={"/findstore"}>
          <h5>Find a store</h5>
        </Link>
        <hr className="topNavDivider" />
        <Link to={"/contact"}>
          <h5>Contact us</h5>
        </Link>
      </div>
      <hr className="topNavDivider" />
      <FaBars onClick={toggleMenuDisplay} className="menuIcon" />
      <div id="midNav">
        <img
          className="mainLogo"
          onClick={() => {
            navigate("/");
          }}
          height="50px"
          src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
          alt="RelianceLogo"
        />

        <div>
          <input style={{ paddingLeft: "15px" }} type="text" placeholder="Find your favorite products" />
          <img width="20px" src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="searchIcon" />
        </div>
        <div>
          <h5>Select your PIN Code</h5>
          <hr className="topNavDivider" />
          <img id="cart" width="20px" src="https://cdn-icons-png.flaticon.com/512/649/649931.png" alt="cartIcon" />

          <h3>Cart</h3>
          <hr className="topNavDivider" />
          <img width="20px" src="https://cdn-icons-png.flaticon.com/512/2321/2321232.png" alt="loginIcon" />
          <h5>Login</h5>
        </div>
      </div>

      <div id="botNav">
        <div className="parent">
          <h6>MOBILES & TABLETS</h6>
          <div className="child">
            <div>
              <div>
                <p>Smartphones</p>
                <br />
                <p>Wearable Technology</p>
                <p>Boat New Launch</p>
                <br />
                <p>Accessories</p>
                <p>Tablet Accessories</p>
                <p>Mobile Grips & Stands</p>
                <p>Car Mobile Holders</p>
                <p>Memory Cards</p>
              </div>
              <div>
                <p>Headphones & Headsets</p>
                <br />
                <p>Tablets & eReaders</p>
                <br />
                <p>Every Day use Tablets below 15000</p>
                <p>Premium Tablets, Above 15001</p>
                <br />
                <p>Power Banks</p>
                <br />
                <p>eSlates</p>
              </div>
              <div>
                <p>AI Learning Robots</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>TELEVISIONS</h6>
          <div className="child">
            <div>
              <div>
                <p>Televisions</p>
                <br />
                <p>Smart TVs</p>
                <p>32 Inch TVs</p>
                <p>43 Inch TVs</p>
                <p>55 Inch TVs</p>
                <p>Android TVs</p>
              </div>
              <div>
                <p>Gaming</p>
                <br />
                <p>Gaming Consoles</p>
                <p>Gaming Accessories</p>
                <p>Gaming Titles</p>
                <p>Projectors</p>
                <p>Streaming Devices</p>
              </div>
              <div>
                <p>Reconnect Disney | Marvel Audio Collection</p>
                <br />
                <p>TV & Audio Accessories</p>
                <p>Virtual Reality Headsets</p>
                <p>Stabilizers & Surge Protectors</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>AUDIO</h6>
          <div className="child">
            <div>
              <div>
                <p>Headphones & Headsets</p>
                <br />
                <p>True Wireless</p>
                <p>Bluetooth Neckbands</p>
                <p>Wired Earphones</p>
                <p>On Ear Headphones</p>
                <p>Noise Cancelling Headphones</p>
              </div>
              <div>
                <p>Bluetooth & WiFi Speakers</p>
                <br />
                <p>Bluetooth Speakers</p>
                <p>Smart Speakers</p>
              </div>
              <div>
                <p>TV Speakers & Soundbars</p>
                <br />
                <p>Soundbars</p>
                <p>Home Theatre Systems</p>
                <p>Party speakers</p>
                <p>Multimedia</p>
              </div>
              <div>
                <p>Musical Instruments</p>
                <br />
                <p>Guitars and Ukuleles</p>
                <p>Microphones</p>
                <p>Musical Keyboards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>HOME APPLIANCES</h6>
          <div className="child">
            <div>
              <div>
                <p>Air Conditioners</p>
                <br />
                <p>Split Air Conditioners</p>
                <p>Window Air Conditioners</p>
                <p>Smart Air Conditioners</p>
                <p>Energy Efficient Air Conditioners</p>
                <p>1 ton Air Conditioners</p>
                <p>1.5 ton Air Conditioners</p>
                <p>5 star Air Conditioners</p>
                <br />
                <p>Air Coolers</p>
                <br />
                <p>Air Purifiers</p>
              </div>
              <div>
                <p>Washing Machines</p>
                <br />
                <p>Fully Automatic Front Load</p>
                <p>Fully Automatic Top Load</p>
                <p>Semi-Automatic Top Load</p>
                <p>Washing Machine Detergents & Liquids</p>
                <p>Refrigerators</p>
                <p>Single Door</p>
                <p>Double Door</p>
                <p>Side by Side Refrigerators</p>
                <p>Convertible</p>
              </div>
              <div>
                <p>Vacuum Cleaners</p>
                <br />
                <p>Robotic Vacuum Cleaners</p>
                <p>Dishwashers</p>
                <p>Fans</p>
                <p>Cloth Dryers</p>
                <p>Geysers</p>
                <p>Room Heaters</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>COMPUTERS</h6>
          <div className="child">
            <div>
              <div>
                <p>Laptops</p>
                <br />
                <p>Basic use laptops</p>
                <p>Student Laptops</p>
                <p>Thin and light Laptops</p>
                <p>Multi-tasking Laptops</p>
                <p>Gaming Laptops</p>
                <p>Content creator Laptops</p>
                <br />
                <p>Computer Monitors</p>
                <br />
                <p>Desktops & All-In-Ones</p>
              </div>
              <div>
                <p>Desktops & All-In-Ones</p>
                <p>Internet Connectivity Devices</p>
                <p>Routers</p>
                <p>WiFi Range Extenders</p>
                <p>Wireless USB Adapters</p>
                <p>Printers & Inks</p>
                <p>Printers</p>
                <p>Toners & Ink Cartridges</p>
                <p>Data Storage Devices</p>
                <p>Memory Cards</p>
                <p>Pen Drives & OTG Drives</p>
                <p>Hard Disks & SSD</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>CAMERAS</h6>
          <div className="child">
            <div>
              <div>
                <p>DSLR Cameras</p>
                <br />
                <p>Mirrorless Cameras</p>
                <p>Point & Shoot Cameras</p>
                <p>ProSumer Cameras</p>
                <p>Action Cameras</p>
                <p>Photo Storage Devices</p>
                <p>Memory Cards</p>
                <p>Pen Drives</p>
              </div>
              <div>
                <p>Binoculars</p>
                <br />
                <p>Camera Lens</p>
                <p>Digital Camera Accessories</p>
                <p>Camera Batteries & Chargers</p>
                <p>Camera bags & cases</p>
                <p>Tripods & Monopods</p>
                <p>Action Camera Accessories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>KITCHEN APPLIANCES</h6>
          <div className="child">
            <div>
              <div>
                <p>Microwave Ovens</p>
                <br />
                <p>Water Purifiers</p>
                <p>Fruits and Vegetable Cleaner</p>
                <p>Oven Toaster Grillers (OTG)</p>
                <p>Cookwares</p>
                <p>Juicer Mixer Grinders</p>
                <p>Juicers</p>
                <p>Hand Mixers</p>
                <p>Mixer Grinders</p>
                <p>Choppers & Slicers</p>
              </div>
              <div>
                <p>Induction Cookers</p>
                <br />
                <p>Food Processors</p>
                <p>Blenders</p>
                <p>Kitchen Hobs & Gas Stoves</p>
                <p>Kitchen Chimneys</p>
                <p>Rice Cookers</p>
                <p>Sandwich Makers</p>
                <p>Popup Toasters</p>
                <p>Coffee Makers & Grinders</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>PERSONAL CARE</h6>
          <div className="child">
            <div>
              <div>
                <p>Shavers & Trimmers</p>
                <br />
                <p>Epilators</p>
                <br />
                <p>Hair Dryers & Stylers</p>
                <br />
                <p>Weighing Scales</p>
                <br />
                <p>Irons</p>
              </div>
              <div>
                <p>Reconnect Disney|Marvel Grooming Collection</p>
                <p>Hygiene & Personal Care</p>
                <p>Digital Thermometers</p>
                <p>Massagers</p>
                <p>Misc. Care Devices</p>
                <p>Garment Steamers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="parent">
          <h6>ACCESSORIES</h6>
          <div className="child">
            <div>
              <div>
                <p>Bags, Cases & Sleeves</p>
                <br />
                <p>Smart Devices</p>
                <p>Smart Plugs</p>
                <p>Smart Cameras</p>
                <p>Smart Sensors</p>
                <p>Smart Lights</p>
                <p>Smart Speakers</p>
                <p>Smart Tracking Devices</p>
                <p>Batteries</p>
                <p>Power Banks</p>
                <p>Cables & Cords</p>
                <p>Chargers & Adapters</p>
                <p>Bluetooth & WiFi Speakers</p>
              </div>
              <div>
                <p>Reconnect Disney | Marvel Accessories</p>
                <br />
                <p>Data Storage Devices</p>
                <p>Memory Cards</p>
                <p>Pen Drives & OTG Drives</p>
                <p>Hard Disks & SSD</p>
                <p>Mounts & Stands</p>
                <p>Air Conditioner Stands</p>
                <p>Tripods & Monopods</p>
                <p>Selfie Sticks</p>
                <p>Car Mobile Holders</p>
                <p>Laptop Stands</p>
                <p>Mobile Grips & Stands</p>
                <p>Surge Protectors</p>
                <p>Webcams</p>
              </div>
              <div>
                <p>Headphones & Headsets</p>
                <br />
                <p>Cleaners & Protectors</p>
                <p>Computer Mouse</p>
                <p>Keyboards</p>
                <p>Indoor Lighting</p>
                <p>Office Electronics</p>
                <p>Laminators</p>
                <p>Paper Shredders</p>
                <p>Tyre Inflators</p>
                <p>Routers</p>
                <p>Screen Guards & Protectors</p>
                <p>Power Strips & Extension Cords</p>
                <p>Stabilizers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar menuDisplay={menuDisplay} />
    </div>
  );
}
