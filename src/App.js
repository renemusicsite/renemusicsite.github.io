import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from "./components/Navigation.tsx";
import MailingList from "./components/MailingList.tsx";
import SocialMediaIcons from "./components/SocialMediaIcons.tsx";
import StreamingIcons from "./components/StreamingIcons.tsx";
import SongSpotlight from "./components/SongSpotlight.tsx";
// import VideoFrame from "./components/VideoFrame.tsx";
// import Menu from "./components/Menu.tsx";

function App() {
  const currentYear = new Date().getFullYear();
  const isMobile = window.innerWidth <= 768;

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
        <SongSpotlight />
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
