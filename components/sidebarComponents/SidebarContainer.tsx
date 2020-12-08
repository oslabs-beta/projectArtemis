import React, { useState } from 'https://esm.sh/react';
import MenuSidebar from './menuSidebar/MenuSidebar.tsx';
import SnapshotSidebar from './snapshotSidebar/SnapshotSidebar.tsx';
import { Snapshot } from '../typings/data.d.ts';
import '../../style/sidebar.css';

interface Props {
  snapshotArray: [Snapshot] | null;
}

const SideBar = (props: Props) => {
  const { snapshotArray } = props;
  // be able to swap between two different menus
  // pass down to state as props so components can toggle state
  const [toggle, setToggle] = useState(true);

  return toggle ? (
    <MenuSidebar toggle={toggle} setToggle={setToggle} />
  ) : (
    <SnapshotSidebar toggle={toggle} setToggle={setToggle} snapshotArray={snapshotArray} />
  );
};

export default SideBar;
