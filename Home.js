import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Button, Container, Input } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
// import useLocalStorage from "./useLocalStorage";
import './Home.css';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
  head: {
    fontFamily: "monospace !important",
    fontWeight: "bold !important",
    border: "4px solid green !important",
    borderRadius: "10px !important",
    textAlign: "center !important",
    width: "70%",
    justifyContent: "center",
    display: "flex",
    marginLeft: "15%",
    backgroundColor: "chocolate",
    marginTop: "10px",
  },
  btn: {
    fontSize: "20px !important",
    background: "green !important",
    "&:hover": {
      background: "blue !important",
    },
    marginLeft: "44% !important",
  },
  para: {
    textAlign: "left",
    color: "green",
    paddingTop: "10px",
    paddingBottom: "10px",
    margin: "10px 100px",
  },
  input: {
    textAlign: "center !important",
    margin: "25px 400px",
    width: "30%",
    border: "2px solid black",
    borderRadius: "5px",
    padding: "3px 5px",
  },
  lebal: {
    textAlign: "center",
  },
  inputRender: {
    color: "brown",
    fontSize: "2rem",
  },
});

const Home = () => {
  const [input, setInput] = useState('');
  const [local, setLocal] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('posts')||'[]'<0){
    setLocal(JSON.parse(localStorage.getItem('posts') || '[]'))
    console.log('local',JSON.parse(localStorage.getItem('posts')) );}
    
  }, [JSON.parse(localStorage.getItem('posts'))]) 

  const inputChange = (events) => {
    setInput(events.target.value);
    // console.log("input change", input);
  };
  const submitHandler = (event) => {
   
    //reset of input field we use .reset()
    event.target.reset();

    //The preventDefault() method cancels the event if it is cancelable,
    // meaning that the default action that belongs to the event will not occur.
    event.preventDefault();

    //The JSON.parse() method parses a string and returns a JavaScript object.
    // The string has to be written in JSON format.
    // The JSON.parse() method can optionally transform the result with a function.
    let posts=JSON.parse(localStorage.getItem('posts') || '[]')
    console.log('parse value',JSON.parse(localStorage.getItem('posts') || '[]') )
    let post = {
      input:input
    }

    //The push() method adds new items to the end of an array.
    //The push() method changes the length of the array. 
    //The push() method returns the new length.
  posts.push(post)

  //The setItem() method sets the value of the specified Storage Object item. 
  //The setItem() method belongs to the Storage Object, 
  //which can be either a localStorage object or a sessionStorage object.
    localStorage.setItem('posts', JSON.stringify('posts') );
   
  };
const deleteHandler =()=>{
  setShow(true);
}
  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        color="TextSecondary"
        marginTop="3px"
        className={classes.head}
      >
        New Project on Material UI
      </Typography>
      <Typography className={classes.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        itaque iusto blanditiis vero obcaecati dolores numquam ratione quis,
        veritatis sed cupiditate voluptas. Repellat earum temporibus maiores?
        Adipisci sequi et ducimus.This project is created for practice purpose
        so we are used only Material UI components for Project.
      </Typography>
      <Typography variant="h3" component="h2" className={classes.lebal}>
        Let us your openions
      </Typography>
      <br />
      <form onSubmit={submitHandler}>
        <Input
          placeholder="Write here..."
          className={classes.input}
          onChange={inputChange}
          type={input}
          required
        ></Input>
        <br />

        <Button
          className={classes.btn}
          variant="contained"
          type="submit"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
        <div className={classes.inputRender}>
          <ol>
            {local.map((num, index)=>
              <li key={index} >{num.input}<Button onClick={(key=index)=>{deleteHandler(localStorage.removeItem(key))}} color="secondary" startIcon={<DeleteIcon />}>Delete</Button></li>
            )}
            
          </ol>
        </div>
      </form>
    </Container>
  );
};

export default Home;
