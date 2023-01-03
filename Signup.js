import React from 'react';
import { Button, CssBaseline, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as myLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  avatar: {
    height: '180px',
    width: '200px',
    marginTop: '15px',
    marginBottom: '0',
    textAlign: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '50px',
  },
  submit: {
    margin: '8px',
  },
  heading: {
    marginBottom: '15px',
    flexDirection: 'column',
    textAlign: 'center',
  },
  input: {
    textAlign: 'center',
    width: '395px',
  },

  intely: {
    color: '#537CE6',
  },
  education: {
    color: 'rgb(39, 189, 189)',
  },
});
function Signup() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');
  function handleClick(event) {
    if (event.target.value === value) {
      setValue('');
    } else {
      setValue(event.target.value);
    }
  }
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();

  //sign up event are fetched when clicked on button.
  const submitHandler = (event) => {
    event.preventDefault();
    let url;
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6kcdoNPuBebQUPc--0FlYx-YqlHVKXy0';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: values.amount,
        password: values.password,
        returnSecureToken: true,
      }),
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let message = 'Authentication Failed!';
            if (data && data.error && data.error.message) {
              message = data.error.message;
              // console.log("error ", message);
            }
            throw new Error(message);
          });
        }
      })
      .then((data) => {
        // console.log("Successful response", data);

        navigate('/Login-Signup');
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container className={classes.paper}>
        <Grid item xs={12} className={classes.heading}>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              marginTop: '2rem',
              border: '6px solid green',
              borderRadius: '15px',
              padding: '5px',
              backgroundColor: 'pink',
            }}
          >
            Signup Page
          </Typography>
        </Grid>
        <form className={classes.form}>
          <Grid container className={classes.paper} spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="outlined">
                <TextField
                  className={classes.input}
                  onChange={handleChange('amount')}
                  id="outlined-multiline-flexible"
                  fullWidth
                  label="Username"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container className={classes.paper} spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="outlined" sx={{ boxShadow: 'none' }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>

                <OutlinedInput
                  className={classes.input}
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            onClick={submitHandler}
            variant="contained"
            disableElevation
            fullWidth
          >
            Sign up
          </Button>
          <Radio
            checked={value === 'a'}
            onClick={handleClick}
            control={<Radio />}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'a' }}
            label="Remember Me"
            sx={{ marginBottom: '8px', marginTop: '8px' }}
          />
          Remember Me <hr />
          <Grid container spacing={2} sx={{ marginTop: '5px' }}>
            <Grid item xs={5.5}>
              <Typography sx={{ marginLeft: '0px', fontSize: '11px' }}>
                Forgot Password?{' '}
                <Link href="#" variant="body2">
                  Click Here
                </Link>{' '}
              </Typography>
            </Grid>
            <Grid item xs={6.5}>
              <Typography sx={{ marginLeft: '0px', fontSize: '11px' }}>
                Don't Have Account?
                <Link component={myLink} to="/Login-Signup" variant="body2">
                  Login Here
                </Link>{' '}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
export default Signup;
