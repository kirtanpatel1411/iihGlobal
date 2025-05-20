import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography, Button, Divider, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <Container
        maxWidth={isMobile ? "sm" : isTab ? "md" : "xl"}
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            width: "100%",
            p: isMobile ? 1 : 4,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              px: isMobile ? 0 : 2,
              py: isMobile ? 0 : 2,
            }}
          >
            <Grid>
              <Typography variant={isMobile ? "h4" : "h3"}>
                Contact Us
              </Typography>
            </Grid>

            <Grid>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                sx={{ lineHeight: 1.8 }}
              >
                Welcome to SkillBridge's Pricing Plan page, where we offer two
                comprehensive options to cater to your needs: Free and Pro. We
                believe in providing flexible and affordable pricing options for
                our services. Whether you're an individual looking to enhance
                your skills or a business seeking professional development
                solutions, we have a plan that suits you. Explore our pricing
                options below and choose the one that best fits your
                requirements.
              </Typography>
            </Grid>
          </Grid>

          <Divider
            color={theme.palette.fontcolor.main}
            sx={{ width: "100%", height: 1 }}
          />
          <Grid
            container
            spacing={3}
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "flex-start",
                borderRadius: 3,
                width: "100%",
                backgroundColor: theme.palette.background.main,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  gap: isMobile ? 1 : 4,
                  width: isMobile ? "100%" : "70%",
                  height: "auto",
                  padding: isMobile ? 2 : 5,
                }}
              >
                <Grid
                  container
                  spacing={4}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    sx={{
                      width: isMobile ? "100%" : "40%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      mb={1}
                      color={theme.palette.fontcolor.main}
                    >
                      First Name
                    </Typography>
                    <TextField
                      placeholder="Enter First Name"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid
                    sx={{
                      width: isMobile ? "100%" : "40%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      mb={1}
                      color={theme.palette.fontcolor.main}
                    >
                      Last Name
                    </Typography>
                    <TextField
                      placeholder="Enter Last Name"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    sx={{
                      width: isMobile ? "100%" : "40%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      mb={1}
                      color={theme.palette.fontcolor.main}
                    >
                      Email
                    </Typography>
                    <TextField
                      placeholder="Enter your Email"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid
                    
                    sx={{
                      width: isMobile ? "100%" : "40%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      mb={1}
                      color={theme.palette.fontcolor.main}
                    >
                      Phone
                    </Typography>
                    <TextField
                      placeholder="Enter Phone Number"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    sx={{
                      width: isMobile ? "100%" : "84%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      mb={1}
                      color={theme.palette.fontcolor.main}
                    >
                      Subject
                    </Typography>
                    <TextField
                      placeholder="Enter your Subject"
                      fullWidth
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    sx={{
                      width: isMobile ? "100%" : "84%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      mb={1}
                      color={theme.palette.fontcolor.main}
                    >
                      Message
                    </Typography>
                    <TextField
                      placeholder="Enter your Message here..."
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    textAlign="center"
                    sx={{
                      width: isMobile ? "100%" : "40%",
                    }}
                  >
                    <Button
                      className="orange"
                      variant="contained"
                      sx={{
                        width: "100%",
                        borderRadius: 2,
                        paddingX: 4,
                        paddingY: 1.2,
                        textTransform: "none",
                      }}
                    >
                      Send Your Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  width: isMobile ? "100%" : "30%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    p: isMobile ? 5 : "",
                    backgroundColor: theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MailIcon />
                  <Typography variant="body1">
                    support@skillbridge.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    p: isMobile ? 5 : "",
                    backgroundColor: theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon />
                  <Typography variant="body1">9714022044</Typography>
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    p: isMobile ? 5 : "",
                    backgroundColor: theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PlaceIcon />
                  <Typography variant="body1">
                    Some Where in the World
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    height: "20%",
                    p: isMobile ? 5 : "",
                    backgroundColor: theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid container spacing={2}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                  </Grid>
                  <Typography variant="body1">Social Profiles</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
