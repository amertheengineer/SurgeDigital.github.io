import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { black } from 'ansi-colors';
import ColorButton from "../../misc/ColorButton";
import LazyLoad from "react-lazyload";
import ScrollAnimation from "react-animate-on-scroll";
const footerHeight = 300;
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  img1: {
    position: "absolute",
    bottom: 0,
    right: 0,
    maxHeight: `${footerHeight}px`,
    minHeight: "1%"
  },
  img2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    maxHeight: `${footerHeight}px`,
    minHeight: "1%"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00ff00",
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00ff00",
    color: "black",
    width: "50%",
    textAlign: "center",
  },
  shadow: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  header: {
    fontFamily: "Montserrat, 'Proza Libre', sans-serif",
    fontSize: "46px",
    fontWeight: "700"
  },
  subHeader: {
    fontFamily: "Montserrat, 'Proza Libre', sans-serif",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "0px"
  },
  button: {
    fontFamily: "Montserrat, 'Proza Libre', sans-serif",
    fontWeight: 700
  },
  ContactButton: {
    fontSize: "14px",
    padding: "14px 36px"
},
}));

export default function Contact(props) {
  const classes = useStyles();

  return (
      
    <Container component="main" maxWidth="md" style={{"backgroundColor" : "#f7f7f7"}}>
      <CssBaseline />
      <div className={classes.paper}>     
          <div className={classes.header}>
            Contact Us
          </div>                
        <div className={classes.subHeader}>We'd love to hear from you!</div>
         
        
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs >
              <TextField
              id="outlined-multiline-flexible"
              multiline
                variant="outlined"
                rows="10"                
                fullWidth
                name="Message"
                label="Message"
                type="textbox"    
                rowsMax="4"                           
              />
            </Grid>
         
          </Grid>
          <Grid item xs={3} md={4}>
          <LazyLoad once height={200} offset={[0, 200]}>
           
            <div style={classes.container}>
             
              </div>
       
          </LazyLoad>
        </Grid>
          <br />
          <div className="m-3">
                <ColorButton
                  contained
                  noRadius
                  color={"#03fc7f"}
                //  color={props.mainStyle.buttonColor.color}

                  hoverColor={"#02bd5f"}                  
                  // style={{
                  //   ...props.mainStyle.contactButton,
                  //   ...props.mainStyle.button
                  // }}
                  className={classes.contactButton}
                  style={{fontFamily: "Montserrat, 'Proza Libre', sans-serif",
                  fontWeight: 700}}
                >
                    Get Started
                </ColorButton>
              </div>     
        </form>
      </div>  
    </Container>
  );
}
