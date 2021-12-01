import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className={"bg-gray-900 w-full flex flex-col"}>
        <Navbar />
        <div className="bg-gray-900 text-gray-100">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
