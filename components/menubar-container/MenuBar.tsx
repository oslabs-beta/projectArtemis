import React from 'https://esm.sh/react';
import { MenuItems } from './data/MenuItems.ts';
import { Hamburger, Git, Twit } from '../Logos.tsx';

interface Props {
  setToggle: (Boolean: boolean) => void;
  toggle: boolean;
}

const MenuBar = (props: Props) => {
  const { toggle, setToggle } = props;

  return (
    <div className="flex-menubar container-sidebar">
      <div onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </div>
      <div className="menubar-items_list-links">
        {/* maps over the array that holds our links for the menubar */}
        {MenuItems.map((item, index) => {
          return (
            <div key={index} style={{ marginTop: '10px' }}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
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

export default MenuBar;
