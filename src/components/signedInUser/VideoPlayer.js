import React, { useState } from "react";
import "./css/player.css";

export default function VideoPlayer() {
  const [playerStyle, setPlayerStyle] = useState({
    display: "none",
  });
  function showHeading() {
    setPlayerStyle({
      display: "block",
    });
    setTimeout(removeHeading, 3000);
  }

  function removeHeading() {
    setPlayerStyle({ display: "none" });
  }

  return (
    <React.Fragment>
      <div className="container">
        <video onClick={showHeading} width="100%" height="100%" controls>
          <source
            src="https://cdn.videvo.net/videvo_files/video/free/2019-07/small_watermarked/Raw_Vegan_Blueberry_Cake_Cut_Birthday_Cooking_preview.webm"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="player-header" style={playerStyle}>
        <h1>Blueberry Cheesecake</h1>
      </div>
    </React.Fragment>
  );
}
