// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Button, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="./Atmiya.png" alt="Coursea Logo" className="sidebar-logo-image" />
        <p>LMS</p>
      </div>
      <List className="sidebar-list">
        <ListItem button className="sidebar-item active">
          <ListItemIcon>
            <DashboardIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon>
            <MenuBookIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon>
            <PeopleIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Mentors" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon>
            <MessageIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Message" />
        </ListItem>
        <ListItem button className="sidebar-item">
          <ListItemIcon>
            <SettingsIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>
      </List>
      <Divider className="sidebar-divider" />
      {/* <Box className="sidebar-upgrade">
        <Typography variant="body1" className="sidebar-upgrade-text">Upgrade to Pro</Typography>
        <Typography variant="body2" className="sidebar-upgrade-subtext">Get 1 Month Free!</Typography>
        <Button variant="contained" color="primary" className="sidebar-upgrade-button">
          Upgrade
        </Button>
      </Box> */}
    </div>
  );
};

export default Sidebar;
