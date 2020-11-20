import React, { useState } from 'https://esm.sh/react';
import MenuBar from './MenuBar.tsx';
import ListOfQueries from './menubar-container/ListOfQueries.tsx';

const SideBar = () => {
  // be able to swap between two different menus
  const [toggle, setToggle] = useState<boolean>(true);

  return toggle ? (
    <MenuBar toggle={toggle} setToggle={setToggle} />
  ) : (
    <ListOfQueries toggle={toggle} setToggle={setToggle} />
  );
};

export default SideBar;
