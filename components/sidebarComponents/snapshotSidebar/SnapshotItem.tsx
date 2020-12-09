import React, { useContext } from 'https://esm.sh/react';
import { QueryContext } from "../../hooks/useContextQuery.tsx";
import { Action } from '../../typings/viewController.d.ts';

interface Props {
  index: number;
  setView: React.Dispatch<Action>;
}

const SnapshotItem = (props: Props) => {
  const { setQueryNumber } = useContext(QueryContext);
  const { index, setView } = props;
  return (
    <h1
      className="snapshots_list_item"
      onClick={() => {
        setQueryNumber(index);
        setView({ type: 'SET', payload: 4 });
      }}
    >{`Query ${index}`}</h1>
  );
};

export default SnapshotItem;
