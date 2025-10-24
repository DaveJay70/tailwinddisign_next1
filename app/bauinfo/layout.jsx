import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function BauInfoLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
