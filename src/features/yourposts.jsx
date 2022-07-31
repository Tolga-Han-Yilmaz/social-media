import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yourposts: [],
};
const yourposts = createSlice({
  name: "yourposts",
  initialState,
  reducers: {
    setYourPosts: (state, action) => {
      state.yourposts = action.payload;
    },
  },
});

export const { setYourPosts } = yourposts.actions;
export default yourposts.reducer;
