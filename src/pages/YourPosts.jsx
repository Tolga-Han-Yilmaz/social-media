import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import EditPost from "../components/EditPost";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AutoFixHighTwoToneIcon from "@mui/icons-material/AutoFixHighTwoTone";
import { deletePost } from "../firebase/firebase";
import { success } from "../helper/Toasts";

import { setUpdateState, setUpdateID, setUpdateOpen } from "../features/update";

const YourPosts = () => {
  let { state } = useLocation();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  // const { updateState } = useSelector((state) => state.update);
  const [block, setBlock] = useState(state);

  // delete
  const handleDelete = async (id) => {
    await deletePost(id, success);
    let dataForUpdate = await state.filter((post) => post.id !== id);

    setBlock(dataForUpdate);
  };

  const handleEdit = async (id) => {
    let dataForUpdate = await state.filter((post) => post.id === id);
    // const { user } = useSelector((state) => state.auth);

    await dispatch(setUpdateOpen(true));
    await dispatch(setUpdateState(dataForUpdate[0]));
    await dispatch(setUpdateID(dataForUpdate[0].id));
    // await setBlock(updateState);
  };
  // useEffect(() => {
  //   const result = posts.filter((post) => post.uid === user.uid);
  // }, [updateOpen]);

  const { updateOpen } = useSelector((state) => state.update);

  return (
    <Container sx={{ mt: "2rem" }}>
      {block.map((post) => {
        return (
          <Card sx={{ marginBottom: "1rem" }} key={post.id}>
            <Grid container>
              <Grid sx={{ cursor: "pointer" }} item xs={12} sm={3}>
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
                />
                <CardContent sx={{ cursor: "pointer" }}>
                  <Typography variant="body2" color="text.secondary">
                    {post.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="share" title="edit">
                    <AutoFixHighTwoToneIcon
                      onClick={() => handleEdit(post.id)}
                    />
                  </IconButton>
                  <EditPost open={updateOpen} />

                  <IconButton title="delete">
                    <DeleteForeverIcon
                      onClick={() => handleDelete(post.id)}
                      sx={{ cursor: "pointer" }}
                    />
                  </IconButton>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </Container>
  );
};

export default YourPosts;
