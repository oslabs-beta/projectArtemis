import React from 'https://esm.sh/react';
import Tab from './tabs/Tab.tsx';

const TabBar = () => {
  const tabs = ['Latency', 'Speed', 'Query', 'Other', 'Thing', 'One More Thing'];

  return (
    <div className="container-tab">
      {tabs.map((label, i) => {
        return <Tab label={label} index={i} length={tabs.length} key={i} />;
      })}
    </div>
  );
};

export default TabBar;
