import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
import useViewController from '../hooks/useViewController.ts';
import { useEffect, useState } from 'https://esm.sh/react';
import calculateMetrics from '../../functions/calculateMetrics.ts';
import { Result, Snapshot } from '../typings/data.d.ts';
import '../../style/analyticsContainer.css';

const AnalyticsContainer = () => {
  const [snapshotArray, setSnapshotArray] = useState<[Snapshot] | null>(null);
  const [aggregateMetrics, setAggregateMetrics] = useState<Result | null>(null);

  useEffect(() => {
    fetch('http://localhost:4015/artemis')
      .then((response) => response.json())
      .then((data) => {
        setSnapshotArray(data.artemis);
        const result: Result = calculateMetrics(data.artemis);
        setAggregateMetrics(result);
      })
      .catch((err) => console.error('UseEffect error', err));
  }, []);
  const [view, setView] = useViewController();

  return (
    <div className="container-main-view">
      <TabBar view={view} setView={setView} />
      <GraphContainer
        view={view}
        setView={setView}
        snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics}
      />
    </div>
  );
};

export default AnalyticsContainer;
