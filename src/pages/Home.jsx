import { Grid } from "@mui/material";

import Main from "../components/Main";

import News from "../components/News";

const Home = () => {
  return (
    <>
      <Grid container sx={{ marginTop: "100px" }}>
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
