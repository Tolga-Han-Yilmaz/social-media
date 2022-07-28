import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { logout } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { success, wrong } from "../helper/Toasts";
import { setLogout } from "../features/auth";
import { setOpen } from "../features/dialog";
import AddPost from "./AddPost";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = async () => {
    await logout(navigate, success);
    dispatch(setLogout());
  };

  const handleAddPost = () => {
    user || wrong("Please login");
    dispatch(setOpen(true));
    setAnchorElNav(null);
  };
  const randomUser = Math.floor(Math.random() * 100);
  return (
    <>
      <Container
        sx={{
          background: "info",
          height: "100vh",
          display: { md: "flex", xs: "none" },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "fixed",
            marginTop: "1rem",
            padding: "3rem 0",
            gap: 5,
            borderRight: "1px solid #424242",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://github.com/Tolga-Han-Yilmaz"
            target="_blank_"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#424242",
              textDecoration: "inherit",
            }}
          >
            THY
          </Typography>
          <Button
            title="Home"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "#424242", display: "block" }}
          >
            <HomeIcon onClick={() => navigate("/")} />
          </Button>
          <Button
            title="Your posts"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "#424242", display: "block" }}
          >
            <AutoStoriesIcon />
          </Button>
          <Button
            title="Post add"
            onClick={handleAddPost}
            sx={{ my: 2, color: "#424242", display: "block" }}
          >
            <PostAddIcon />
          </Button>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src={
                  user &&
                  `https://avatars.dicebear.com/v2/avataaars/${randomUser}.svg`
                }
              />
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
            {!user ? (
              <>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogin}>
                    Login
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleRegister}>
                    Register
                  </Typography>
                </MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={handleLogout}>
                  Logout
                </Typography>
              </MenuItem>
            )}
          </Menu>
        </Box>
      </Container>

      <AppBar sx={{ display: { xs: "flex", md: "none" }, background: "white" }}>
        <Container maxWidth="lg" position="fixed">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="https://github.com/Tolga-Han-Yilmaz"
              target="_blank_"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#424242",
                textDecoration: "none",
              }}
            >
              THY
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#424242" }} />
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
                  display: { xs: "flex", sm: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Your posts</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={handleAddPost}>
                    Add post
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="https://github.com/Tolga-Han-Yilmaz"
              target="_blank_"
              sx={{
                mr: 2,
                display: { xs: "flex", sm: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#424242",
                textDecoration: "none",
              }}
            >
              THY
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                title="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#424242", display: "block" }}
              >
                <HomeIcon onClick={() => navigate("/")} />
              </Button>
              <Button
                title="Your posts"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#424242", display: "block" }}
              >
                <AutoStoriesIcon />
              </Button>
              <Button
                title="Post add"
                onClick={handleAddPost}
                sx={{ my: 2, color: "#424242", display: "block" }}
              >
                <PostAddIcon />
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      user &&
                      `https://avatars.dicebear.com/v2/avataaars/${randomUser}.svg`
                    }
                  />
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
                {!user ? (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLogin}>
                        Login
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleRegister}>
                        Register
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={handleLogout}>
                      Logout
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        {user && <AddPost />}
      </AppBar>
    </>
  );
};
export default Navbar;
