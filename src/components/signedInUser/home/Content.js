import React from "react";
import "../css/content.css";
import Posters from "./Posters";
import "../css/posters.css";

export default function Content() {
  return (
    <div className="content">
      <div className="content-items">
        <Posters posterTitle="Popular" key="1" posterType="popular" />
        <Posters posterTitle="Most Voted" key="2" posterType="most-voted" />
        <Posters
          posterTitle="Recommendations"
          key="3"
          posterType="get-recommendations"
        />
      </div>
    </div>
  );
}
