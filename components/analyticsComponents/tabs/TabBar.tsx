import React from 'https://esm.sh/react';
import Tab from './Tab.tsx';
import { InitialState, Action } from '../../typings/viewController.d.ts';

interface Props {
  view: InitialState;
  setView: React.Dispatch<Action>;
}

const TabBar = (props: Props) => {
  const { view, setView } = props;
  const tabs = ['Latency', 'Success Rate', 'Data Size', 'APIs'];

  return (
    <div className="container-tab">
      {tabs.map((label, i) => {
        return (
          <Tab
            label={label}
            highlight={view === i ? true : null}
            view={view}
            index={i}
            length={tabs.length - 1}
            setView={setView}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default TabBar;
