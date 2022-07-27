import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};
const dialog = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = dialog.actions;
export default dialog.reducer;
