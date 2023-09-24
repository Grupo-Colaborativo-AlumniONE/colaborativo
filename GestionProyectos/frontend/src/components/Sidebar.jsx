import * as React from "react";
import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import theme from "./Theme";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PostAddIcon from '@mui/icons-material/PostAdd';
import logo from "../assets/Images/logo.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const sidebarItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    text: "Proyectos",
    icon: <ListAltIcon />,
    link: "/projects",
  },
  {
    text: "Kanban",
    icon: <ViewKanbanIcon />,
    link: "/kanban",
  },
  {
    text: "Calendario",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },
  {
    text: "Reportes",
    icon: <PostAddIcon />,
    link: "/Report",
  },
  {
    text: "Configuración",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];

const Sidebar = () => {
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
          <Typography variant="h6" noWrap component="div">
            {/* To Show the element that we selected */}
            {selectedItem || "Bienvenido"}
          </Typography>
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
        {/* To show the header of the sidebar (Maybe a Logo here) */}
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
          <IconButton onClick={handleDrawerClose} style={{marginTop: "-8rem"}}>
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

export default Sidebar;
