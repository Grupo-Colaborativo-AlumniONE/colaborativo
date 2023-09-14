import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import theme from "../Theme";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../../assets/Images/logo.svg";
import { AppBar, Drawer, DrawerHeader, sidebarItems } from "./Sidebar";
import { Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const SidebarMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* To show the appbar */}
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.title,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ width: "100%" }}
          >
            {/* To Show the element that we selected */}
            {selectedItem || "Bienvenido"}
          </Typography>
          <NotificationsActiveIcon sx={{ marginRight: "10px" }} />
          {/*To show the avatar depending of the image that the user have*/}
          <Avatar
            alt="Mujer"
            sx={{ marginRight: "5px" }}
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          />
        </Toolbar>
      </AppBar>
      {/* To show the sidebar */}
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.drawer.main,
            color: theme.palette.text.title,
          },
        }}
      >
        {/* To show the header of the sidebar (Maybe a Logo here?) */}
        <DrawerHeader>
          <img
            src={logo}
            alt="Logo"
            style={{
              marginRight: "-15px",
              width: "80%",
              height: "100%",
              borderRadius: "50%",
            }}
          />
          <IconButton
            onClick={handleDrawerClose}
            style={{ marginTop: "-8rem" }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon
                sx={{
                  color: theme.palette.text.title,
                }}
              />
            ) : (
              <ChevronLeftIcon
                sx={{
                  color: theme.palette.text.title,
                }}
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* To show the list of items */}
        <List>
          {sidebarItems.map((item, index) => (
            <ListItemButton
              component={Link}
              to={item.link}
              key={index}
              onClick={() => handleItemClick(item.text)}
            >
              <ListItemIcon
                sx={{
                  color: theme.palette.text.title,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
