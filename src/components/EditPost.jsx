import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { wrong, success } from "../helper/Toasts";
import { updateTodo } from "../firebase/firebase";
import { setUpdateState, setUpdateOpen } from "../features/update";

const EditPost = () => {
  const { updateID } = useSelector((state) => state.update);
  const { updateState } = useSelector((state) => state.update);
  const { updateOpen } = useSelector((state) => state.update);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    await dispatch(
      setUpdateState({ ...updateState, [e.target.id]: e.target.value })
    );
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTodo(updateID, updateState, success, wrong);
    // await dispatch(updateState);

    await dispatch(setUpdateOpen(false));
  };
  // useEffect(() => {}, [handleUpdate()]);

  const handleClose = () => {
    dispatch(setUpdateOpen(false));
  };

  return (
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
        <Button onClick={handleUpdate}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPost;
