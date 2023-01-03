   {/* <Grid Container display={'flex'} sx={{marginTop:'40px'}}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} > <img src={Picture} alt="Currupted" width={300} height={300} /></Grid>
          <Grid item xs={4}></Grid>
        </Grid>
          <Grid Container display={'flex'} sx={{marginTop:'40px'}}>
          <Grid item xs={3.5}></Grid>
        <Grid item xs={4.5} ><Typography variant='p' component='p' >Logging in.../Verifying.../Loading Data.../Welcome Yusuf</Typography> </Grid>
        <Grid item xs={4}></Grid> */}
        {/* </Grid> */}



        import React, { useState, useEffect } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Divider,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FavoriteBorder from '@material-ui/icons/RadioButtonUncheckedOutlined';
import Favorite from '@material-ui/icons/RadioButtonCheckedOutlined';
import {
  loginUserQuery,
  getUserQuery,
} from '../../../libs/graphql/hooks/query';
import store from '../../../redux/store';
import { UpdateUrl } from '../../utils/updateurl';
import animation from '../../../assets/images/animationLoading.gif';

import connecttext from '../../../assets/images/intelyConnectText.png';
import useStyles from '../../../styling/jss';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const classes = useStyles()();
  const updateurl = UpdateUrl();
  const history = useHistory();
  const updateurlfn = (val) => {
    updateurl.showConfirmation({ Url: val });
  };
  const [email, setemail] = useState('');
  const [remember, setremember] = useState(false);
  const [count, setcount] = useState(0);
  const startcount = () => {
    let seconds = 0;
    const countdown = setInterval(function () {
      seconds++;
      setcount(seconds);
      if (seconds >= 100) {
        clearInterval(countdown);
        history.push('/dashboard');
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
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [handleLogin, { loading, data }] = loginUserQuery();
  const [handleData, { data: userData }] = getUserQuery({});
  const login = () => {
    handleLogin({
      variables: {
        email: email.toLowerCase(),
        password: values.password,
      },
    });
  };
  useEffect(() => {
    if (userData) {
      store.dispatch({
        type: 'UPDATE_USERDATA',
        payload: {
          data: userData.at_user_users[0],
        },
      });
    }
  }, [userData]);
  useEffect(() => {
    if (data) {
      if (data.loginUser) {
        store.dispatch({
          type: 'UPDATE_SNACK',
          payload: {
            snackbar: true,
            message: 'Login Successful',
            type: 'success',
          },
        });
        handleData({ variables: { email: email.toLowerCase() } });
        remember ? localStorage.setItem('remember', remember) : null;
        sessionStorage.setItem('activeSession', 'true');
        localStorage.setItem('emailid', email.toLowerCase());
        localStorage.setItem('sessionstatus', 'true');
        startcount();
        // updateurlfn('/dashboard');
      }
    } else if (data === null) {
      // console.log(errors);
      store.dispatch({
        type: 'UPDATE_SNACK',
        payload: {
          snackbar: true,
          message: 'Email Address/Password is invalid',
          type: 'error',
        },
      });
    }
  }, [loading]);

  const enterfn = (e) => {
    if (e.charCode === 13) {
      login();
    }
  };
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
      <CssBaseline />
      {count <= 0 ? (
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            classes={{ root: classes.headertext }}
          >
            Welcome to intelyConnect
          </Typography>
          <form className={classes.form}>
            <Typography classes={{ root: classes.logintypotext }}>
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="Your Email Address"
              inputProps={{ maxLength: 256 }}
              classes={{ root: classes.logintextfield }}
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onKeyPress={(e) => enterfn(e)}
            />
            <Typography classes={{ root: classes.logintypotext }}>
              Password
            </Typography>
            <OutlinedInput
              fullWidth
              required
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              placeholder="Your Password"
              onKeyPress={(e) => enterfn(e)}
              onChange={handleChange('password')}
              className={classes.logintextfield}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />

            <Button
              disabled={!(email !== '' && values.password !== '') || loading}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.loginsubmit}
              onClick={login}
            >
              Login
            </Button>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedH"
                />
              }
              value={remember}
              onChange={(e) => setremember(e.target.checked)}
              label="Remember Me"
              classes={{ root: classes.loginremembertext }}
            />
            <Divider classes={{ root: classes.logindivider }} />
            <Grid container>
              <Grid item xs>
                <Typography classes={{ root: classes.bottomtext }}>
                  Forgot password?&nbsp;
                  <Link variant="body2" onClick={() => updateurlfn('/forgot')}>
                    Click Here
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography classes={{ root: classes.bottomtext }}>
                  Don't Have An Account? &nbsp;
                  <Link onClick={() => updateurlfn('/signup')} variant="body2">
                    Sign Up Here
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      ) : count < 17 ? (
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
            {store.getState().userdata.data.firstname.charAt(0).toUpperCase() +
              store.getState().userdata.data.firstname.slice(1)}{' '}
            {store.getState().userdata.data.lastname}!
          </Typography>
        </div>
      )
      }
    </Container>
  );
}