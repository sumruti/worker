import React from "react";

// sections for this page
import Header from "components/Header/Header.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
/* import Footer from "components/Footer/Footer.js"; */
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/components.js";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';


const useStyles = makeStyles(styles);
  
export default function AddProject(props) {
  const classes = useStyles();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Projects"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      {/* <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}

      <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>

                  <CardBody>
                    <div className={classes.title}>
                        <h2>Project Title</h2>
                    </div>
                    <GridContainer>
                      <GridItem xs={12} sm={8} md={8} style={{ backgroundColor: "#ef8982" }}>
                        <h4 className="justify">Project Description Here Provided by the users... Project Description Here Provided by the users... 
                            Project Description Here Provided by the users... Project Description Here Provided by the users... 
                            Project Description Here Provided by the users... Project Description Here Provided by the users...</h4>
                      </GridItem>
                      <GridItem xs={12} sm={4} md={4}>
                        <List component="nav" aria-label="main mailbox folders">
                          <ListItem>
                            <ListItemIcon>
                              <AttachMoneyIcon style={{ color: "green" }} />
                            </ListItemIcon>
                            <ListItemText primary="Professional" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <FolderOutlinedIcon style={{ color: "yellow" }} />
                            </ListItemIcon>
                            <ListItemText primary="Type: Per Hour" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <AccessTimeIcon style={{ color: "blue" }} />
                            </ListItemIcon>
                              <ListItemText primary="Duration: 3 Months" />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <FavoriteBorderIcon style={{ color: "red" }} />
                            </ListItemIcon>
                              <ListItemText primary="Save this project" />
                          </ListItem>
                        </List>
                        
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="danger" size="lg" href="./view-projects">
                      Bid Now
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>

                  <CardBody>
                    <div className={classes.title}>
                        <h2>Project Title</h2>
                    </div>
                    <GridContainer>
                        <GridItem xs={12} sm={8} md={8}>
                            <h4 className="justify">Project Description Here Provided by the users... Project Description Here Provided by the users... 
                            Project Description Here Provided by the users... Project Description Here Provided by the users... 
                            Project Description Here Provided by the users... Project Description Here Provided by the users...</h4>
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4}>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem>
                                <ListItemIcon>
                                    <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dollar: 5" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessTimeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Duration: 3 Months" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FavoriteBorderIcon />
                                </ListItemIcon>
                                <ListItemText primary="Save this project" />
                            </ListItem>
                        </List>
                        
                        </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                        <Button color="primary" size="lg" href="./view-projects">
                          Bid Now
                        </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>

                  <CardBody>
                    <div className={classes.title}>
                        <h2>Project Title</h2>
                    </div>
                    <GridContainer>
                        <GridItem xs={12} sm={8} md={8}>
                            <h4 className="justify">Project Description Here Provided by the users... Project Description Here Provided by the users... 
                            Project Description Here Provided by the users... Project Description Here Provided by the users... 
                            Project Description Here Provided by the users... Project Description Here Provided by the users...</h4>
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4}>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem>
                                <ListItemIcon>
                                    <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dollar: 5" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessTimeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Duration: 3 Months" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FavoriteBorderIcon />
                                </ListItemIcon>
                                <ListItemText primary="Save this project" />
                            </ListItem>
                        </List>
                        
                        </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                        <Button color="primary" size="lg" href="./view-projects">
                          Bid Now
                        </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
     {/*  <Footer /> */}
    </div>
  );
}
