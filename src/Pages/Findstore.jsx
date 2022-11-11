import React from "react";
import { FaHome } from "react-icons/fa";
import mapuser from "../Assets/log/mapuser.png";
import iconlocate from "../Assets/log/iconlocate.png";
import rillogo from "../Assets/log/rillogo.jpg";
import jiologo from "../Assets/log/jiologo.jpg";
import resq from "../Assets/log/resq.png";
import "../Styles/findstore.css";

const Findstore = () => {
  return (
    <div className="find-section">
      <div className="find-main">
        <div className="breadcm">
          <div className="breadcum">
            <i className="fa-home">
              {" "}
              <FaHome />
            </i>
          </div>
          <div className="find-title">
            <span> Find a store</span>
          </div>
        </div>
      </div>

      <div className="find-main2">
        <div className="store-head">
          <span>
            {" "}
            <strong>Reliance Digital Store</strong> &{" "}
            <strong>Service Center</strong> near you {" "}{" "}
          </span>
          <img src={mapuser} alt="usermaplogo" />
        </div>

        <div className="inputbox">
          <input className="inputbar" type="text" placeholder=" Enter Pincode / Town / Street" />
          <span className="oruse">or Use</span>
          <button className="locatebtn">
            <img className="iconlocate" src={iconlocate} alt="locateicon" /> SHOW STORES NEAR ME{" "}
          </button>
        </div>
      </div>
        <div className="storebox">
            <div className="storetext">
                <div><img src={rillogo} alt="" /> </div> 
                <div>
                    <span>Reliance Digital Stores</span>
                    <span> Reliance Digital is present nation-wide with 300+ stores across 100+ cities. Bring home the latest & best in technology from the widest selection at the lowest assured price with complete peace of mind through lifelong support. Reliance Digital is backed by Reliance resQ, the service arm that is available for support all 7 days and fully geared to provide end-to-end solutions.</span>
                </div>
                 </div>
            <div className="storetext">
                <div> <img src={jiologo} alt="jio" /> </div>
                <div>
                    <span>Jio Stores</span>
                    <span>Jio with its 1700+ stores across the country, is here to provide you easy access & understanding to all Jio offerings in a convenient environment. Our Aadhar based activation process & trained Jio members are here to expedite your onboarding in the rapidly growing Jio family. We also offer Devices, Tech Accessories & Services in a pleasing environment, to complement your Jio 4G connection.</span>
                </div>
            </div>
            <div className="storetext" >
                <div> <img src={resq} alt="" /> </div>
                <div>
                    <span>Reliance Digital Service Center</span>
                    <span>Reliance resQ is India's first and only multi-product, multi-brand electronics and home appliances service provider. resQ Service Centres are authorized by leading brands and operate 7 days a week between 9:30 AM to 7:30 PM each day.</span>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Findstore;
