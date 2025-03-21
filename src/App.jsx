import React from "react";
import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/instant-delivery-page"
          element={<InstantDeliveryPage />}
        />
        <Route
          path="/schedule-delivery-page"
          element={<ScheduleDeliveryPage />}
        />
        <Route path="/delivering-to-page" element={<DeliveringToPage />} />
        <Route path="/pick-up-page" element={<PickUpDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
