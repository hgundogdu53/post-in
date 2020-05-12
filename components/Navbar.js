import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

import ActiveLink from "./ActiveLink";
import { signoutUser } from "../lib/auth";

const Navbar = ({ classes, router, pageProps: { auth } }) => {
  const { user = {} } = auth || {};

  return (
    <AppBar
      className={classes.appBar}
      position={router.pathname === "/" ? "fixed" : "static"}
    >
      <Toolbar>
        {/* Main Title / Home Button */}
        <ActiveLink href="/">
          <img
            src="../static/images/favicon-32x32.png"
            className={classes.icon}
            style={{
              paddingRight: 10,
            }}
          />
        </ActiveLink>
        <Typography
          variant="h5"
          component="h1"
          className={classes.toolbarTitle}
          color="textPrimary"
        >
          <ActiveLink href="/" color="textPrimary">
            <div
              style={{
                color: "#edc80c",
                fontSize: "60",
              }}
            >
              Post-iin
            </div>
          </ActiveLink>
        </Typography>

        {user._id ? (
          // Auth Navigation
          <div>
            <Button>
              <ActiveLink href={`/profile/${user._id}`}>Profile</ActiveLink>
            </Button>
            <Button onClick={signoutUser} variant="outlined">
              Sign out
            </Button>
          </div>
        ) : (
          // UnAuth Navigation
          <div>
            <Button>
              <ActiveLink href="/signin">Sign in</ActiveLink>
            </Button>
            <Button>
              <ActiveLink href="/signup">Sign up</ActiveLink>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

const styles = (theme) => ({
  appBar: {
    // z-index 1 higher than the fixed drawer in home page to clip it under the navigation
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarTitle: {
    flex: 1,
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
});

export default withStyles(styles)(Navbar);
