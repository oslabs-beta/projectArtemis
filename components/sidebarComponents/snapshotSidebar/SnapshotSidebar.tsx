import React, { useState } from 'https://esm.sh/react';
import SnapshotItem from './SnapshotItem.tsx';
import { Snapshot } from '../../typings/data.d.ts';
import { Action } from '../../typings/viewController.d.ts';
import { Hamburger } from '../Logos.tsx';

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
  snapshotArray: [Snapshot] | null;
  setView: React.Dispatch<Action>;
}

const ListOfQueries = (props: Props) => {
  const {
    toggle,
    setToggle,
    snapshotArray,
    setView,
  } = props;
  const [snapShots] = useState(snapshotArray);

  return (
    <div className="flex-menubar container-snapshots">
      <div className= 'hamburger' onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </div>
      <div className="snapshots_list">
        {snapShots ? (
          snapShots.reduce((acc: JSX.Element[], curr: Snapshot, index) => {
            acc.push(
              <SnapshotItem
                index={index}
                setView={setView}
                key={index}
              />
            );
            return acc;
          }, [])
        ) : (
          <h1 className="snapshots_list">Empty</h1>
        )}
      </div>
    </div>
  );
};

export default ListOfQueries;
