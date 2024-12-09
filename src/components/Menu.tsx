import React from 'react';
import "./Menu.css";

function Menu() {
    const menuItems = [
      {name:'Home'},
      {name:'Music'},
      {name:'Videos'},
      {name:'About'}
      ];
  return (
    <div className="menu-container">
      {menuItems.map(({ name }) => (
        <div className="menu-item" key={name}>
            <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
