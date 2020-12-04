import React from 'https://esm.sh/react';
import Tab from './Tab.tsx';

interface Props {
  view: number;
  setView: (action: string | number) => void;
}

const TabBar = (props: Props) => {
  const { view, setView } = props;
  const tabs = [
    'Latency',
    'Success Rate',
    'Data Size',
    'APIs',
  ];

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
