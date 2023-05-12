import Home from "./components/signedOutUser/home/Home";
import "./App.css";
import React from "react";
import VideoPlayer from "./components/signedInUser/VideoPlayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/signedOutUser/SignIn";
import Home2 from "./components/signedInUser/home/Home2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/browse" element={<Home2 />} />
        <Route path="/player" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
