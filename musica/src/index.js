import React from "react";
import ReactDOM from "react-dom";

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
    src: "musica-web/music-photos/chikoi-the-maid.jpg"
  },
  {
    id: 2,
    title: "Album Art 2",
    src: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Album Art 3",
    src: "https://via.placeholder.com/150"
  }
];

function App() {
  return (
    <div>
      <h1>My Videos and Album Art Site</h1>
      <div>
        {videos.map((video) => (
          <div key={video.id} className="video">
            <iframe
              width="560"
              height="315"
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div>
        {albumArt.map((art) => (
          <div key={art.id} className="album-art">
            <img src={art.src} alt={art.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
