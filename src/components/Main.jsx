import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

export default function Main() {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <Container>
      {posts.map((post) => {
        return (
          <Card>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <CardMedia
                  component="img"
                  height="194"
                  image={
                    post.post.image
                      ? post.post.image
                      : "https://picsum.photos/320/180"
                  }
                />
              </Grid>

              <Grid xs={12} sm={9}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.post.text}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </Container>
  );
}
