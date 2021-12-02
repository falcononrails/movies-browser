import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>{"Movies Browser"}</title>
      </Head>
      <div className={"bg-gray-900 w-full flex flex-col"}>
        <Navbar />
        <div className="bg-gray-900 text-gray-100">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
