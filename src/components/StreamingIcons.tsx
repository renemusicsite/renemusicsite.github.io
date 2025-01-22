import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faBandcamp, faItunesNote, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./StreamingIcons.css";

function StreamingIcons() {
  const icons = [
    { icon: faSpotify, title: 'Spotify', link: 'https://open.spotify.com/track/6sZFziOX3czLINf7FrQMCt?si=9116bdbd2b80402e' },
    { icon: faItunesNote, title: 'Apple Music', link: 'https://music.apple.com/us/album/unraveling-single/1788722071' },
    { icon: faBandcamp, title: 'Bandcamp', link: 'https://rene.bandcamp.com/track/unraveling' },
      // { icon: faYoutube, title: 'YouTube', link: 'https://www.youtube.com/@renebeatsandcoffee' },
    ];
  return (
    <div className="streaming-wrapper">
      <div className="streaming-icon-container">
        {icons.map(({ icon, title, link }) => (
        <div className="icon-item"  key={title}>
          <a href={link} target="_blank" className="streaming-link" rel="noopener noreferrer" style={styles.icon} key={title}>
            <div className="icon">
              <FontAwesomeIcon icon={icon} size="3x" className="fa-icon" />
            </div>
            <div className="streaming-icon-title">{title}</div>
            <div className="listen">Listen</div>
          </a>
        </div>
        ))}
        {/* <div className="icon-item">
          <a href="https://tidal.com/browse/artist/41378693" className="streaming-link" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#479cff" width="50px" height="45px" viewBox="0 0 32 32">
              <path d="M16.016 5.323l-5.339 5.339-5.339-5.339-5.339 5.339 5.339 5.339 5.339-5.339 5.339 5.339-5.339 5.339 5.339 5.339 5.339-5.339-5.339-5.339 5.339-5.339zM21.391 10.661l5.302-5.307 5.307 5.307-5.307 5.307z"/>
            </svg>
            </div>
            <div className="streaming-icon-title">Tidal</div>
            <div className="listen">Listen</div>
          </a>
        </div> */}
        {/* <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#479cff" width="50px" height="45px" viewBox="0 0 32 32">
            <path d="M16.016 5.323l-5.339 5.339-5.339-5.339-5.339 5.339 5.339 5.339 5.339-5.339 5.339 5.339-5.339 5.339 5.339 5.339 5.339-5.339-5.339-5.339 5.339-5.339zM21.391 10.661l5.302-5.307 5.307 5.307-5.307 5.307z"/>
          </svg>
          <div className="streaming-icon-title">Tidal</div>
        </div> */}
      </div>
    </div>
  );
};

const styles = {
  icon: {
    color: '#479cff',
    textDecoration: 'none',
  },
};

export default StreamingIcons;
