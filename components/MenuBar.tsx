import React from "https://esm.sh/react";
import { MenuItems }  from "./containers/MenuItems.tsx"
import { Hamburger, Git, Twit } from "./containers/Logo.tsx"
const MenuBar = () => {
  return (
    <nav className="NavbarItem">
         <h1 className="navbar-logo"><Hamburger /></h1>
         <div className="menu-icon">

        </div>
         <ul>
           {/* maps over the array that holds our links for the menubar */}
           {MenuItems.map((item, index)=> {
             return (

           <li key={index}>
           <a className={item.cName} href={item.url}>
             {item.title}
           </a>
           </li>
             )
            })}
         </ul>
         <Git />
         <Twit />
       </nav>

  );
}

export default MenuBar;


