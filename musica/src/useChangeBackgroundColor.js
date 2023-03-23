import React, { useState, useRef } from "react";
import {videos} from "./getVideos";

  function useChangeBackgroundColor(videoRefs) {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [currentVideo, setCurrentVideo] = useState(null);
  
    const handlePlay = (index) => {
      if (currentVideo !== null && currentVideo !== index) {
        handlePause();
      }
      setCurrentVideo(index);
      videoRefs[index].current.src = `${videos[index].src}?autoplay=1`;

      fetch("http://localhost:8082?" + videos[index].videoId, {})
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        setBackgroundColor(randomColor());
      });

    };
  
    const handlePause = () => {
      if (currentVideo !== null) {
        videoRefs[currentVideo].current.src = videoRefs[currentVideo].current.src.replace("?autoplay=1", "");
      }
    };
  
    const handleButtonClick = (index) => {
      handlePlay(index);
    };
  
    const randomColor = () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
  
    return { backgroundColor, handlePlay, handlePause, handleButtonClick };
  }
  
  export default useChangeBackgroundColor;
