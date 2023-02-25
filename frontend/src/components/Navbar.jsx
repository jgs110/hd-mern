import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import logo from "../assets/logo.svg";

const Navbar = () => {
  // Test button for Sentry.io monitoring & logging
  // <button onClick={() => methodDoesNotExist()}>Break the world</button>
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#EE7125", width: "100%" }}
      >
        <Grid container spacing={2} style={{ padding: "1em" }}>
          <Grid item>
            <Link to="/">
              <Avatar
                alt="logo"
                style={{ width: "4.5rem", height: "4.5rem" }}
                variant="rounded"
                src={logo}
              />
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
