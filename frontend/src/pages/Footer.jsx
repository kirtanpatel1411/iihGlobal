import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import logo from "../assets/Logo.png";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Container
        maxWidth={isMobile ? "sm" : isTab ? "md" : "xl"}
        sx={{
          backgroundColor: theme.palette.background.main,
          height: "auto",
          mt: 4,
          mb: isMobile ? 0 : 4,
        }}
      >
        <Grid
          container
          spacing={isMobile ? 1 : 2}
          sx={{
            padding: isMobile ? "10px" : "50px",
            display: "flex",
            gap: isMobile ? "30px" : "",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mt: "50px",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",

              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid>
              <img src={logo} alt="" />
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                {" "}
                <EmailIcon />
                bhimanikirtan7@gmail.com
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                <PhoneIcon />
                +91 9714022044
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                <RoomIcon /> surat
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid>
              <Typography
                variant="h5"
                fontWeight={isMobile ? "bold" : ""}
                color={theme.palette.fontcolor.dark}
              >
                Home
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                Benefits
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                Our Courses
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                {" "}
                Our Testimonials
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                {" "}
                Our FAQ
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid>
              <Typography
                variant="h5"
                fontWeight={isMobile ? "bold" : ""}
                color={theme.palette.fontcolor.dark}
              >
                About Us
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                {" "}
                Company
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                Achievements
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="body1" color={theme.palette.fontcolor.main}>
                {" "}
                Our Goals
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Grid>
              <Typography
                variant="h5"
                fontWeight={isMobile ? "bold" : ""}
                color={theme.palette.fontcolor.dark}
              >
                Social Profiles
              </Typography>
            </Grid>
            <Grid container>
              <Avatar
                sx={{
                  borderRadius: 2,
                  backgroundColor: theme.palette.background.default,
                  color: "#000",
                }}
              >
                <InstagramIcon />
              </Avatar>
              <Grid>
                <Avatar
                  sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.default,
                    color: "#000",
                  }}
                >
                  <TwitterIcon />
                </Avatar>
              </Grid>
              <Grid>
                <Avatar
                  sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.background.default,
                    color: "#000",
                  }}
                >
                  <LinkedInIcon />
                </Avatar>
              </Grid>
              <Grid></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          sx={{
            display: "flex",
            p: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" color={theme.palette.fontcolor.light}>
            © 2023 Skillbridge. All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
