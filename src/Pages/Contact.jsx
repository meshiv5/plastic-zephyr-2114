import React from "react";
import contact from "../Assets/log/contact.jpg";
import callus from "../Assets/log/callus.jpg";
import whatsapp from "../Assets/log/whatsapp.jpg";
import email from "../Assets/log/email.jpg";
import apple from "../Assets/log/apple.jpg";
import google from "../Assets/log/google.jpg";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-main">
      {/* Section 1 */}
      <div className="contact-image-wrapper">
        <div className="contact-text">
          <p className="text1">WE WOULD LOVE TO HELP YOU</p>
          <p className="text2">REACH US AT:</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="social-box">
        <div className="social-content">
          <div className="social-log">
           
            <img className="social-logo" src={callus} alt="callimage" />{" "}
          </div>
          <div className="call-box">
            <p className="call-head">For E-Commerce Related Queries</p>
            <p className="numbers">1800 889 1055</p>
            <p> (9:30 AM to 7:30 PM, 365 days) </p>
            <p className="call-head">For Store Related Queries</p>
            <p className="numbers">1800-889-1044</p>
            (9:00 AM to 9:00 PM, 365 days)
          </div>
        </div>

        <div className="social-content">
          <div className="social-log">
            <img className="social-logo" src={whatsapp} alt="whatsapplogo" />{" "}
          </div>
          <div className="social-text">
            <p className="call-head">We are now on WhatsApp</p>
            <p className="numbers">Send Hi! to +917977912345 </p>
            or
            <br />
            <br />
            <p className="numbers">Click here to start</p>
          </div>
        </div>
        <div className="social-content">
          <div className="social-log">
            {" "}
            <img className="social-logo" src={email} alt="emaillogo" />
          </div>
          <div className="email-box">
            <p className="email-text1">reliancedigital@ril.com</p>
            <p className="email-text2">DOWNLOAD RESQ APP ON MOBILE</p>
            <div className="email-logo">
              <img className="small-icon" src={google} alt="" />
              <img className="small-icon" src={apple} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3  */}
      <div className="detail-main">
        <div className="detail-head">Concerns not Addressed?</div>
        <br />
        <p>
          It is our priority to positively respond and address any concerns you
          may have at the earliest. To ensure this, our team is continuously
          working to provide you the best of support though a few concern/issues
          that are complex in nature may require additional time to resolve.
        </p>
        <br />
        In the unlikely event that your concerns are not addressed
        satisfactorily, you could communicate directly to higher authorities. To
        facilitate and better manage this we have aligned a structure to aid
        communication.
        <br />
        <br />
        <p>
          Communication structure for concerns not addressed satisfactorily:
        </p>
        <br />


        <ul>
          <li>
            <strong> Level-1: Head of Customer Support:</strong>{" "}
            <a  className="anchor" href="mailto: cshead.reliancedigital@ril.com">
              {" "}
              cshead.reliancedigital@ril.com
            </a>
          </li>{" "}
          <li>
            Through this channel you could communicate directly to the head of
            Customer Support
          </li>{" "}
          <li>
            While writing, please do quote original date of raising the issue
            and allied resolution offered by our customer support team
          </li>{" "}
          <li>
            We value every communication sent and look forward to speedily
            resolve it.
          </li>{" "}
          <li>Please allow 24-48 hours for a resolution</li>{" "}
        </ul>
        <ul>
          <br />
          <li>
            <strong>Level-2: CEO:</strong>{" "}
            <a className="anchor" href="mailto: BM.Bade@ril.com">BM.Bade@ril.com</a>
          </li>
        </ul>
        <br />
        <ul>
          {" "}
          <li>
            This is the final level to redress grievances that have already been
            conveyed to the head of customer support
          </li>{" "}
          <li>
            While writing we encourage you to quote the communication and allied
            resolution offered in earlier stages so that we get a holistic view
          </li>{" "}
          <li>
            We value your time and are committed to ensure your satisfaction in
            all your interactions with us
          </li>{" "}
          <li>Please allow 24-48 hours for a resolution</li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
