import React from "react";
import "../css/home.css";
import MidContent from "./MidContent";
import Header from "./Header";
import Footer from "./Footer";
import TopContent from "./TopContent";

export default function Home() {
  return (
    <div className="home container-fluid p-0">
      <div className="home-top">
        <Header />
        <TopContent />
      </div>
      <MidContent />
      <Footer />
    </div>
  );
}
