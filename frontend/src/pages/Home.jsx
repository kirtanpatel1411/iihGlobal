import { useNavigate } from "react-router";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Typography, Button, Paper } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import hero from "../assets/mainimg.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Profile from "../assets/myself.jpg";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { fetchCourses } from "../redux/CoursesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { Courses, loading, error } = useSelector((state) => state.Courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);
  const brands = [
    "Zapier",
    "Spotify",
    "Zoom",
    "amazon",
    "Adobe",
    "Notion",
    "NETFLIX",
  ];
  const PersonList = [
    {
      name: "Sarah L",
      about:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    },
    {
      name: "Jason M",
      about:
        "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    },
    {
      name: "Emily R",
      about:
        "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    },
    {
      name: "David K",
      about:
        "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    },
  ];

  const CardItem = [
    {
      id: "1",
      title: "Flexible Learning Schedule",
      about:
        "Fit your coursework around your existing commitments and obligations",
    },
    {
      id: "2",
      title: "Expert Instruction",
      about:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      id: "3",
      title: "Diverse Course Offerings",
      about:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      id: "4",
      title: "Updated Curriculum",
      about:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      id: "5",
      title: "Practical Projects and Assignments",
      about:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      id: "6",
      title: "Interactive Learning Environment",
      about:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];

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
          spacing={isMobile ? 5 : 4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: isMobile ? 0 : 2,
              textAlign: "center",
              mt: isMobile ? 3 : 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 4,
                py: isMobile ? 1 : 2,
                px: isMobile ? 1 : 4,
                mb: isMobile ? 2 : 4,
                backgroundColor: theme.palette.background.main,
                color: theme.palette.fontcolor.dark,
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: 2,
                  p: isMobile ? 1 : 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: isMobile ? 0 : 2,
                }}
              >
                <BoltIcon sx={{ color: theme.palette.fontcolor.dark }} />
              </Box>
              <Typography
                variant={isMobile ? "h6" : "h4"}
                sx={{ fontWeight: 600 }}
                color={theme.palette.fontcolor.dark}
              >
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Unlock
                </Box>{" "}
                Your Creative Potential
              </Typography>
            </Paper>

            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                color: theme.palette.fontcolor.main,
                fontWeight: 500,
                mb: 2,
              }}
            >
              with Online Design and Development Courses.
            </Typography>

            <Typography
              variant={isMobile ? "body2" : "body1"}
              sx={{
                mb: 5,
              }}
            >
              Learn from Industry Experts and Enhance Your Skills.
            </Typography>

            <Stack direction="row" spacing={3}>
              <Button
                onClick={() => {
                  navigate("/Courses");
                }}
                className="orange"
                variant="contained"
                sx={{
                  textTransform: "none",
                }}
              >
                Explore Courses
              </Button>
              <Button
                onClick={() => {
                  navigate("/Pricing");
                }}
                className="white"
                variant="outlined"
                size="large"
                sx={{
                  textTransform: "none",
                }}
              >
                View Pricing
              </Button>
            </Stack>
          </Box>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              height: "70px",
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",

              alignItems: "center",
              backgroundColor: theme.palette.background.main,
            }}
          >
            {(isMobile ? brands.slice(0, 3) : brands).map((i, index) => (
              <Box
                sx={{
                  width: "140px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {i}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Grid container spacing={5}>
            <Box
              sx={{
                width: isMobile ? "400px" : "1400px",
                height: isMobile ? "200px" : "700px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 5,
                }}
                src={hero}
                alt=""
              />
            </Box>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid>
              <Typography variant={isMobile ? "h5" : "h3"}>Benefits</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
            <Grid>
              <Button className="orange" variant="contained">
                View More
              </Button>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
              }}
            >
              {CardItem.map((item) => {
                return (
                  <Grid
                    container
                    key={item.id}
                    sx={{
                      width: isMobile ? "100%" : isTab ? "48%" : "32%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Grid>
                      <Box
                        size={4}
                        sx={{
                          width: "100%",
                          height: isMobile ? "300px" : "400px",
                          padding: "20px",
                          borderRadius: 3,
                          backgroundColor: theme.palette.background.main,
                          position: "relative",
                        }}
                      >
                        <Grid>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "end",
                            }}
                            variant={isMobile ? "h3" : "h1"}
                          >
                            {item.id}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography variant={isMobile ? "h5" : "h4"}>
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography variant={isMobile ? "body2" : "body1"}>
                            {item.about}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Button
                            className="Gray"
                            variant="outlined"
                            sx={{
                              position: "absolute",
                              bottom: 20,
                              right: 20,
                              padding: isMobile ? 1 : 3,
                              borderRadius: 3,
                            }}
                          >
                            {" "}
                            <ArrowOutwardIcon />{" "}
                          </Button>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid>
              <Typography variant={isMobile ? "h5" : "h3"}>
                Our Courses
              </Typography>
              <Typography variant={isMobile ? "body2" : "body1"}>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
            <Grid>
              <Button
                className="orange"
                onClick={() => {
                  navigate("/Courses");
                  window.scrollTo(0, 0);
                }}
                variant="contained"
              >
                View All
              </Button>
            </Grid>
            <Grid
              container
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
              }}
            >
              {Courses.map((item) => {
                return (
                  <Grid
                    container
                    key={item.id}
                    sx={{
                      width: isMobile ? "auto" : "650px",
                      height: isMobile ? "auto" : "650px",
                    }}
                  >
                    <Grid
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Card
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 2,
                          padding: isMobile ? "10px" : "40px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <CardMedia
                          sx={{ height: isMobile ? 150 : 270 }}
                          image={item.img1}
                          title="green iguana"
                        />
                        <Grid
                          container
                          spacing={2}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: 2,
                          }}
                        >
                          <Grid>
                            <Chip
                              sx={{
                                borderRadius: 2,
                              }}
                              label={item.week}
                              variant="outlined"
                            />
                            <Chip
                              sx={{
                                borderRadius: 2,
                              }}
                              label={item.level}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid>
                            <Typography gutterBottom variant="h6">
                              {item.name}
                            </Typography>
                          </Grid>
                        </Grid>
                        <CardContent>
                          <Typography
                            variant={isMobile ? "h6" : "h5"}
                            color={theme.palette.fontcolor.main}
                          >
                            {item.coursname}
                          </Typography>
                          <Typography variant={isMobile ? "body2" : "body1"}>
                            {item.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            className="Gray"
                            variant="outlined"
                            sx={{
                              width: "100%",
                              p: isMobile ? 1 : 2,
                            }}
                          >
                            Get it Now
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid>
              <Typography variant={isMobile ? "h5" : "h3"}>
                Our Testimonials
              </Typography>
              <Typography variant={isMobile ? "body2" : "body1"}>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
            <Grid>
              <Button className="orange" variant="contained">
                View More
              </Button>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {PersonList.map((item) => {
                return (
                  <Grid
                    container
                    key={item.id}
                    sx={{
                      width: isMobile ? "auto" : "650px",
                      height: isMobile ? "auto" : "250px",
                    }}
                  >
                    <Grid
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Card
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 2,
                          padding: isMobile ? "10px" : "20px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Grid
                            container
                            spacing={2}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid>
                              <Typography variant={isMobile ? "body2" : "h6"}>
                                {item.about}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Divider />
                        <Box>
                          <Grid
                            container
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid>
                                <Avatar
                                  alt="Remy Sharp"
                                  src={Profile}
                                  sx={{
                                    width: isMobile ? 30 : 60,
                                    height: isMobile ? 30 : 60,
                                    borderRadius: 1,
                                  }}
                                />
                              </Grid>
                              <Grid
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Typography variant={isMobile ? "body2" : "h6"}>
                                  {item.name}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid>
                              <Button
                                variant="outlined"
                                className="Gray"
                                sx={{
                                  width: "100%",
                                  fontSize: isMobile ? 10 : 14,
                                }}
                              >
                                Read All Story
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              width: "90%",
            }}
          >
            <Grid>
              <Typography variant={isMobile ? "h5" : "h3"}>
                Our Pricing
              </Typography>
              <Typography variant={isMobile ? "body2" : "body1"}>
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Typography>
            </Grid>
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
                display: "flex",
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
              width: "90%",
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
                width: isMobile ? "100%" : isTab ? "100%" : "50%",
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
                width: isMobile ? "100%" : isTab ? "100%" : "40%",
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
                    Are the courses self-paced or do they have specific start
                    and end dates?
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
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
