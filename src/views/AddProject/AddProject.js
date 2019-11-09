import React from "react";

// sections for this page
import Header from "components/Header/Header.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomInput from "components/CustomInput/CustomInput.js";
/* import Footer from "components/Footer/Footer.js"; */
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'REACT JS',
  'NODE JS',
  'PHP',
  'REACT NATIVE',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles(styles);
export default function AddProject(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };


  /* Simple Dropdown */
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const durationTime = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };




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
            <GridItem xs={12} sm={6} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Add New Project</h4>
                  </CardHeader>

                  <CardBody>
                  <CustomInput labelText="Project Title" id="email" formControlProps={{ fullWidth: true }} />

                    <CustomInput labelText="Description" id="message" formControlProps={{ fullWidth: true, 
                    className: classes.textArea }} inputProps={{ multiline: true, rows: 3 }} />


                    <FormControl className={classes.formControl} style={{ marginTop: "17px" }}>
                      <InputLabel id="demo-controlled-open-select-label" style={{ color: "#b7acac" }}>Estimated Duration</InputLabel>
                      <Select
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        onChange={durationTime}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Less than 1 Weak</MenuItem>
                        <MenuItem value={20}>Less than 1 Month</MenuItem>
                        <MenuItem value={30}>Less than 3 Months</MenuItem>
                      </Select>
                    </FormControl>


                    <FormControl className={classes.formControl} style={{ marginTop: "17px" }}>
                      <InputLabel color="primary" id="demo-mutiple-chip-label" style={{width: "100px", color: "#b7acac"}}>Project Skills</InputLabel>
                      <Select
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                          <div className={classes.chips}>
                            {selected.map(value => (
                              <Chip key={value} label={value} className={classes.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      formControlProps={{ fullWidth: true }} >
                        {names.map(name => (
                          <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
     
                  <CustomInput labelText="Project Budget" id="email" formControlProps={{ fullWidth: true }} />
                  <CustomInput labelText="Upload File" id="email" formControlProps={{ fullWidth: true }} 
                  inputProps={{ type: "file" }}/>

                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    <Button color="primary" size="lg" href="./view-projects">
                      Add Project
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
