import React from 'react';
import "./VideoFrame.css";

function VideoFrame() {
  return (
    <div className="wrapper">
      <div className="iframe-container">
        <iframe className="responsive-iframe" src="https://www.youtube.com/embed/j85qIqmw2qY?si=v7k4yA_MLcd9b00H&autohide=1&showinfo=0&controls=0&color=white&modestbranding=0&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default VideoFrame;
