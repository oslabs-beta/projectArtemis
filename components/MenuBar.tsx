import React from "https://esm.sh/react";
import { MenuItems }  from "./menubar-container/MenuItems.tsx"
import { Hamburger, Git, Twit } from "./Logos.tsx"
const MenuBar = () => {
  return (
    <div className="menu-items">
      <Hamburger />
      <ul className='menubar-items_list-links'>
        {/* maps over the array that holds our links for the menubar */}
        <div className="menubar-sublist">
        {MenuItems.map((item, index)=> {
          return (
          <li key={index} style={{"marginTop": "10px"}}>
          <a className={item.cName} href={item.url}>
          {item.title}
          </a>
          </li>
        )})}
      </div>
      </ul>
      <div className='menubar-items_social-icons'>
        <Git />
        <Twit />
      </div>
    </div>
  );
}

export default MenuBar;
