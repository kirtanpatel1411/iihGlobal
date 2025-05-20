import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Typography, Button, Divider, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses, selectCourse } from "../redux/CoursesSlice";
import { useParams } from "react-router";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

function CoursesShow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));
  const Course = useSelector((state) => state.Courses.SelectedCourse);
  const Allcourses = useSelector((state) => state.Courses.Courses.Courses);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!Allcourses) {
      dispatch(fetchCourses());
    }
    if (Allcourses && !Course) {
      const SelectedCourse = Allcourses.find(
        (course) => course.id === parseInt(id)
      );
      if (SelectedCourse) {
        dispatch(selectCourse(SelectedCourse));
      }
    }
  }, [Allcourses, id, dispatch, Course]);

  return (
    <>
      <Header />
      <Container
        maxWidth={isMobile ? "sm" : isTab ? "md" : "xl"}
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        {Course ? (
          <Grid
            key={Course.id}
            container
            spacing={5}
            sx={{
              width: "100%",
              p: isMobile ? 1 : 4,
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                flexDirection: "column",

                justifyContent: "space-between",
                px: isMobile ? "" : 2,
                py: isMobile ? "" : 2,
              }}
            >
              <Grid>
                <Typography variant={isMobile ? "h4" : "h3"}>
                  {Course.coursname}
                </Typography>
              </Grid>

              <Grid>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  sx={{ lineHeight: 1.8 }}
                >
                  {Course.description}
                </Typography>
              </Grid>
            </Grid>

            <Divider
              color={theme.palette.fontcolor.main}
              sx={{ width: "100%", height: 1 }}
            />

            <Grid
              container
              spacing={4}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{
                  width: isMobile ? "100%" : "90%",
                  height: isMobile ? "200px" : "700px",
                }}
              >
                <img
                  src={Course.img2}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                ml: isMobile ? "" : 10,
                flexDirection: "row",
              }}
            >
              {/**BOX 1 */}

              {Course.number.map((topic) => (
                <Box
                  key={topic.id}
                  sx={{
                    width: "600px",
                    height: "700px",
                    backgroundColor: theme.palette.background.main,
                    p: isMobile ? 1 : 4,
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      mb: isMobile ? 0 : 4,
                    }}
                  >
                    <Grid
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Typography
                        variant={isMobile ? "h3" : "h1"}
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {topic.id}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography variant="h5">{topic.text}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={8}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100px",
                        border: `1px solid ${theme.palette.background.default}`,
                        borderRadius: "10px",
                        p: 2,
                      }}
                    >
                      <Grid
                        container
                        spacing={3}
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="h6">{topic.text}</Typography>
                          <Typography variant="body1">Lesson 01</Typography>
                        </Grid>
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Button className="white" variant="outlined">
                            <AccessTimeIcon />1 hour
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100px",
                        border: `1px solid ${theme.palette.background.default}`,
                        borderRadius: "10px",
                        p: 2,
                      }}
                    >
                      <Grid
                        container
                        spacing={3}
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="h6">
                            Understanding UI/UX Design Principles
                          </Typography>
                          <Typography variant="body1">Lesson 01</Typography>
                        </Grid>
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Button className="white" variant="outlined">
                            <AccessTimeIcon />1 hour
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100px",
                        border: `1px solid ${theme.palette.background.default}`,
                        borderRadius: "10px",
                        p: 2,
                      }}
                    >
                      <Grid
                        container
                        spacing={3}
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            variant="h6"
                            color={theme.palette.fontcolor.main}
                          >
                            Understanding UI/UX Design Principles
                          </Typography>
                          <Typography variant="body1">Lesson 01</Typography>
                        </Grid>
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                          }}
                        >
                          <Button className="white" variant="outlined">
                            <AccessTimeIcon />1 hour
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </Grid>
          </Grid>
        ) : (
          <div> Loading...</div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default CoursesShow;
