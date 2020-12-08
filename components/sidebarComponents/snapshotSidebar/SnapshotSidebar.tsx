import React, { useState } from 'https://esm.sh/react';
import { Snapshot } from '../../typings/data.d.ts';
import { Hamburger } from '../Logos.tsx';

interface Props {
  setToggle: (Boolean: boolean) => void;
  toggle: boolean;
  snapshotArray: [Snapshot] | null;
}

// TODO fix query expanding without restrictions
// TODO fix query list formatting queries_list
const ListOfQueries = (props: Props) => {
  const { toggle, setToggle, snapshotArray } = props;
  const [snapShots] = useState(snapshotArray);

  return (
    <div className="flex-menubar container-snapshots">
      <div onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </div>
      <div className="snapshots_list">
        {snapShots ? (
          snapShots.reduce((acc: JSX.Element[], curr: Snapshot, index) => {
            acc.push(
              <h1
                className="snapshots_list_item"
                key={index}
              >{`Query ${index}`}</h1>
            );
            return acc;
          }, [])
        ) : (
          <div>Hello</div>
        )}
      </div>
    </div>
  );
};

export default ListOfQueries;
