const vidIds = ["RgnRBqwoOIQ", "8sgycukafqQ", "L_jWHffIx5E"];

const videos = vidIds.map((id, index) => {
  return {
    id: index,
    title: "Video " + index,
    videoId: id,
    src: "https://www.youtube.com/embed/" + id
  }
});

const albumArt = vidIds.map((id, index) => {
  return {
    id: index,
    title: "Album Art " + index,
    src: "https://img.youtube.com/vi/" + id + "/hqdefault.jpg"
  }
});

export {videos, albumArt};