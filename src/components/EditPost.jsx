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
import { updatePost } from "../firebase/firebase";
import { wrong, success } from "../helper/Toasts";
import { setUpdateState, setUpdateOpen } from "../features/update";

const EditPost = () => {
  const { updateID } = useSelector((state) => state.update);
  const { updateState } = useSelector((state) => state.update);
  const { updateOpen } = useSelector((state) => state.update);
  const dispatch = useDispatch();
  const [editPost, setEditPost] = useState({
    title: "",
    image: "",
    text: "",
  });

  const handleChange = async (e) => {
    await setEditPost({ ...editPost, [e.target.id]: e.target.value });
    await dispatch(setUpdateState(editPost));
  };

  const handleEditPost = async () => {
    await updatePost(updateState, updateID, success, wrong);
    dispatch(setUpdateOpen(false));

    setEditPost({
      title: "",
      image: "",
      text: "",
    });
  };

  const handleClose = () => {
    dispatch(setUpdateOpen(false));
  };

  return (
    <Container>
      <Dialog open={updateOpen} onClose={handleClose}>
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
            value={updateState.title}
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
            value={updateState.image}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            margin="normal"
            id="text"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            value={updateState.text}
            onChange={(e) => handleChange(e)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEditPost}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EditPost;
