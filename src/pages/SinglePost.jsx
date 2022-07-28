import { Container } from "@mui/system";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AutoFixHighTwoToneIcon from "@mui/icons-material/AutoFixHighTwoTone";
import DialogActions from "@mui/material/DialogActions";

import Button from "@mui/material/Button";
import { updateTodo, deletePost } from "../firebase/firebase";
import { wrong, success } from "../helper/Toasts";
import { updatesContacts } from "../features/update";

const SinglePost = () => {
  const { id } = useParams();
  let { state } = useLocation();
  const navigate = useNavigate();
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
      <Card>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <CardMedia
              component="img"
              height="194"
              image={
                state[0].image.includes("https")
                  ? state[0].image
                  : "https://picsum.photos/320/180"
              }
            />
          </Grid>

          <Grid xs={12} sm={9}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={state[0].title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {state[0].text}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="share" title="edit">
                <AutoFixHighTwoToneIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default SinglePost;
