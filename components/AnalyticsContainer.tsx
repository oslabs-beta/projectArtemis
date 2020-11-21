import React from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';
import '../style/main-view.css';

const AnalyticsContainer = () => {
  return (
    <div className="container-main-view">
      <TabBar />
      <AnalyticsBar />
    </div>
  );
};

export default AnalyticsContainer;
