import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faBandcamp, faItunesNote, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./StreamingIcons.css";

function StreamingIcons() {
  const icons = [
    { icon: faSpotify, title: 'Spotify', link: 'https://open.spotify.com/track/6nYLzE7OOmwtGvrojUwf56?si=8fad3e3ae0604699' },
    { icon: faItunesNote, title: 'Apple Music', link: 'https://music.apple.com/us/album/perfectdark-single/1789980707' },
    { icon: faBandcamp, title: 'Bandcamp', link: 'https://rene.bandcamp.com/track/perfectdark' },
    ];
  return (
    <div className="streaming-wrapper">
      <div className="streaming-icon-container">
        {icons.map(({ icon, title, link }) => (
        <div className="icon-item"  key={title}>
          <a href={link} target="_blank" className="streaming-link" rel="noopener noreferrer" aria-label={`Listen on ${title}`} style={styles.icon} key={title}>
            <div className="icon">
              <FontAwesomeIcon icon={icon} size="3x" className="fa-icon" />
            </div>
            <div className="streaming-icon-title">{title}</div>
            <div className="listen">Listen</div>
          </a>
        </div>
        ))}
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
