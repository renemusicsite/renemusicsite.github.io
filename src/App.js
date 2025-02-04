import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navigation from "./components/Navigation.tsx";
import MailingList from "./components/MailingList.tsx";
import SocialMediaIcons from "./components/SocialMediaIcons.tsx";
import SongSpotlight from "./components/SongSpotlight.tsx";
// import VideoFrame from "./components/VideoFrame.tsx";
// import Menu from "./components/Menu.tsx";

function App() {
  const currentYear = new Date().getFullYear();
  const isMobile = window.innerWidth <= 768;

  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/renemusicart.matomo.cloud/container_9l9LxAMZ.js'; s.parentNode.insertBefore(g,s);
   }, [])

  return (
    <div className="App">
      <header className="App-header header">
        {/* <img onLoad={addAnimation} className="banner" src="/BannerText.jpg" alt=""/> */}
        {/* <Menu /> */}
      </header>
      <div className="video-container">
      {
        !isMobile ? 
          (<video className="background-video" autoPlay muted loop>
            <source src="/PerfectDarkSquareVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>)
        : 
          (<img className="background-image"  src="/PerfectDark.jpg"/>)
      }
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
