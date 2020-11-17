import React from 'https://esm.sh/react';
import { MenuItems }  from "./containers/MenuItems.tsx"
const MenuBar = () => {
  return (

       <nav className="NavbarItem">
         <h1 className="navbar-logo">H</h1>
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
       </nav>

  );
}

export default MenuBar;


