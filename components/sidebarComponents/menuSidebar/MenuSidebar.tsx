import React from 'https://esm.sh/react';
import { menuSidebarText } from './menuSidebarText.ts';
import { Hamburger, Git, Twit, Deno } from '../Logos.tsx';

interface Props {
  setToggle: (Boolean: boolean) => void;
  toggle: boolean;
}

const MenuSidebar = (props: Props) => {
  const { toggle, setToggle } = props;

  // get link info from data folder within menubar-container
  const menuLinks = menuSidebarText.map((linkInfo, index) => (
    <div className="wrapper_navLinks" key={index}>
      <a className="sidebar_nav-links" href={linkInfo.url}>
        {linkInfo.title}
      </a>
    </div>
  ));

  return (
    <div className="flex-menubar container-sidebar">
      <div className= 'hamburger' onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </div>
      <div className="menubar-items_list-links">{menuLinks}</div>
      <div className="menubar-items_social-icons">
        <div className="social-icon">
          <a href="https://github.com/oslabs-beta/projectArtemis" target="_blank"><Git /></a>
        </div>
        <div className="social-icon">
         <a href="https://twitter.com/Artemis_Proj" target="_blank"><Twit /></a>
        </div>
        {/* <div className="social-icon">
      <a href="https://twitter.com/Artemis_Proj" target="_blank"><Deno /></a>
        </div> */}
      </div>
    </div>
  );
};

export default MenuSidebar;
