import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";



const pages = ["Home", "About", "Gridcomp", "realproject"];
const Appbar = (props) => {
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav("");
  };
  const [anchorElNav, setAnchorElNav] = useState("");
  // console.log("login ", localStorage.getItem("token"));
  // const connection = history.location.pathname;
// const Token = localStorage.getItem("token");


// useEffect(() => {
//   if(localStorage.getItem("token")){
//     setItems(true);
//     console.log("login useEffect", items);
//   }
// }, [items])

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Yusuf Soft
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Yusuf
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {props.items && (
                <>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    component={Link}
                    to="/"
                  >
                    Home
                  </Button>

                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    component={Link}
                    to="/profile"
                  >
                    Profile
                  </Button>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    component={Link}
                    to="/Friends"
                  >
                    Friends
                  </Button>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    component={Link}
                    to="/about"
                  >
                    About
                  </Button>
                  {/* <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    component={Link}
                    to="/Front_Page_Project"
                  >
                    Front page project
                  </Button> */}
                </>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {props.items && (
                <Button
                  onClick={() => {
                    localStorage.clear();
                    props.setItems(false);
                  }}
                  variant="text"
                  color="inherit"
                  endIcon={<LogoutIcon />}
                  component={Link}
                  to="/"
                >
                  Logout
                </Button>
              )} 
              {!props.items && (
                <Button
                  variant="text"
                  color="inherit"
                  startIcon={<LoginIcon />}
                  component={Link}
                  to="/Login-Signup"
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Appbar;
