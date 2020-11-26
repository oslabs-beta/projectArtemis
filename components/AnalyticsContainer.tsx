import React from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';
import useViewController from './utils/useViewController.ts';
import useData from './utils/useData.ts';
import '../style/main-view.css';

const AnalyticsContainer = () => {
  const [queryData] = useData();
  const [viewIndex, updateViewIndex] = useViewController();

  return (
    <div className="container-main-view">
      <TabBar viewIndex={viewIndex} updateViewIndex={updateViewIndex} />
      <AnalyticsBar
        viewIndex={viewIndex}
        updateViewIndex={updateViewIndex}
        queryData={queryData}
      />
    </div>
  );
};

export default AnalyticsContainer;
