import React from 'react'
import { Avatar} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@mui/styles";
import { useState } from 'react';


const useStyles = makeStyles({

    yusuf:{ 
           cursor:'pointer',
           alignItems:"center",
           marginLeft:"35%",
        // display:'flex',
        // justifyContent:'center',
           height:'100px',width:'100px',
           transition:'0.5s',
           overflow:'hidden',
         '&:hover': {
                width:'130px',
                height:'130px',
                marginLeft:"30%",
             },
    
    },   
    icons:{
      color:'red'
    },        
    icon:{
     color:'blue'
    },
  })
const ListItem = (props) => {
    const classes = useStyles()
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        margin:'3px',
        textAlign: 'center',
        background:'lightGreen',
         color: theme.palette.text.primary,
         width:'100%',
         flexWrap: 'nowrap !important','& .css-1iql8ba-MuiGrid-root':{flexWrap: 'nowrap'}
      }));
      const [value, setValue] = useState({backgroundColor:"red"});
  function handleClick(event) {
    if (event.target.value === value) {
      setValue(event.target.value);
    } else {
      setValue(event.target.value);
    }
  }
  return (
    <>
    <Item sx={{margin:'5px'}}>
<Paper sx={{ height: 200, width:'100%',padding:'10px 5px',overflow:'hidden'}} >
      <Avatar className={classes.yusuf} src={props.url}/>
      <br />
      <Typography variant="h5">{props.name}</Typography> 
     <Stack  direction="row"
  justifyContent="space-between"
  alignItems="flex-end">
     <IconButton onClick={handleClick} >
       <FavoriteIcon  value="a" className={classes.icons}/>
       </IconButton>
       <IconButton >
       <ShareIcon className={classes.icon}/>
       </IconButton>

</Stack>
</Paper>
</Item>
    </>
  )
}

export default ListItem