import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import blogPng from "../assets/blok.png";
import googlePng from "../assets/google.png";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@material-ui/core/Paper";

import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";

const stylesFunc = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 68px)",
    "& .MuiPaper-root": {
      borderRadius: "10px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 20,
      maxWidth: "500px",
    },
    marginTop: 68,
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
    backgroundColor: "#046582",
  },
  header: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },

  googleImg: {
    width: 75,
    marginLeft: 10,
  },
  googleBtn: {
    backgroundColor: "white",
    fontWeight: "bold",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
      
    },
  },
  image: {
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    margin: theme.spacing(4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Register() {
  const registerStyles = stylesFunc();

  return (
    <Grid container component="main" className={registerStyles.root}>
      <CssBaseline />
      <Grid container justify="center" className={registerStyles.image}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid className={registerStyles.paper}>
            <Avatar className={registerStyles.avatar}>
              <img src={blogPng} style={{ width: 200 }} alt="candela" />
            </Avatar>
            <Typography
              className={registerStyles.header}
              component="h1"
              variant="h5"
            >
              -----REGISTER------
            </Typography>

            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={registerStyles.submit}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Register
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    // onClick={handleGoogleProvider}
                    className={registerStyles.googleBtn}
                  >
                    <img
                      src={googlePng}
                      alt="google"
                      className={registerStyles.googleImg}
                    />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Register;
