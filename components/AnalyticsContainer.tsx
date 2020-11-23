import React, { useState, useEffect } from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';
import useViewController from './utils/useViewController.ts';
import '../style/main-view.css';

import useTest from './utils/useTest.ts';

const AnalyticsContainer = () => {
  const [queryData] = useTest();
  const [viewIndex, updateViewIndex] = useViewController();

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
