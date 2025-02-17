import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Log from "./components/login-pa/log.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dashboard from "./components/DashBoard/Dashboard.jsx";
import Explore from "./components/Explore-courses/Explore.jsx";
import Coursevideo from "./components/Coursevideo/Coursevideo.jsx";


function App() {
  const location = useLocation();
  const hiddenPaths = ["/login"]; // Add any paths where you don't want the sidebar
  const hideSidebar = hiddenPaths.includes(location.pathname);

  return (
    <div style={{ display: "flex" }}>
      {!hideSidebar && <Sidebar />}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Log />} />
          {/* <Route path="/signin" element={<Log />} /> */}
          <Route path="/register" element={<Log />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/video" element={<Coursevideo/>} />
        </Routes>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
