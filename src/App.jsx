import React from "react";
import "./pages/WelcomePage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import InstantDeliveryPage from "./pages/InstantDeliveryPage.jsx";
import PickUpDetailsPage from "./pages/PickUpDetailsPage.jsx";
import DeliveringToPage from "./pages/DeliveringToPage.jsx";
import ScheduleDeliveryPage from "./pages/ScheduleDeliveryPage.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <WelcomePage />
        <InstantDeliveryPage />
        <PickUpDetailsPage />
        <DeliveringToPage />
        <ScheduleDeliveryPage />
      </div>
    </>
  );
}

export default App;
