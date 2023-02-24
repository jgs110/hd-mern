import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#EE7125", width: "100%" }}
      >
        <Grid container spacing={2} style={{ padding: "1em" }}>
          <Grid item>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                style={{ color: "white" }}
                variant="body1"
                gutterBottom
              >
                Home
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
