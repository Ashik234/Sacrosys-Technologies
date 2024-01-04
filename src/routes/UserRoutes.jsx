import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";

function UserRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Layout />}>
        <Route index element={<DashBoard />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
