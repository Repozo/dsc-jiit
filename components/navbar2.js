import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Link from "../src/Link";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "transparent",
    color: "grey",
    boxShadow: "none",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link href="/" style={{ textDecoration: "none", color: "grey" }}>
              {" "}
              <img
                alt="logo"
                src="/assets/img/logo.png"
                className="img-fluid"
                style={{ height: 50 }}
              />{" "}
              &nbsp; DSC JIIT{" "}
            </Link>
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
            <Typography variant="h6" noWrap className={classes.title}>
              DSC JIIT
            </Typography>
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/" color="secondary" style={{ textDecoration: "none" }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <a href="#about" style={{ textDecoration: "none", color: "teal" }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="About" />
            </ListItem>
          </a>
          <Link
            href="/events"
            color="secondary"
            style={{ textDecoration: "none" }}
          >
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Events" />
            </ListItem>
          </Link>
          <Link
            href="/team"
            color="secondary"
            style={{ textDecoration: "none" }}
          >
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Team" />
            </ListItem>
          </Link>
          <Link
            href="/video"
            color="secondary"
            style={{ textDecoration: "none" }}
          >
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Videos" />
            </ListItem>
          </Link>
          <a href="#contact" style={{ textDecoration: "none", color: "teal" }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Contact" />
            </ListItem>{" "}
          </a>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
