import React from "react";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          src="./Atmiya.png"
          alt="Coursea Logo"
          className="sidebar-logo-image"
        />
        <p>LMS</p>
      </div>
      <List className="sidebar-list">
        {/* Overview Button */}
        <ListItem className="sidebar-item active" onClick={() => navigate("/")}>
          <ListItemIcon>
            <DashboardIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>

        {/* Courses Button - Navigates to /explore ✅ */}
        <ListItem
          className="sidebar-item"
          onClick={() => navigate("/explore")} // ✅ Navigates to Explore
        >
          <ListItemIcon>
            <MenuBookIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>

        {/* Mentors Button */}
        <ListItem className="sidebar-item" onClick={() => navigate("/mentors")}>
          <ListItemIcon>
            <PeopleIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Mentors" />
        </ListItem>

        {/* Message Button */}
        <ListItem className="sidebar-item">
          <ListItemIcon>
            <MessageIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Message" />
        </ListItem>
      </List>

      <Divider className="sidebar-divider" />
    </div>
  );
};

export default Sidebar;
