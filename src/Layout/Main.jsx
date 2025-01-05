import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const Main = () => {
  const location=useLocation()
  const hiddenHeaderFooter=location.pathname.includes('login') || location.pathname.includes('register')
    return (
    <div className="container mx-auto">
   
     {hiddenHeaderFooter ||  <Navbar></Navbar>}
      <Outlet></Outlet>
     {hiddenHeaderFooter ||  <Footer></Footer>}
    </div>
  );
};

export default Main;
