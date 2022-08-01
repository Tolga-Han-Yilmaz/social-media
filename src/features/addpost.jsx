import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  yourposts: [],
};
const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setYourPosts: (state, action) => {
      state.yourposts = action.payload;
    },
    appendPosts: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { setPosts, appendPosts, setYourPosts } = posts.actions;
export default posts.reducer;
