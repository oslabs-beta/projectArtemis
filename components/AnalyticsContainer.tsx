import React, { useState, useEffect } from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';
import useViewController from './utils/useViewController.ts';
import '../style/main-view.css';

const createData = (() => {
  let count = 0;
  return () => {
    count += 1;
    return {
      [`query${count}`]: Math.random(),
    };
  };
})();

const AnalyticsContainer = () => {
  const [queryData, setQueryData] = useState([]);
  const [viewIndex, updateViewIndex] = useViewController();

  useEffect(() => {
    setInterval(() => {
      setQueryData((prevQueryData) => [...prevQueryData, createData()]);
    }, 5000);
  }, []);

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
