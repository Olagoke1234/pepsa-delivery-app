import React from "react";
import Caret from "../assets/images/caret-back.png";
import ProfileIcon from "../assets/images/profile-icon.png";

const DeliveringToPage = () => {
  return (
    <div
      className="profile-details-page"
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
            width: "100%",
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
          <div>
            <img
              src={ProfileIcon}
              alt="Back Button"
              style={{ marginRight: "15px", cursor: "pointer" }}
            />
          </div>
        </div>
      </header>
      <div className="instant-delivery-content" style={{ padding: "20px" }}>
        <p
          className="form-title"
          style={{ fontWeight: "500", marginBottom: "8px" }}
        >
          Deliver To
        </p>

        {/* form creation */}
        <form id="pickup-details-form">
          <div className="form-group">
            <label
              htmlFor="pickup-details-name"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Name (shop, person)
            </label>
            <br />{" "}
            <input
              id="pickup-details-name"
              placeholder="Adebayo Oluwaseun"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: " 10px ",
                boxSizing: "border-box",
                fontSize: "12px",
              }}
            />
          </div>
          <br />
          <div className="form-group">
            <label
              htmlFor="pickup-details-phone"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Phone Number
            </label>
            <br />{" "}
            <input
              id="pickup-details-phone"
              placeholder="08123456789"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: " 10px ",
                boxSizing: "border-box",
                fontSize: "12px",
              }}
            />
          </div>
          <br />
          <div className="form-group">
            <label
              htmlFor="pickup-details-building-number"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Building/Floor Number
            </label>
            <br />{" "}
            <input
              id="pickup-details-building-number"
              placeholder="No 1"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: " 10px",
                boxSizing: "border-box",
                fontSize: "12px",
              }}
            />
          </div>
          <br />
          <div className="form-group">
            <label
              htmlFor="pickup-details-busstop"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Landmark/Busstop
            </label>
            <br />{" "}
            <input
              id="pickup-details-busstop"
              placeholder="Oju-Irin, Akobo"
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: " 10px",
                boxSizing: "border-box",
                fontSize: "12px",
              }}
            />
          </div>
          <br />
          <div
            className="buttons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              boxSizing: "border-box",
              gap: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "#fff",
                border: "1px solid #9D0208",
                fontWeight: "600",
                width: "50%",
              }}
            >
              Back
            </button>
            <button
              style={{
                backgroundColor: "#9D0208",
                border: "1px solid #9D0208",
                color: "#fff",
                fontWeight: "600",
                width: "50%",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveringToPage;
