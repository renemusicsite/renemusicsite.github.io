import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from "./components/Navigation.tsx";
import MailingList from "./components/MailingList.tsx";
import SocialMediaIcons from "./components/SocialMediaIcons.tsx";
import StreamingIcons from "./components/StreamingIcons.tsx";
// import VideoFrame from "./components/VideoFrame.tsx";
// import Menu from "./components/Menu.tsx";

function App() {
  const currentYear = new Date().getFullYear();
  const isMobile = window.innerWidth <= 768;

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
    <div className="App">
      <header className="App-header header">
        {/* <img onLoad={addAnimation} className="banner" src="/BannerText.jpg" alt=""/> */}
        {/* <Menu /> */}
      </header>
      <div class="video-container">
      {!isMobile && 
      <video class="background-video" autoPlay muted loop>
        <source src="/unraveling200pRippleCanvas.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>}
      </div>
      <div className="site-content">
        <div className="song-container">
          <div className="img-container">
            <img className="song-img" src ="/unravelingFINAL6.jpg"
            onClick={() => openModal("/unravelingFINAL6.jpg")}
            />
            <div className="song-description">
              artwork by Rodrigo Pacheco
            </div>
          </div>
          <div className="song-title">
            unraveling out now!
          </div>
          <div className="song-subtitle">            
            Listen on your preferred music service
          </div>
          <StreamingIcons />
        </div>
        {/* Modal */}
        {isModalOpen && (
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
        )}
        <Navigation className="loaded" />
        <div className="divider">
          <hr/>
        </div>
        <MailingList />
        <SocialMediaIcons />
        {/* <VideoFrame /> */}
      </div>
      <footer className="footer">
        <img className="banner" src="/footertall.jpg" alt=""/>
        <div className="footer-text">
          © {currentYear} Rene, Beats & Coffee
        </div>
      </footer>
    </div>
  );
}

export default App;
