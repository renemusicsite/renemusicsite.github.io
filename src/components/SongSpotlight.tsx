import React, { useState, useEffect } from "react"
import StreamingIcons from "./StreamingIcons.tsx";
import "./SongSpotlight.css";

function SongSpotlight() {
   // State to manage modal visibility and image source
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  // Handler to open the modal with the clicked image source
  const openModal = (src) => {
    if(window.innerWidth >= 1024) {
      setModalImageSrc(src); // Set the modal image source
      setIsModalOpen(true);   // Show the modal
    }
  };

  // Handler to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

    // Adding event listener for the Escape key to close the modal
    useEffect(() => {
      const handleKeydown = (event) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };
  
      // Add the event listener when the component mounts
      window.addEventListener('keydown', handleKeydown);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    }, []);

  return (
    <div className="song-container">
      {/* <div className="img-container">
        <img alt="Rene - unraveling" className="song-img" src ="/PerfectDark.jpg"
        onClick={() => openModal("/PerfectDark.jpg")}
        />
      </div> */}
      <video className="video-thumb-container" aria-label="Artwork for PerfectDark" autoPlay muted loop playsInline>
        <source src="/PerfectDarkSquareVideo.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="song-title">
        Rene - PerfectDark
      </div>
      <div className="song-subtitle">            
        Listen on your preferred music service
      </div>
      <StreamingIcons />
      {/* {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={modalImageSrc}
              alt="Modal"
              className="modal-content"
            />
            <div className="modal-subtitle">
              artwork by Rodrigo Pacheco
            </div>
          </div>
        )} */}
    </div>
    );
  }

export default SongSpotlight;
