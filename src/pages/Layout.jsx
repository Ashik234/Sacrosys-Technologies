import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
function Layout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow">
        <NavBar/>
      </div>
      <div className="flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
