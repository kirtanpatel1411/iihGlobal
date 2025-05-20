import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Stack,
  IconButton,
  Drawer,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router";
import logo from "../assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const DesktopMenu = () => (
    <>
      <Stack direction="row" alignItems="center" gap={{ md: 3, lg: 4, xl: 2 }}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ width: 40, height: 40, borderRadius: 1 }}
        />
        {[
          { label: "Home", path: "/" },
          { label: "Courses", path: "/courses" },
          { label: "About Us", path: "/aboutUs" },
          { label: "Pricing", path: "/pricing" },
          { label: "Contact", path: "/contact" },
        ].map((item) => (
          <Button
            className="active ? 'active' : ''"
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            sx={{
              color:
                location.pathname === item.path
                  ? theme.palette.fontcolor.dark
                  : theme.palette.fontcolor.main,
              textTransform: "none",
              fontWeight: location.pathname === item.path ? "bold" : "normal",
              borderBottom:
                location.pathname === item.path
                  ? `2px solid ${theme.palette.primary.main}`
                  : "none",
              borderRadius: 0,
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>

      <Stack direction="row" alignItems="center" gap={{ md: 3, lg: 4, xl: 2 }}>
        <Button
          className="white"
          variant="outlined"
          onClick={() => {
            navigate("/SignUp");
          }}
        >
          Sign Up
        </Button>
        <Button
          className="orange"
          variant="contained"
          onClick={() => {
            navigate("/Login");
          }}
        >
          Login
        </Button>
      </Stack>
    </>
  );
  const MobileDrawer = () => (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "50%",
          backgroundColor: "background.default",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: 5,
          gap: 4,
          pt: 5,
        }}
      >
        {[
          { label: "Home", path: "/" },
          { label: "Courses", path: "/courses" },
          { label: "About Us", path: "/aboutUs" },
          { label: "Pricing", path: "/pricing" },
          { label: "Contact", path: "/contact" },
          { label: "Sign Up", path: "/SignUp" },
          { label: "Login", path: "/Login" },
        ].map((item) => (
          <Typography
            key={item.section}
            variant="body1"
            fontWeight={400}
            onClick={() => handleNavigation(item.path)}
            sx={{
              cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Box>
    </Drawer>
  );

  return (
    <Box  
    sx={{
      position : "sticky",
      top : 0 ,
      zIndex : 1000 ,
    }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
          borderRadius: "5px",
          p: 1,
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ mr: 1 }}>
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </Typography>
        <ArrowForwardIcon fontSize="small" />
      </Box>

      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile ? (
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ width: 40, height: 40, borderRadius: 1 }}
            />
          ) : (
            <></>
          )}
          {isMobile ? (
            <Box>
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                aria-label="menu"
              >
                <MenuIcon style={{ color: "#1B1B1B" }} />
              </IconButton>
            </Box>
          ) : (
            <DesktopMenu />
          )}
        </Toolbar>
      </AppBar>
      {isMobile && <MobileDrawer />}
    </Box>
  );
}
