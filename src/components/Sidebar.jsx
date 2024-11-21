import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Switch,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Home, LibraryMusic, Settings } from "@mui/icons-material";
import { useThemeToggle } from "./ThemeContext";

const Sidebar = () => {
  const { darkMode, toggleTheme } = useThemeToggle();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;

  const menuItems = [
    { text: "Home", icon: <Home /> },
    { text: "Library", icon: <LibraryMusic /> },
    { text: "Settings", icon: <Settings /> },
  ];

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Dark Mode" />
          <Switch checked={darkMode} onChange={toggleTheme} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
        mt: { xs: "56px", sm: "64px" }, // Add margin to align below navbar
      },
    }}
  >
    <Box sx={{ overflow: "auto" }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
    );
}

export default Sidebar;
