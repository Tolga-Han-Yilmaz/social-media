import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { setOpen } from "../features/dialog";
import { addPost } from "../firebase/firebase";
import { wrong, success } from "../helper/Toasts";
import { serverTimestamp } from "firebase/firestore";

const AddPost = () => {
  const { user } = useSelector((state) => state.auth);

  const { open } = useSelector((state) => state.dialog);
  const dispatch = useDispatch();
  let date = serverTimestamp();
  console.log(date);
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    text: "",
    uid: "",
    date: `${date}`,
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.id]: e.target.value });
  };

  const handleAddPost = async () => {
    dispatch(setOpen(false));
    await addPost({ ...newPost, uid: user.uid }, success, wrong);
    setNewPost({
      title: "",
      image: "",
      text: "",
    });
  };

  const handleClose = () => {
    dispatch(setOpen(false));
  };
  return (
    <Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Add Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={newPost.title}
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            margin="normal"
            id="image"
            label="ImageUrl"
            type="text"
            fullWidth
            variant="standard"
            value={newPost.image}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            margin="normal"
            id="text"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            value={newPost.text}
            onChange={(e) => handleChange(e)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddPost}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AddPost;
