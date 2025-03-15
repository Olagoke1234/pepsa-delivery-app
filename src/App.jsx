import React from "react";
import "./pages/WelcomePage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import InstantDeliveryPage from "./pages/InstantDeliveryPage.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <WelcomePage />
        <InstantDeliveryPage />
      </div>
    </>
  );
}

export default App;
