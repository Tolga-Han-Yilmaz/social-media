import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Navbar />

      <Grid container>
        <Grid item xs={8} sm={9}>
          <Main />
        </Grid>
        <Grid item xs={4} sm={3}>
          <News />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
