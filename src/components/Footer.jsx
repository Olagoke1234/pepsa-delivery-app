import React from "react";
import Wallet from "../assets/images/Wallet (2).png";
import Bills from "../assets/images/Bills (2).png";
import PepsaLogoWhite from "../assets/images/Pepsa-logo-white.png";
import Delivery from "../assets/images/Delivery (2).png";
import Switch from "../assets/images/Switch (2).png";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-content"
        style={{
          backgroundColor: "#9D0208",
          color: "white",
          width: "100%",
          // maxWidth: "350px",
          height: "52px",
          padding: "10px 0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          overflow: "hidden",
        }}
      >
        <div>
          <img
            src={Wallet}
            alt="Wallet Link"
            style={{ cursor: "pointer", width: "30px", height: "40px" }}
          />
        </div>
        <div>
          <img
            src={Bills}
            alt="Bills Link"
            style={{ cursor: "pointer", width: "40px", height: "50px" }}
          />
        </div>
        <div>
          <img
            src={PepsaLogoWhite}
            alt="PepsaLogo Link"
            style={{ cursor: "pointer", width: "60px", height: "60px" }}
          />
        </div>
        <div>
          <img
            src={Delivery}
            alt="Delivery Link"
            style={{ cursor: "pointer", width: "40px", height: "40px" }}
          />
        </div>
        <div>
          <img
            src={Switch}
            alt="Switch Link"
            style={{ cursor: "pointer", width: "30px", height: "40px" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
