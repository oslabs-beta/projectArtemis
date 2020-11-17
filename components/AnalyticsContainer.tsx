import React from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';


const Main = () => {
  return (
    <div className='container-main'>
      <TabBar />
      <AnalyticsBar />
    </div>
  );
}

export default Main;
