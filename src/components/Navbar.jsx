import React, { useEffect, useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import CommitIcon from "@mui/icons-material/Commit";
import { useParams, useNavigate, Link } from "react-router-dom";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import Avatar from "@mui/material/Avatar";
const settings = ["Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [nickName, setNickName] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleOpenChangeProfile = () => {
    setOpenChangeProfile(true);
  };

  const handleCloseChangeProfile = () => {
    setOpenChangeProfile(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {};

  const handleMenuItemClick = (setting) => {
    if (setting === "Logout") {
      handleLogout();
    } else if (setting === "Profile") {
      handleOpenChangeProfile();
    }
    handleCloseUserMenu();
  };

  return (
    <div className="top">
      <AppBar
        position="fixed"
        sx={{
          alignItems: "center",
          top: showNavbar ? "0" : "-64px",
          transition: "top 0.3s",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to={`/dashboard`}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                textDecoration: "none",
                color: "#fff",
              }}
            >
              QUEUE
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={`/dashboard`}
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              QUEUE
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Join Queue">
                <IconButton sx={{ p: 0 }}>
                  <CommitIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton component={Link} to={"orders"}>
                  <Badge badgeContent={4} color="error">
                    <CircleNotificationsIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Account settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={nickName}
                    sx={{ width: 27, height: 27, bgcolor: "#6439ff" }}
                  >
                    {nickName.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleMenuItemClick(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
