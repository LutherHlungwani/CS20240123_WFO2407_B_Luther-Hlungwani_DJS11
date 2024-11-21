import React from "react";
import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import {Menu as MenuIcon} from '@mui/icons-material';
import { Link } from "react-router-dom";


const Navbar = () => {
    const navLinks = [
      { label: "Home", path: "/" },
      { label: "Library", path: "/library" },
      { label: "Settings", path: "/settings" },
    ];
  
    return (
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "primary.main",
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensures it stays above other elements
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Hamburger Icon for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
  
          {/* Nav Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                sx={{ color: "white", textTransform: "none" }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;