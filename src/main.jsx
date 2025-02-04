import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Log from "./components/login-pa/log.jsx";
import Sidebar from "./components/Sidebar/SideBar";
import Dashboard from "./components/DashBoard/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar stays fixed */}
        <Sidebar />
        {/* Main content area */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  </StrictMode>
);
