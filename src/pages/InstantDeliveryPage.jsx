import React from "react";
import Caret from "../assets/images/caret-back.png";
import LocationIcon from "../assets/images/location.png";
import DeliveryLOcationIcon from "../assets/images/delivery-location.png";
import UploadIcon from "../assets/images/upload-icon.png";
import Car from "../assets/images/car-1.png";
import Bike from "../assets/images/bike-1.png";
import Van from "../assets/images/van-1.png";

const InstantDeliveryPage = () => {
  return (
    <div
      className="instant-delivery-page"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.25)",
        paddingTop: "10px",
        // maxWidth: "350px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 20px ",
          maxWidth: "100vw",
          marginBottom: "-10px",
        }}
      >
        <div
          className="header-content"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <div>
            <img
              src={Caret}
              alt="Back Button"
              style={{ marginRight: "15px", cursor: "pointer" }}
            />
          </div>
          <div
            className="header-dash"
            style={{
              width: "35px",
              height: "5px",
              backgroundColor: "#9D0208",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      </header>
      <div className="instant-delivery-content" style={{ padding: "20px" }}>
        <p
          className="form-title"
          style={{ fontWeight: "500", marginBottom: "8px" }}
        >
          Instant Delivery
        </p>

        {/* form creation */}
        <form id="instant-delivery-form">
          <div className="form-group">
            <label
              htmlFor="pickup-location"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Pickup Location
            </label>
            <br />
            <div
              className="input-group"
              style={{ position: "relative", width: "100%" }}
            >
              {" "}
              <img
                src={LocationIcon}
                alt="Location Icon"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%) scale(1.2)",
                }}
              />
              <input
                id="pickup-location"
                placeholder="Feedwell, Akobo"
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: " 10px 10px 10px 25px",
                  boxSizing: "border-box",
                  fontSize: "12px",
                }}
              />
            </div>
            <p style={{ color: "#9D0208", fontSize: "12px", marginTop: "5px" }}>
              Add Pickup Details
            </p>
          </div>

          <div className="form-group">
            <label
              htmlFor="delivery-location"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Delivery Location
            </label>
            <br />
            <div
              className="input-group"
              style={{ position: "relative", width: "100%" }}
            >
              {" "}
              <img
                src={DeliveryLOcationIcon}
                alt="Location Icon"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%) scale(0.8)",
                }}
              />
              <input
                id="delivery-location"
                placeholder="Corolla Junction, Apatuku, Akobo"
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: " 10px 10px 10px 25px",
                  boxSizing: "border-box",
                  fontSize: "12px",
                }}
              />
            </div>
            <p style={{ color: "#9D0208", fontSize: "12px", marginTop: "5px" }}>
              Add Drop Off Details
            </p>
          </div>

          <div className="form-group">
            <label
              htmlFor="item-details"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Item Details{" "}
              <sup style={{ color: "#9D0208", transform: "scale(1.5)" }}>*</sup>
            </label>
            <br />
            <select
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: " 10px",
                boxSizing: "border-box",
                fontSize: "12px",
              }}
            >
              <option value="Select Item">Select Item</option>
              <option value="Item 1">Item 1</option>
              <option value="Item 2">Item 2</option>
              <option value="Item 3">Item 3</option>
              <option value="Item 4">Item 4</option>
              <option value="Item 5">Item 5</option>
            </select>
          </div>

          <div
            className="upload-picture"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFEBEB",
              marginTop: "10px",
              height: "100px",
              position: "relative",
            }}
          >
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => {
                const file = e.target.files[0];
                console.log("Captured Image:", file);
              }}
              style={{
                position: "absolute",
                top: "20%",
                left: "100px",
                opacity: "0",
                cursor: "pointer",
                zIndex: "1000",
              }}
            />

            <img
              src={UploadIcon}
              alt="Picture Icon"
              style={{ cursor: "pointer" }}
            />
            <p style={{ fontSize: "12px" }}>Take a picture of the package</p>
          </div>
        </form>

        <div className="vehicle-type-section">
          <div className="section-title">
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              Vehicle Type
            </p>
          </div>
          <div
            className="vehicles-container"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div className="bike">
              <img
                src={Bike}
                alt="Bike"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                  flex: "1",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="car">
              <img
                src={Car}
                alt="Car"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                  flex: "1",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="van">
              <img
                src={Van}
                alt="Van"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "5px",
                  flex: "1",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="return-order"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div className="radio">
            <input
              type="radio"
              id="return-order"
              style={{
                borderRadius: "50%",
                accentColor: "#9D0208",
                marginRight: "10px",
                transform: "scale(1.5)",
              }}
            />
            <label
              htmlFor="return-order"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#9D0208",
                lineHeight: "20px",
              }}
            >
              Return order
            </label>
          </div>
        </div>
        <div className="terms-conditions">
          <input
            type="checkbox"
            id="terms-conditions"
            style={{ marginRight: "10px", accentColor: "#9D0208" }}
          />
          <label htmlFor="terms-conditions" style={{ fontSize: "12px" }}>
            I accept all the Terms & Condition and there are no restricted items
            in the package.
          </label>
        </div>
        <div className="price">
          <div className="price-text">
            <p style={{ fontWeight: "700", fontSize: "14px" }}>Price</p>
            <p
              style={{
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              #4,500
            </p>
          </div>
        </div>
        <div className="button-section">
          <button
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#9D0208",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Request Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstantDeliveryPage;
