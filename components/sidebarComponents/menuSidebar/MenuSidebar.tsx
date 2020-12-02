import React from 'https://esm.sh/react';
import { menuSidebarText } from './menuSidebarText.ts';
import { Hamburger, Git, Twit } from '../Logos.tsx';

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
      <div onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </div>
      <div className="menubar-items_list-links">{menuLinks}</div>
      <div className="menubar-items_social-icons">
        <div className="social-icon">
          <Git />
        </div>
        <div className="social-icon">
          <Twit />
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
