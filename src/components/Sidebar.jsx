import React, {useState} from "react";
import { Drawer, List, ListItem, IconButton, Switch, Divider, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/material/Menu";
import { useTheme } from "./ThemeContext";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const {isDarkMode, toggleTheme} = useTheme();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return(
        <div>
            {/*Hamburger Menu Button */}
            <IconButton onClick={toggleDrawer}>
                <MenuIcon />
            </IconButton>

            {/* Sidebar Drawer */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <div style={{ width: 250, padding: 20}}>
                    <List>
                        <ListItem button component={Link} to='/'>
                            <ListItemText primary='Home' />
                        </ListItem>

                        <Divider />

                        {/* Light/Dark Mode Toggle */}
                        <ListItem>
                            <ListItemText primary='Dark Mode' />
                            <Switch
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                inputProps={{'aria-label': 'Toggle dark mode'}}
                            />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Sidebar;