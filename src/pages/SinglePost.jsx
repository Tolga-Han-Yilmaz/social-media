import { Container } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

const SinglePost = () => {
  let { state } = useLocation();
  console.log(state[0].title);
  return (
    <Container
      key={state[0].id}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img
            src={
              state[0].image.includes("https")
                ? state[0].image
                : "https://picsum.photos/320/180"
            }
            alt="a"
            style={{ width: "95%", borderRadius: "0.5rem" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>{state[0].title}</h3>
          <Typography variant="body2" color="text.secondary">
            {state[0].text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePost;
