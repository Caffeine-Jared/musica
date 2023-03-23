import React, { useState, useRef, useMemo} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import useChangeBackgroundColor from "./useChangeBackgroundColor";
import {videos, albumArt} from "./getVideos";

function App() {
  const videoRefs = useMemo(() => videos.map(() => React.createRef()), []);
  const { backgroundColor, handlePlay, handlePause, handleButtonClick } =
    useChangeBackgroundColor(videoRefs);

  return (
    <div style={{ backgroundColor }}>
      <h1 className="center">Musica De La Web</h1>
      <div className="center-container">
        {videos.map((video, index) => (
          <React.Fragment key={video.id}>
            <div className="item-container">
              <div className="album-art">
                <img
                  src={albumArt[index].src}
                  alt={albumArt[index].title}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150")
                  }
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
                <button class='button' onClick={() => handleButtonClick(index)}>Play</button>
              </div>
              <div className="video">
                <iframe
                  width="560"
                  height="315"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ref={videoRefs[index]}
                ></iframe>
              </div>
              <div className="color">
                <div
                  className="color-button"
                  style={{ backgroundColor: backgroundColor }}
                ></div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));