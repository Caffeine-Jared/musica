import React, { useState, useRef, useMemo} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import useChangeBackgroundColor from "./useChangeBackgroundColor";

const videos = [
  {
    id: 1,
    title: "Video 1",
    src: "https://www.youtube.com/embed/VItmgwq8D9s"
  },
  {
    id: 2,
    title: "Video 2",
    src: "https://www.youtube.com/embed/qQOIMMfOo7g"
  },
  {
    id: 3,
    title: "Video 3",
    src: "https://www.youtube.com/embed/H55ta3AsiAw"
  }
];

const albumArt = [
  {
    id: 1,
    title: "Album Art 1",
    src: "https://github.com/Caffeine-Jared/musica/blob/master/musica-web/music-photos/chikoi-the-maid-leaving-reality.jpg?raw=true"
  },
  {
    id: 2,
    title: "Album Art 2",
    src: "https://github.com/Caffeine-Jared/musica/blob/master/musica-web/music-photos/chikoi-the-maid-leaving-reality.jpg?raw=true"
  },
  {
    id: 3,
    title: "Album Art 3",
    src: "https://github.com/Caffeine-Jared/musica/blob/master/musica-web/music-photos/chikoi-the-maid-leaving-reality.jpg?raw=true"
  }
];

function App() {
  const videoRefs = useMemo(() => videos.map(() => React.createRef()), []);
  const { backgroundColor, handlePlay, handlePause, handleButtonClick } =
    useChangeBackgroundColor(videoRefs);

  return (
    <div style={{ backgroundColor }}>
      <h1 className="center">Musica</h1>
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
                <button onClick={() => handleButtonClick(index)}>Play</button>
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