import React from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';
import useViewController from './utils/useViewController.ts';
import useData from './utils/useData.ts';
import '../style/main-view.css';

const AnalyticsContainer = () => {
  const [viewIndex, updateViewIndex] = useViewController();
  const [queryData] = useData();

  return (
    <div className="container-main-view">
      <TabBar />
      <AnalyticsBar
        viewIndex={viewIndex}
        updateViewIndex={updateViewIndex}
        queryData={queryData}
      />
    </div>
  );
};

export default AnalyticsContainer;
