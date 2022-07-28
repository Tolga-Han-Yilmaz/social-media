import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SinglePost from "../pages/SinglePost";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/list"} element={<PrivateRouter />}>
          {/* <Route path="" element={<ContactList />} /> */}
        </Route>
        <Route path="/detail" element={<SinglePost />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
