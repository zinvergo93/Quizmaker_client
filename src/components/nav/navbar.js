import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import QuestionIcon from "@material-ui/icons/Help";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navLink: {
    color: "inherit",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" position="absolute">
        <Toolbar variant="dense">
          <Grid container justify="space-between">
            <Grid item />
            <Grid item>
              <Grid container spacing={4}>
                <Grid item>
                  <Tooltip title="Add a new quiz">
                    <Link to="/addquiz" className={classes.navLink}>
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                      >
                        <AddIcon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Home">
                    <Link to="/" className={classes.navLink}>
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                      >
                        <HomeIcon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title="Take a quiz">
                    <Link to="/quiz" className={classes.navLink}>
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                      >
                        <QuestionIcon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
            <Grid item />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
