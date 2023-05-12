import React from "react";
import "../css/banner.css";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div
          className="mx-5 d-flex flex-row justify-content-evenly"
          style={{ width: "250px" }}
        >
          <button className="play-btn btn">
            <i className="fa fa-play" style={{ fontSize: "20px" }}></i>
            &nbsp;&nbsp;Play
          </button>
          <button className="info-btn btn">
            <i
              className="fa fa-info"
              style={{ fontSize: "20px", padding: "0 5px" }}
            ></i>
            &nbsp;&nbsp;More Info
          </button>
        </div>
      </div>
      <div className="banner-bottom"></div>
    </div>
  );
}
