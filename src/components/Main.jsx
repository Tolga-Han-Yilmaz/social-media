import * as React from "react";

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
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

import { wrong } from "../helper/Toasts";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleClick = (id) => {
    user || wrong("Please login");
    const result = posts.filter((post) => post.id === id);
    user && navigate("detail", { state: result, replace: false });
  };

  return (
    <Container>
      {posts.map((post) => {
        return (
          <Card sx={{ marginBottom: "1rem" }} key={post.id}>
            <Grid container>
              <Grid
                sx={{ cursor: "pointer" }}
                item
                xs={12}
                sm={3}
                onClick={() => handleClick(post.id)}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={
                    post.image.includes("https")
                      ? post.image
                      : "https://picsum.photos/320/180"
                  }
                />
              </Grid>

              <Grid xs={12} sm={9}>
                <CardHeader
                  sx={{ cursor: "pointer" }}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={post.title}
                  onClick={() => handleClick(post.id)}
                />
                <CardContent
                  onClick={() => handleClick(post.id)}
                  sx={{ cursor: "pointer" }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {post.text}
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: "1.5rem" }}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>

                  <Typography variant="body2" color="text.secondary">
                    {(post?.date).slice(0, 21)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.displayName ? user.displayName : user.email}
                  </Typography>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </Container>
  );
}
