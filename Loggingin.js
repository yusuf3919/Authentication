import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Picture from "./Picture.png";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
// import Countdown from 'react-countdown';
// styling
const useStyles = makeStyles({
  bottomdiv: {
    textAlign: "center",
    "& img:first-child": {
      height: "30vh",
    },
    "& img:last-child": {
      marginTop: "2rem",
      marginBottom: "3.5rem",
      height: "auto",
    },
    "& .MuiTypography-root": {
      fontSize: "1.125rem",
      fontWeight: "400",
      color: "#000",
      textAlign: "center",
      textTransform: "capitalize",
    },
  },
});
const Loggingin = () => {
  const [count, setcount] = useState(0);
  const navigate = useNavigate();
  const startCount = () => {
    let seconds = 0;

    const countdown = setInterval(function () {
      seconds++;
      setcount(seconds);
      if (seconds >= 100) {
        clearInterval(countdown);
        navigate("/profile");
      }
    }, 100);
  };
  useEffect(() => {
    startCount();
  }, []);

  const classes = useStyles();
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        height: "-webkit-fill-available",
        display: "flex",
        alignItems: "center",
        overflow: "auto",
        marginTop: count > 0 ? 0 : "4rem",
        padding: count > 0 ? 0 : "0 10px",
        justifyContent: count > 0 ? "center" : null,
      }}
    >
      {/* <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" }} /> */}

      {count <=17? (
        <div className={classes.bottomdiv}>
      <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" , width:'300px', height:'300px'}} />

          <Typography classes={{ root: classes.bottomload }}>
            Logging In...
          </Typography>
        </div>
      ) : count < 17 ? (
        <div className={classes.bottomdiv}>
      <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" , width:'300px', height:'300px'}} />

          <Typography classes={{ root: classes.bottomload }}>
            Verifying...
          </Typography>
        </div>
      ) : count < 17 * 2 ? (
        <div className={classes.bottomdiv}>
      <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" , width:'300px', height:'300px'}} />

          <Typography classes={{ root: classes.bottomload }}>
            Loading Data.{" "}
          </Typography>
        </div>
      ) : count < 17 * 3 ? (
        <div className={classes.bottomdiv}>
      <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" , width:'300px', height:'300px'}} />

          <Typography classes={{ root: classes.bottomload }}>
            Loading Data..{" "}
          </Typography>
        </div>
      ) : count < 17 * 4 ? (
        <div className={classes.bottomdiv}>
      <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" , width:'300px', height:'300px'}} />

          <Typography classes={{ root: classes.bottomload }}>
            Loading Data...{" "}
          </Typography>
        </div>
      ) : count < 17 * 5 ? (
        <div className={classes.bottomdiv}>
      <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" , width:'300px', height:'300px'}} />

          <Typography classes={{ root: classes.bottomload }}>
            Welcome Yusuf!{" "}
          </Typography>
        </div>
      ) : (<div className={classes.bottomdiv}>
      <img src={Picture} alt="img1 Icon" style={{ marginTop: "20px" , width:'300px', height:'300px'}} />

          <Typography classes={{ root: classes.bottomload }}>
            Welcome Yusuf!{" "}
          </Typography>
        </div>
      )}
    </Container>
  );
};
export default Loggingin;
