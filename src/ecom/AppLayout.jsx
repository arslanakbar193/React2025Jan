import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
 