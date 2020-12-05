import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
import useViewController from '../hooks/useViewController.ts';
import { useEffect, useState } from 'https://esm.sh/react';
import calculateMetrics from '../../functions/calculateMetrics.ts'
import '../../style/analyticsContainer.css'
import ClientQuery from "./query/ClientQuery.tsx";

const AnalyticsContainer = () => {
  const [snapshotArray, setSnapshotArray] = useState([]);
  const [aggregateMetrics, setAggregateMetrics] = useState({});

  useEffect(() => {
    fetch('http://localhost:4015/artemis')
      .then((response) => response.json())
      .then((data) => {
        setSnapshotArray(data)
        const result = calculateMetrics(data)
        setAggregateMetrics(result)
      })
        .catch((err) => console.error("UseEffect error", err));
  }, []);

  const [viewIndex, updateViewIndex] = useViewController();
  return (
    <div className="container-main-view">
      <TabBar viewIndex={viewIndex} updateViewIndex={updateViewIndex} />
      <GraphContainer
        viewIndex={viewIndex}
        updateViewIndex={updateViewIndex}
        snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics}
      />
      <ClientQuery
        setSnapshotArray={setSnapshotArray}
        setAggregateMetrics={setAggregateMetrics}
        snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics}
      />
    </div>
  );
};

export default AnalyticsContainer;
