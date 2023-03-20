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
  

  function useChangeBackgroundColor(videoRefs) {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [currentVideo, setCurrentVideo] = useState(null);
  
    const handlePlay = (index) => {
      if (currentVideo !== null && currentVideo !== index) {
        handlePause();
      }
      setCurrentVideo(index);
      setBackgroundColor(randomColor());
      videoRefs[index].current.src = `${videos[index].src}?autoplay=1`;
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
