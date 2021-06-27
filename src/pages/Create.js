import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import Divider from "@material-ui/core/Divider";
import { ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import TuneIcon from "@material-ui/icons/Tune";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";

import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  typo: {
    marginTop: "20px",
  },

  divid: {
    height: "1px",
    backgroundColor: "#f50057",
    borderRadius: 20,
  },

  btn: {
    width: "100%",
    fontSize: "18px",
    marginTop: "10px",
    position: "relative",
    top: "10px",
    marginBottom: "30px",
  },

  btnfilter: {
    color: "#f50057",
    alignSelf: "center",
    marginLeft: "10px",
    marginTop: "10px",
  },

  rteFilter: {
    transform: "rotate(270deg)",
  },

  textField: {
    marginTop: "40px",
    width: "100%",
  },

  cAction: {
    width: "100%",
  },

  crdContent: {
    marginBottom: "10px",
    marginTop: "10px",

    "&:$focused": {
      border: "1px solid #11296B",
    },
  },

  mvLeft: {
    paddingLeft: "95px",
    paddingRight: "50px",
  },

  firstIcon: {
    width: 75,
    height: 75,
    position: "absolute",
    top: "20px",
    left: "10px",
  },

  secondIcon: {
    width: 75,
    height: 75,
    position: "absolute",
    top: "9px",
    left: "10px",
  },

  btnExit: {
    padding: "5px",
    margin: "10px",
  },

  btnBtn: {
    fontSize: "1.2rem",
    color: "#f50057",
  },

  title: {
    color: "black",
    textAlign: "center",
    fontSize: "1.2rem",
    textAlign: "center",
    margin: "0px auto",
  },

  btnReset: {
    margin: "10px",
    color: "#f50057",
    textTransform: "none",
  },

  handleMe: {
    width: "48px",
    height: "5px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
  },

  subH: {
    color: "black",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "20px",
  },
  close: {
    fontSize: "20px",
    color: "#11296B",
    fontWeight: 500,
  },

  paper: {
    height: "calc(100% - 350px)",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },

  filter: {
    fontWeight: 700,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  reset: {
    color: "lightgrey",
    textTransform: "none",
  },
});

export default function Create() {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <Container maxWidth="xs">
      {/* header start*/}

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10}>
          <Typography
            variant="h6"
            component="h2"
            color="secondary"
            gutterBottom
            className={classes.typo}
          >
            Create a Note
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <IconButton
            aria-label="filter"
            className={classes.btnfilter}
            onClick={toggleDrawer(true)}
          >
            <TuneIcon className={classes.rteFilter} />
          </IconButton>
        </Grid>
      </Grid>
      {/* header end*/}

      <Divider className={classes.divid} />

      <form noValidate autoComplete="off">
        <TextField
          label="Note Title"
          variant="outlined"
          color="secondary"
          className={classes.textField}
        ></TextField>

        <TextField
          label="Note Here"
          variant="outlined"
          color="secondary"
          multiline
          rows={15}
          className={classes.textField}
        ></TextField>
      </form>

      <Card className={classes.crdContent}>
        <CardActionArea>
          <Avatar
            alt="Remy Sharp"
            src="/NewIcons/organization.png"
            className={classes.firstIcon}
          />
          <CardContent className={classes.mvLeft}>
            <Typography gutterBottom variant="h6" component="h2">
              Individual
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Self-practicing professionals, Self-employed, and employed
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* <Link
        href="#"
        onClick={toggleDrawer(true)}
        color="inherit"
        underline="none"
      > */}
        <Card className={classes.crdContent}>
          <CardActionArea>
            <Avatar
              alt="Remy Sharp"
              src="/NewIcons/salary.png"
              className={classes.secondIcon}
            />
            <CardContent className={classes.mvLeft}>
              <Typography gutterBottom variant="h6" component="h2">
                Non-Individual
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Companies and Partnership
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      {/* </Link> */}

      {/* Button start*/}
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className={classes.btn}
        endIcon={<AddCircleIcon />}
      >
        Add
      </Button>

      {/* Button end*/}

      <Drawer
        classes={{ paper: classes.paper }}
        anchor={"bottom"}
        open={state}
        onClose={toggleDrawer(false)}
      >
        <List
          aria-labelledby="subheader"
          subheader={
            <ListSubheader
              component="div"
              id="subheader"
              className={classes.subH}
            >
              <IconButton
                aria-label="close"
                size="small"
                onClick={toggleDrawer(false)}
              >
                <CloseIcon className={classes.close} />
              </IconButton>
              <Typography className={classes.filter}>
                <Button onClick={toggleDrawer(false)}>
                  <div className={classes.handleMe}></div>
                </Button>
                Filter
              </Typography>
              <Button className={classes.reset}>Reset</Button>
            </ListSubheader>
          }
        ></List>
      </Drawer>
    </Container>
  );
}
