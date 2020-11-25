import React, { useState } from 'https://esm.sh/react';
import MenuBar from './menubar-container/MenuBar.tsx';
import ListOfQueries from './menubar-container/ListOfQueries.tsx';
import '../style/sidebar.css';

const SideBar = () => {
  // be able to swap between two different menus
  // pass down to state as props so components can toggle state
  const [toggle, setToggle] = useState<boolean>(true);

  return toggle ? (
    <MenuBar toggle={toggle} setToggle={setToggle} />
  ) : (
    <ListOfQueries toggle={toggle} setToggle={setToggle} />
  );
};

export default SideBar;
