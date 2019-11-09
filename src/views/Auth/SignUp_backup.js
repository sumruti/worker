import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: ".makeStyles-container-1 { margin-top: 0px!important;}" }} />
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          marginTop: "-95px!important"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Sign Up</h3>
                    <div className={classes.socialLine}>
                      <Button justIcon href="#pablo" color="transparent" onClick={e => e.preventDefault()} >
                        <PhoneAndroidIcon />
                      </Button>
                      <Button justIcon href="#pablo" color="transparent" onClick={e => e.preventDefault()} >
                        <i className={"fab fa-facebook"}  />
                      </Button>
                      <Button justIcon href="#pablo" color="transparent" onClick={e => e.preventDefault()} >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <h4 className={classes.divider}>Or</h4>
                  <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                            <CustomInput labelText="First Name" id="email" formControlProps={{ fullWidth: true }}
                            inputProps={{ type: "text", endAdornment: ( <InputAdornment position="end"> 
                            <People className={classes.inputIconsColor} /></InputAdornment>) }} />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <CustomInput labelText="Last Name" id="email" formControlProps={{ fullWidth: true }}
                            inputProps={{ type: "text", endAdornment: ( <InputAdornment position="end"> 
                            <People className={classes.inputIconsColor} /></InputAdornment>) }} />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <CustomInput labelText="Email Address" id="email" formControlProps={{ fullWidth: true }}
                            inputProps={{ type: "text", endAdornment: ( <InputAdornment position="end"> 
                            <Email className={classes.inputIconsColor} /></InputAdornment>) }} />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <CustomInput labelText="Mobile Number" id="email" formControlProps={{ fullWidth: true }}
                            inputProps={{ type: "text", endAdornment: ( <InputAdornment position="end"> 
                            <PhoneIphoneIcon className={classes.inputIconsColor} /></InputAdornment>) }} />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <CustomInput labelText="Password" id="pass" formControlProps={{ fullWidth: true }} inputProps={{
                            type: "password", endAdornment: ( <InputAdornment position="end"> <Icon className={classes.inputIconsColor}>
                            lock_outline </Icon> </InputAdornment> ), autoComplete: "off" }} />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <CustomInput labelText="Confirm Password" id="pass" formControlProps={{ fullWidth: true }} inputProps={{
                            type: "password", endAdornment: ( <InputAdornment position="end"> <Icon className={classes.inputIconsColor}>
                            lock_outline </Icon> </InputAdornment> ), autoComplete: "off" }} />
                        </GridItem>
                    </GridContainer>
                    

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="primary" size="lg">
                      Sign Up
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    <a href="./Login">Already a user? Sign In Here</a>
                  </CardFooter>
                    
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
