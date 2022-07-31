import { Grid } from "@mui/material";

import Main from "../components/Main";

import News from "../components/News";

const Home = () => {
  return (
    <>
      <Grid container sx={{ marginTop: { xs: "100px", md: "1rem" } }}>
        <Grid item xs={12} sm={9}>
          <Main />
        </Grid>
        <Grid item sm={3} xs={12}>
          <News />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
