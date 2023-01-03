import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';

export default function Login() { 
  const [count, setcount] = useState(0);
  const startcount = () => {
    let seconds = 0;
    const navigate = useNavigate();
    const countdown = setInterval(function () {
      seconds++;
      setcount(seconds);
      if (seconds >= 100) {
        clearInterval(countdown);
        navigate("/profile");
      }
    }, 100);
  };
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  // const [animation, setanimation] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

// styling
const useStyles = makeStyles({

  
  bottomdiv: {
    textAlign: 'center',
    '& img:first-child': {
      height: '30vh',
    },
    '& img:last-child': {
      marginTop: '2rem',
      marginBottom: '3.5rem',
      height: 'auto',
    },
    '& .MuiTypography-root': {
      fontSize: '1.125rem',
      fontWeight: '400',
      color: '#fff',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
}
})

const classes = useStyles();

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        height: '-webkit-fill-available',
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        marginTop: count > 0 ? 0 : '4rem',
        padding: count > 0 ? 0 : '0 10px',
        justifyContent: count > 0 ? 'center' : null,
      }}
    >
    
      {count <= 0 ? (
        <div className={classes.paper}>
          </div>) : count < 17 ? (
        <div className={classes.bottomdiv}>
          <img src={animation} alt="img1 Icon" />

          <Typography>
            <img
              src={connecttext}
              style={{ width: '100%' }}
              alt="connecttext Icon"
            />
          </Typography>
          <Typography classes={{ root: classes.bottomload }}>
            Logging In...
          </Typography>
        </div>
      ) : count < 17 * 2 ? (
        <div className={classes.bottomdiv}>
          <img src={animation} alt="img2 Icon" />

          <Typography>
            <img
              src={connecttext}
              style={{ width: '100%' }}
              alt="connecttext Icon"
            />
          </Typography>
          <Typography classes={{ root: classes.bottomload }}>
            Verifying...
          </Typography>
        </div>
      ) : count < 17 * 3 ? (
        <div className={classes.bottomdiv}>
          <img src={animation} alt="img3 Icon" />

          <Typography>
            <img
              src={connecttext}
              style={{ width: '100%' }}
              alt="connecttext Icon"
            />
          </Typography>
          <Typography classes={{ root: classes.bottomload }}>
            Loading Data.{' '}
          </Typography>
        </div>
      ) : count < 17 * 4 ? (
        <div className={classes.bottomdiv}>
          <img src={animation} alt="img2 Icon" />

          <Typography>
            <img
              src={connecttext}
              style={{ width: '100%' }}
              alt="connecttext Icon"
            />
          </Typography>
          <Typography classes={{ root: classes.bottomload }}>
            Loading Data..{' '}
          </Typography>
        </div>
      ) : count < 17 * 5 ? (
        <div className={classes.bottomdiv}>
          <img src={animation} alt="img2 Icon" />

          <Typography>
            <img src={connecttext} style={{ width: '100%' }} alt="img2 Icon" />
          </Typography>
          <Typography classes={{ root: classes.bottomload }}>
            Loading Data...{' '}
          </Typography>
        </div>
      ) : (
        <div className={classes.bottomdiv} style={{ wordBreak: 'break-all' }}>
          <img src={animation} alt="img2 Icon" />

          <Typography>
            <img
              src={connecttext}
              style={{ width: '100%' }}
              alt="connecttext Icon"
            />
          </Typography>
          <Typography classes={{ root: classes.bottomload }}>
            Welcome{' '}
          </Typography>
        </div>
      )}
    </Container>
  );
}