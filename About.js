import React from 'react';
import {InputLabel, Container, Button, Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  lab:{
    fontFamily:'monospace !important',
    fontWeight:'bold !important',
  color:'black !important',
  margin:'35px 0 5px 0 !important',
  fontSize:'25px !important',
 
  
  },
  
  pass:{
    fontFamily:'monospace !important',
    fontWeight:'bold !important',
  color:'black !important',
  margin:'35px 0 5px 0 !important',
  fontSize:'25px !important',
 
  },
  btn:{
    fontFamily:'monospace !important',
    fontWeight:'bold !important',
  margin:'25px 0 0 0 !important',
  fontSize:'25px !important',
 
  },
  cont:{
    textAlign:'center',
    margin:'0 40px',
  
  },
inp:{
  width:'40vw'
},
heading:{
  color:'white',
  fontFamily:'inherit',
  fontWeight:'bolder',
  backgroundColor:'blueviolet',
  width:'50%',
  marginLeft:'25%',
  marginTop:'1%',
  borderRadius:'15px'
}
})

const About = () => {
  const classes = useStyles()
  return (
    <>
    <Container  className={classes.cont}>
      <Typography variant='h2' className={classes.heading}>
        Facebook
      </Typography>
      
<InputLabel  className={classes.lab} >
Username:
</InputLabel>
<TextField
label="Username"
className={classes.inp}
/>
<InputLabel  className={classes.pass} >
Password:
</InputLabel>
<TextField
label="Password"
className={classes.inp}
/> <br />
<Button
  variant="contained" 
  type="submit"
  className={classes.btn}
>
  Submit
  </Button>
    </Container>
    </>
  )
};

export default About;
