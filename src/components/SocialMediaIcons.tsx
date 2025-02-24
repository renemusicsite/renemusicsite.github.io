import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faSpotify, faBandcamp, faSoundcloud, faItunesNote } from '@fortawesome/free-brands-svg-icons';
import "./SocialMediaIcons.css";

function SocialMediaIcons() {
    const icons = [
      { icon: faBandcamp, title: 'Bandcamp', link: 'https://rene.bandcamp.com/' },
      { icon: faSpotify, title: 'Spotify', link: 'https://open.spotify.com/artist/3FKooCA03v1OT8flP2jHR2?si=O8hPFquISrKf90Ek96K2ag' },
      { icon: faItunesNote, title: 'Apple Music', link: 'https://music.apple.com/us/artist/rene/858233' },
      { icon: faSoundcloud, title: 'Soundcloud', link: 'https://www.soundcloud.com/Rene' },
      { icon: faYoutube, title: 'YouTube', link: 'https://www.youtube.com/@renebeatsandcoffee' },
      { icon: faInstagram, title: 'Instagram', link: 'https://www.instagram.com/renecathou' },
    ];
  return (
    <div className="icon-container">
      {icons.map(({ icon, title, link }) => (
        <div className="icon"  key={title}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={styles.icon} key={title} aria-label={`Follow Rene on ${title}`}>
            <FontAwesomeIcon icon={icon} size="2x" className="fa-icon" />
            <div className="icon-title">{title}</div>
            </a>
        </div>
      ))}
    </div>
  );
};

const styles = {
  icon: {
    color: '#6de1ed', // Change color as needed
    textDecoration: 'none',
  },
};

export default SocialMediaIcons;
