import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import AutoFixHighTwoToneIcon from "@mui/icons-material/AutoFixHighTwoTone";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { updateTodo, deletePost } from "../firebase/firebase";
import { wrong, success } from "../helper/Toasts";
import { useNavigate } from "react-router-dom";
import {
  updatesContacts,
  appendUpdates,
  setUpdateState,
  setUpdateID,
  setUpdateOpen,
} from "../features/update";
import EditPost from "./EditPost";

export default function Main() {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const { updateOpen } = useSelector((state) => state.update);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // delete
  const handleDelete = async (id) => {
    await deletePost(id, success);
  };

  const handleClick = (id) => {
    user || wrong("Please login");
    const result = posts.filter((post) => post.id === id);
    user && navigate("detail", { state: result, replace: false });
  };

  const handleEdit = async (id) => {
    let dataForUpdate = await posts.filter((post) => post.id === id);
    console.log(dataForUpdate);
    await dispatch(setUpdateOpen(true));
    await dispatch(setUpdateState(dataForUpdate[0].post));
    await dispatch(setUpdateID(dataForUpdate[0].id));
    // await dispatch(updatesContacts(updateState));
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

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
                  {/* <Dialog open={open}>
                    <DialogTitle sx={{ textAlign: "center" }}>
                      Add Post
                    </DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="normal"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updateState.title}
                        onChange={(e) => handleChange(e)}
                      />
                      <TextField
                        margin="normal"
                        name="image"
                        label="ImageUrl"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updateState.image}
                        onChange={(e) => handleChange(e)}
                      />
                      <TextField
                        margin="normal"
                        name="text"
                        label="Content"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updateState.text}
                        onChange={(e) => handleChange(e)}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button type="submit" onClick={handleUpdate}>
                        Confirm
                      </Button>
                    </DialogActions>
                  </Dialog> */}
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
}
