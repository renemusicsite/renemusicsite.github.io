import './App.css';
import React, {useEffect} from "react"
import MailingList from "./components/MailingList.tsx";
import SocialMediaIcons from "./components/SocialMediaIcons.tsx";
import VideoFrame from "./components/VideoFrame.tsx";
import Menu from "./components/Menu.tsx";

function App() {
  const currentYear = new Date().getFullYear();
  let imgCountLoaded = 0;

  const addAnimation = () => {
    imgCountLoaded++;
    
    if(imgCountLoaded == 2) {
      const appDiv = document.querySelector('.App');
      appDiv.classList.add('loaded');
    }
  }

  return (
    <div className="App">
      <header className="App-header header">
        <img onLoad={addAnimation} className="banner" src="/BannerText.jpg" alt=""/>
        {/* <Menu /> */}
      </header>
      <div className="site-content">
        <MailingList />
        <SocialMediaIcons />
        {/* <VideoFrame /> */}
      </div>
      <footer className="footer">
        <img onLoad={addAnimation} className="banner" src="/footertall.jpg" alt=""/>
        <div className="footer-text">
          © {currentYear} Rene, Beats & Coffee
        </div>
      </footer>
    </div>
  );
}

export default App;
