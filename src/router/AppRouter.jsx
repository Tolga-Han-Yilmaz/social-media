import { Grid } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPost from "../components/AddPost";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SinglePost from "../pages/SinglePost";
import YourPosts from "../pages/YourPosts";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Grid container>
      <Grid item md={1}>
        <Navbar />
      </Grid>
      <Grid item md={11}>
        <Routes>
          <Route path={"/list"} element={<PrivateRouter />}>
            {/* <Route path="" element={<AddPost />} /> */}
          </Route>
          <Route path="/detail" element={<SinglePost />} />
          <Route path="/yourposts" element={<YourPosts />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AppRouter;
