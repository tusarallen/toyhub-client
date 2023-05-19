import React from "react";
import NavBar from "../pages/Share/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Share/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Main;
