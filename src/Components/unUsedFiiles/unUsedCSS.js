loginsubmit: {
    marginTop: '1rem',
    backgroundColor: '#3A70D4',
    fontWeight: 700,
    fontSize: '1rem',
    textTransform: 'capitalize',
    '&.MuiButton-contained.Mui-disabled': {
      backgroundColor: '#bdbdbd',
      color: '#fff',
    },
  },
  headertext: {
    fontSize: '1.563rem',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    paddingBottom: '1rem',
    fontWeight: '600',
  },
  logintypotext: {
    fontSize: '1rem',
    fontWeight: '400',
  },
  logintextfield: {
    marginTop: 5,
    marginBottom: 15,

    '& :hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#3A70D4',
      },
    },
    '& .MuiInputBase-root': {
      color: '#fff',
      boderRadius: 10,
    },
    '& .MuiInputBase-input': {
      color: '#fff!important',
      '&:-webkit-autofill': {
        transition:
          'background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s',
        transitionDelay: 'background-color 50000s, color 50000s',
      },
    },
    '& .MuiInputBase-input:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#3A70D4!important',
      },
    },
    '& .MuiInputBase-root:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#3A70D4!important',
      },
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#828282',
    },
    '& .MuiOutlinedInput-input::placeholder': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-input': {
      padding: '15px 14px',
    },
    '& .MuiIconButton-root': {
      color: '#fff',
      position: 'absolute',
      right: 10,
      '& .MuiSvgIcon-root': {
        fontSize: '1.063rem',
      },
    },

    '& .MuiInputAdornment-positionEnd': {
      marginLeft: 0,
    },
    paddingRight: 0,
    position: 'relative',
  },
  loginremembertext: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    '& .MuiTypography-body1': { fontSize: '0.75rem', fontWeight: '400' },
    '& .MuiSvgIcon-root': {
      color: '#3A70D4',
      fontSize: '1.25rem',
    },
  },
  logindivider: {
    backgroundColor: '#828282',
    marginBottom: '1rem',
    height: 1.5,
  },
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
  },