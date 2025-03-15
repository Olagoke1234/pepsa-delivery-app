import React from "react";
import Footer from "../components/Footer";
import Caret from "../assets/images/caret-back.png";
import HeaderMenu from "../assets/images/header-menu.png";
import InstantDelivery from "../assets/images/instant-delivery.png";
import InstantDeliveryBackground from "../assets/images/instant-delivery-background.png";
import Timer from "../assets/images/timer-img.png";
import TimerBackground from "../assets/images/timer-img-bg.png";
import DropOff from "../assets/images/drop-off.png";
import LocationIcon from "../assets/images/location.png";

const WelcomePage = () => {
  return (
    <div
      className="welcome-page"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.25)",
        paddingTop: "10px",
        width: "100%",
        maxWidth: "300px",
      }}
    >
      <header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px ",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <div
          className="header-content"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={Caret}
              alt="Back Button"
              style={{ marginRight: "15px", cursor: "pointer" }}
            />
          </div>
          <div>
            <h1 style={{ fontSize: "22px" }}>Welcome George</h1>
          </div>
        </div>
        <div className="header-menu">
          <img
            src={HeaderMenu}
            alt="Header Menu Dropdown"
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>
      <div className="delivery-choice" style={{ padding: "0 20px" }}>
        <p>What would you like to do?</p>
      </div>
      <div
        className="delivery-card"
        style={{
          margin: " 20px",
          backgroundColor: "#FFA2A6",
          position: "relative",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div className="delivery-type-icon">
          <img src={InstantDelivery} alt="Instant Delivery Icon" />
        </div>
        <div className="delivery-type-name">
          <p
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#111111",
              lineHeight: "120%",
            }}
          >
            Instant Delivery
          </p>
        </div>
        <div className="delivery-type-description">
          <p
            style={{ color: "#4F4F4F", lineHeight: "100%", marginTop: "-6px" }}
          >
            Agent takes only your package and delivers instantly
          </p>
        </div>
        <div
          className="delivery-background-img"
          style={{
            position: "absolute",
            transform: "scale(1.25)",
            bottom: 13,
            right: 30,
            opacity: "0.1",
          }}
        >
          <img
            src={InstantDeliveryBackground}
            alt="Instant Delivery Background Image"
            style={{ overflow: "hidden" }}
          />
        </div>
      </div>

      <div
        className="delivery-card"
        style={{
          margin: " 20px",
          backgroundColor: "#FFEBEB",
          position: "relative",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div className="delivery-type-icon">
          <img src={Timer} alt="Instant Delivery Icon" />
        </div>
        <div className="delivery-type-name">
          <p
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#111111",
              lineHeight: "120%",
            }}
          >
            Scheduled Delivery
          </p>
        </div>
        <div className="delivery-type-description">
          <p
            style={{ color: "#4F4F4F", lineHeight: "100%", marginTop: "-6px" }}
          >
            Agent comes to pick up on your specified date and time
          </p>
        </div>
        <div
          className="delivery-background-img"
          style={{
            position: "absolute",
            transform: "scale(1.25)",
            bottom: 13,
            right: 30,
            opacity: "0.1",
          }}
        >
          <img
            src={TimerBackground}
            alt="Instant Delivery Background Image"
            style={{ overflow: "hidden" }}
          />
        </div>
      </div>

      <div className="history-section">
        <div
          className="history-section-header"
          style={{
            display: "flex",
            padding: "0 20px",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div>
            {" "}
            <p
              className="section-heading"
              style={{
                color: "#111111",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              History
            </p>
          </div>
          <div>
            <p
              style={{ color: "#9D0208", fontSize: "16px", fontWeight: "500" }}
            >
              View All
            </p>
          </div>
        </div>
        <div className="history-detail-card">
          <div
            className="history-credentials"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 40px",
            }}
          >
            <div className="recipient-detail">
              <h4
                style={{
                  color: "#9D0208",
                  fontSize: "17px",
                  fontWeight: "600",
                  textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                ORDB1234
              </h4>
              <p style={{ marginTop: "-20px" }}>Receipient: Paul Pogba</p>
            </div>
            <div className="status">
              <button
                style={{
                  backgroundColor: "#9D0208",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                Completed
              </button>
            </div>
          </div>
          <div
            className="drop-off-details"
            style={{
              padding: "0 40px",
              display: "flex",
            }}
          >
            <div className="drop-off-img">
              <img
                src={DropOff}
                alt="Bike Image"
                style={{ marginRight: "10px" }}
              />
            </div>
            <div className="drop-off breakdown">
              <div
                className="iconandtext"
                style={{ display: "flex", alignContent: "center" }}
              >
                <div className="location-icon">
                  <img
                    src={LocationIcon}
                    alt="Location Icon"
                    style={{ marginRight: "10px" }}
                  />
                </div>
                <div className="drop-off-text" style={{ fontSize: "16px" }}>
                  Drop Off
                </div>
              </div>
              <p style={{ marginTop: "3px", color: "#9D0208" }}>
                Faith Bible Church
              </p>
              <p style={{ marginTop: "-15px", fontSize: "14px" }}>
                12th January 2020, 2:43pm
              </p>
            </div>
          </div>
        </div>
        <hr
          style={{
            margin: "20px 40px",
            border: "0.5px solid red",
            opacity: "0.1",
          }}
        />
        <div className="history-detail-card">
          <div
            className="history-credentials"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 40px",
            }}
          >
            <div className="recipient-detail">
              <h4
                style={{
                  color: "#9D0208",
                  fontSize: "17px",
                  fontWeight: "600",
                  textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                ORDB1234
              </h4>
              <p style={{ marginTop: "-20px" }}>Receipient: Paul Pogba</p>
            </div>
            <div className="status">
              <button
                style={{
                  backgroundColor: "#9D0208",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                Completed
              </button>
            </div>
          </div>
          <div
            className="drop-off-details"
            style={{
              padding: "0 40px",
              display: "flex",
            }}
          >
            <div className="drop-off-img">
              <img
                src={DropOff}
                alt="Bike Image"
                style={{ marginRight: "10px" }}
              />
            </div>
            <div className="drop-off breakdown">
              <div
                className="iconandtext"
                style={{ display: "flex", alignContent: "center" }}
              >
                <div className="location-icon">
                  <img
                    src={LocationIcon}
                    alt="Location Icon"
                    style={{ marginRight: "10px" }}
                  />
                </div>
                <div className="drop-off-text" style={{ fontSize: "16px" }}>
                  Drop Off
                </div>
              </div>
              <p style={{ marginTop: "3px", color: "#9D0208" }}>
                Faith Bible Church
              </p>
              <p style={{ marginTop: "-15px", fontSize: "14px" }}>
                12th January 2020, 2:43pm
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
