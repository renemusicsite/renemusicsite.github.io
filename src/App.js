import './App.css';
import React from "react"
import MailingList from "./components/MailingList.tsx";
import SocialMediaIcons from "./components/SocialMediaIcons.tsx";
import VideoFrame from "./components/VideoFrame.tsx";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img className="banner" src="/bannertext.jpg" alt=""/>
      </header>
      <div className="site-content">
        <MailingList />
        <SocialMediaIcons />
        {/* <VideoFrame /> */}
      </div>
      <footer>
        <img className="banner" src="/footertall.jpg" alt=""/>
      </footer>
      <div className="footer-text">
        © {currentYear} Rene, Beats & Coffee
      </div>
    </div>
  );
}

export default App;
