import React, {useEffect} from "react";
import yusuf from "./yusuf.png";
import ProfilePic from "./profile-pic.JPG";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  Grid,
  InputLabel,
  TextField,
  Tooltip,
} from "@mui/material";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/Login-Signup")
    }
  }, [navigate])
 
  return (
    <>
      <Grid container>
        <Grid item xs={1.5}>
          <Tooltip title="Profile picture">
            <Avatar
              sx={{
                alignItems: "center",
                margin: 2,
                width: "100px",
                height: "100px",
                border: "4px solid red",
              }}
              src={yusuf}
              alt="Currupted"
            />
          </Tooltip>
        </Grid>
        <Grid item xs={10.5}>
          <Typography variant="h5" sx={{ marginTop: 3 }}>
            &#9989; Mohammed Yusuf
          </Typography>
          <br />
          <Typography variant="p" sx={{ color: "gray" }}>
            Working in Oxytech Company About 5 Years
          </Typography>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid item xs={12}>
          <span>
            <KeyboardArrowRight />
            &#128190; <dfn>Update</dfn> details
          </span>
        </Grid>

        <Grid item xs={12}>
          <KeyboardArrowRight />
          &#128221; <dfn>Edit</dfn> Education Details
        </Grid>

        <Grid item xs={12}>
          <KeyboardArrowRight />
          &#128188; Experience
        </Grid>

        <Grid item xs={12}>
          <KeyboardArrowRight />
          &#129333; Position
        </Grid>

        <Grid item xs={12}>
          <KeyboardArrowRight />
          &#128176; Salary
        </Grid>
      </Grid>
      <br />
      <hr />
      <br />

      <Grid container sx={{ display: "flex" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <InputLabel sx={{ fontSize: "35px", margin: 1 }}>
            Type your post:
          </InputLabel>
        </Grid>

        <Grid item xs={2}>
          <Tooltip title='Type your comments here'>
          <TextField placeholder="Post here..." />
          </Tooltip>
        </Grid>
        <Grid item xs={2.5}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              height: "55px",
              width: "100px",
              marginLeft: "20px",
              fontSize: "25px",
            }}
          >
            Post
          </Button>
        </Grid>
        <Grid item xs={2.5}></Grid>

        </Grid>
        
        <Grid container sx={{ display: "flex" }}>
        <Grid item xs={1.5}>
          <Avatar
            sx={{
              alignItems: "center",
              marginLeft: 6,
              marginRight: 0,
              marginTop: 2,
              marginBottom: 2,
              width: "80px",
              height: "80px",
              border: "3px solid green",
            }}
            src={yusuf}
            alt="Currupted"
          />
        </Grid>
        <Grid item xs={10.5}>
          <Typography variant="h6" sx={{ marginTop: 3 }}>
            &#9989; Mohammed Yunus
          </Typography>
          <br />
          <Typography variant="p" sx={{ color: "gray" }}>
            5 hours ago
          </Typography>
        </Grid>
        <hr />

        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minus, similique quas vel temporibus dignissimos iure, voluptas
            expedita cum explicabo sequi modi! Officiis odio dolorum dolore
            suscipit laborum reprehenderit quisquam.
          </Typography>
        </Grid>
        <Grid item xs={1.5}></Grid>
        </Grid>
        <Grid container sx={{ display: "flex" }}>
        <Grid item xs={1.5}>
          <Avatar
            sx={{
              alignItems: "center",
              marginLeft: 6,
              marginRight: 0,
              marginTop: 2,
              marginBottom: 2,
              width: "80px",
              height: "80px",
              border: "3px solid green",
            }}
            src={ProfilePic}
            alt="Currupted"
          />
        </Grid>
        <Grid item xs={10.5}>
          <Typography variant="h6" sx={{ marginTop: 3 }}>
            &#9989; Mohammed Yusuf
          </Typography>
          <br />
          <Typography variant="p" sx={{ color: "gray" }}>
            7 hours ago
          </Typography>
        </Grid>
        <hr />

        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minus, similique quas vel temporibus dignissimos iure, voluptas
            expedita cum explicabo sequi modi! Officiis odio dolorum dolore
            suscipit laborum reprehenderit quisquam.
          </Typography>
        </Grid>
        <Grid item xs={1.5}></Grid>
        <br />
      </Grid>
    </>
  );
};

export default Profile;
