import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
import useViewController from '../hooks/useViewController.ts';
import { useEffect, useState } from 'https://esm.sh/react';
import calculateMetrics from '../../functions/calculateMetrics.ts'
import '../../style/analyticsContainer.css'

const AnalyticsContainer = () => {
  const [snapshotArray, setSnapshotArray] = useState<any>([]);
  const [aggregateMetrics, setAggregateMetrics] = useState<any>({});

  useEffect(() => {
    fetch('http://localhost:4015/artemis')
      .then((response) => response.json())
      .then((data) => {
        setSnapshotArray(data.artemis)
        const result = calculateMetrics(data.artemis)
        setAggregateMetrics(result)
      })
        .catch((err) => console.error("UseEffect error", err));
  }, []);



  // const [queryData] = useData();
  // const [metrics] = useMetrics([queryData])
  const [viewIndex, updateViewIndex] = useViewController();
  // console.log(metrics)
  return (
    <div className="container-main-view">
      <TabBar viewIndex={viewIndex} updateViewIndex={updateViewIndex} />
      <GraphContainer
        viewIndex={viewIndex}
        updateViewIndex={updateViewIndex}
        snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics}
      />
    </div>
  );
};

export default AnalyticsContainer;
