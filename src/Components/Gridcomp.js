import {  Container, Grid, Typography } from '@mui/material';
import React,{useEffect} from 'react';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';


const Gridcomp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/Login-Signup")
    }
  }, [navigate])
  return (
  <Container >
    <Grid item xs={12} sx={{textAlign:"center",fontWeight:'bold'}}>
<Typography component='h3' variant='h2'>
  Friends
</Typography>
    </Grid>
      <Grid container padding={1} sx={{textAlign:"center"}} spacing={2}>
      
      <Grid item md={6} sm={12} lg={4} xs={12} >
<ListItem name={"Yusuf"} url={'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'}/>
      </Grid>
      
      <Grid item md={6} sm={12} lg={4} xs={12} >
      <ListItem name={"Tausif"} url={'https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg'}/>
       </Grid> 

       <Grid item md={6} sm={12} lg={4} xs={12} >
       <ListItem name={"Sonu"} url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZTtK6pHqjvMrFvkwyTP_WgXYLrSAdna_8w&usqp=CAU'}/>
       </Grid> 

       <Grid item md={6} sm={12} lg={4} xs={12}>
       <ListItem name={"Baby"} url={'https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg'}/>
      </Grid>

      <Grid item md={6} sm={12} lg={4} xs={12} >
      <ListItem name={"Haztar"} url={'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/4k-king-Latest-Best-Dp-Profile-Images-For-Instagram-hd-download.gif'}/>
       </Grid> 

       <Grid item md={6} sm={12} lg={4} xs={12} >
       <ListItem name={"Amma"} url={'https://www.vhv.rs/dpng/d/526-5264779_cool-pictures-for-your-profile-hd-png-download.png'}/>
       </Grid>
       </Grid>  
  </Container>)
};

export default Gridcomp;
