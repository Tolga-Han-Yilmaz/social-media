import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updates: [],
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
  },
});

export const { updatesContacts, appendUpdates } = updates.actions;
export default updates.reducer;
