import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updates: [],
  updateState: [],
  updateID: "",
  updateOpen: false,
};
const updates = createSlice({
  name: "updates",
  initialState,
  reducers: {
    updatesContacts: (state, action) => {
      state.updates = action.payload;
    },
    appendUpdates: (state, action) => {
      state.updates = [...state.updates, action.payload];
    },
    setUpdateState: (state, action) => {
      state.updateState = action.payload;
    },
    setUpdateID: (state, action) => {
      state.updateID = action.payload;
    },
    setUpdateOpen: (state, action) => {
      state.updateOpen = action.payload;
    },
  },
});

export const {
  updatesContacts,
  appendUpdates,
  setUpdateState,
  setUpdateID,
  setUpdateOpen,
} = updates.actions;
export default updates.reducer;
