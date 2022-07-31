import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth";
import dialogReducer from "../features/dialog";
import postsReducer from "../features/addpost";
import updateReducer from "../features/update";

const store = configureStore({
  reducer: {
    auth: authReducer,
    dialog: dialogReducer,
    posts: postsReducer,
    update: updateReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
