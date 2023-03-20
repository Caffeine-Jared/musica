import React, { useState, useRef } from "react";

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

function useChangeBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const videoRefs = useRef(videos.map(() => React.createRef()));
  const [currentVideo, setCurrentVideo] = useState(null);

  const handlePlay = (index) => {
    setCurrentVideo(index);
    setBackgroundColor("#c4c4c4");
    videoRefs.current[index].current.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };

  const handlePause = () => {
    setCurrentVideo(null);
    setBackgroundColor("#ffffff");
    videoRefs.current[currentVideo].current.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  };

  return { backgroundColor, videoRefs, handlePlay, handlePause };
}

export default useChangeBackgroundColor;
