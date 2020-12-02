import React, { useState } from 'https://esm.sh/react';
import MenuSidebar from './menuSidebar/MenuSidebar.tsx';
import SnapshotSidebar from './snapshotSidebar/SnapshotSidebar.tsx';
import '../../style/sidebar.css';

const SideBar = () => {
  // be able to swap between two different menus
  // pass down to state as props so components can toggle state
  const [toggle, setToggle] = useState<boolean>(true);

  return toggle ? (
    <MenuSidebar toggle={toggle} setToggle={setToggle} />
  ) : (
    <SnapshotSidebar toggle={toggle} setToggle={setToggle} />
  );
};

export default SideBar;
