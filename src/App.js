import './App.css';
import React from "react"
import MailingList from "./components/MailingList.tsx";
import SocialMediaIcons from "./components/SocialMediaIcons.tsx";
import VideoFrame from "./components/VideoFrame.tsx";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header header">
        <img className="banner" src="/BannerText.jpg" alt=""/>
      </header>
      <div className="site-content">
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
