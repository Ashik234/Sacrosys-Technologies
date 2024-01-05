import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";

function UserRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
}

export default UserRoutes;
