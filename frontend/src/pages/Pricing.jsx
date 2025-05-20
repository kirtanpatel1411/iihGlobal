import Header from "./Header";
import Footer from "./Footer";
import { Typography, Button, Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function Pricing() {
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
          spacing={5}
          container
          sx={{
            width: "100%",
            p: 4,
          }}
        >
          <Grid>
            <Typography variant={isMobile ? "h5" : "h3"}>
              Our Pricing
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </Typography>
          </Grid>
          <Divider
            color={theme.palette.fontcolor.main}
            sx={{ width: "100%", height: 1 }}
          />

          <Grid
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: theme.palette.background.main,
                p: isMobile ? 1 : 2,
                borderRadius: 2,
              }}
            >
              <Button
                className="Gray"
                variant="outlined"
                sx={{
                  borderRadius: 2,
                }}
              >
                Yearly
              </Button>
              <Button
                className="orange"
                variant="contained"
                sx={{
                  borderRadius: 2,
                }}
              >
                Monthly
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              width: "100%",
              justifyContent: "center",
              backgroundColor: theme.palette.background.main,
              pt: isMobile ? 0 : 8,
              pb: isMobile ? 0 : 8,
              borderRadius: 2,
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  width: isMobile ? "auto" : "570px",
                  height: "auto",
                  borderRadius: 2,
                  padding: isMobile ? "10px" : "20px",
                  display: "flex",
                  flexDirection: "column",

                  gap: isMobile ? "20px" : "30px",
                }}
              >
                <Grid
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    padding: isMobile ? "10px" : "20px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight: "bold",
                  }}
                >
                  Free Plan
                </Grid>
                <Grid
                  sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    fontSize: "50px",
                    fontWeight: "bold",
                  }}
                >
                  $0<span style={{ fontSize: "20px" }}>/month</span>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Available Features
                  </Typography>
                  {[
                    "Access to selected free courses",
                    "Limited course materials and resources",
                    "Basic community support",
                    "No certification upon completion",
                    "Ad-supported platform",
                    "Access to exclusive Pro Plan community forums",
                    "Early access to new courses and updates",
                  ].map((item, index) => (
                    <Stack direction="column" key={index}>
                      <Grid
                        sx={{
                          fontSize: isMobile ? "15px" : "20px",
                          width: "100%",
                          backgroundColor: theme.palette.background.main,
                          padding: isMobile ? "0" : "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          border: `1px solid ${theme.palette.background.default}`,
                          borderRadius: 2,
                        }}
                      >
                        <Checkbox disabled checked />
                        {item}
                      </Grid>
                    </Stack>
                  ))}
                </Grid>
                <Grid>
                  <Button
                    className="orange"
                    variant="contained"
                    sx={{
                      width: "100%",
                      height: "50px",
                    }}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Card>
              <Card
                sx={{
                  width: isMobile ? "auto" : "570px",
                  height: "auto",
                  borderRadius: 2,
                  padding: isMobile ? "10px" : "20px",
                  display: "flex",
                  flexDirection: "column",

                  gap: isMobile ? "20px" : "30px",
                }}
              >
                <Grid
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    padding: isMobile ? "10px" : "20px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: isMobile ? "18px" : "24px",
                    fontWeight: "bold",
                  }}
                >
                  Pro Plan
                </Grid>
                <Grid
                  sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    fontSize: "50px",
                    fontWeight: "bold",
                  }}
                >
                  $79<span style={{ fontSize: "20px" }}>/month</span>
                </Grid>

                <Grid
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    Available Features
                  </Typography>
                  {[
                    "Unlimited access to all courses",
                    "Unlimited course materials and resources",
                    "Priority support from instructors",
                    "Course completion certificates",
                    "Ad-free experience",
                    "Access to exclusive Pro Plan community forums",
                    "Early access to new courses and updates",
                  ].map((item, index) => (
                    <Stack direction="column" key={index}>
                      <Grid
                        sx={{
                          fontSize: isMobile ? "15px" : "20px",
                          width: "100%",
                          backgroundColor: theme.palette.background.main,
                          padding: isMobile ? "0" : "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          border: `1px solid ${theme.palette.background.default}`,
                          borderRadius: 2,
                        }}
                      >
                        <Checkbox disabled checked />
                        {item}
                      </Grid>
                    </Stack>
                  ))}
                </Grid>
                <Grid>
                  <Button
                    className="orange"
                    variant="contained"
                    sx={{
                      width: "100%",
                      height: "50px",
                    }}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            backgroundColor: theme.palette.background.main,
            borderRadius: 3,
            mb: 5,
          }}
        >
          <Grid
            sx={{
              width: isMobile ? "100%" : "50%",
              padding: isMobile ? "10px" : "50px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography variant={isMobile ? "h5" : "h2"}>
              Frequently Asked Questions
            </Typography>
            <Typography
              variant={isMobile ? "body2" : "h6"}
              color={theme.palette.fontcolor.light}
            >
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </Typography>
            <Button
              className="Gray"
              sx={{
                width: isMobile ? "50%" : "30%",
                padding: isMobile ? "10px" : "15px",
                border: `2px solid ${theme.palette.background.default}`,
              }}
              variant="outlined"
            >
              {" "}
              See All FAQ’s
            </Button>
          </Grid>
          <Card
            sx={{
              width: isMobile ? "100%" : "40%",
              height: "auto",
              padding: isMobile ? "0px" : "20px",
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "0px" : "20px",
              m: isMobile ? 0 : 5,
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h6">
                  Can I enroll in multiple courses at once?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h6">
                  Enrollment Process for Different Courses
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography variant="h6">
                  What kind of support can I expect from instructors?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h6">
                  Are the courses self-paced or do they have specific start and
                  end dates?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h6">
                  Are there any prerequisites for the courses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h6">
                  Can I download the course materials for offline access?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Pricing;
