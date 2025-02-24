import React from 'react';
import "./Navigation.css";

function Navigation() {
  const navItems = [
    // { title: 'Home', route: '/' },
    //   { title: 'Music', route: '/music' },
    //   { title: 'Videos', route: '/video' },
      { title: 'Subscribe', route: '#subscribe' },
    ];

  const navigateHome = () => {
    if(window.innerWidth > 768) {
      window.location.href = '/';
    }
  }

  return (
    <nav className="navigation-container">
      <div className="navigation-items">
        {navItems.map(({ title, route }) => (
            <div className="nav-item"  key={title}>
                <a className="nav-title" href={route}>{title}</a>
            </div>
          ))}
      </div>
      <div className="site-logo">
        <img onClick={navigateHome} className="navigation-logo" src="/BannerText.jpg" alt=""/>
      </div>
    </nav>
  );
}

export default Navigation; 
