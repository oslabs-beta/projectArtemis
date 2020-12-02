import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
import useViewController from '../hooks/useViewController.ts';
import { useEffect, useState } from 'https://esm.sh/react';
import calculateMetrics from '../../functions/calculateMetrics.ts';
import '../../style/analyticsContainer.css';

interface Result {
  apis: {};
  latencyAvg: string;
  latencyMax: string;
  sizeAvg: string;
  sizeMax: string;
  queryTotal: any;
  queryFrequency: number;
  errorFrequency: number;
}

interface Snapshot {
  api: string;
  latency: number;
  dataSize: number;
  requestedFields: [];
  successfulQuery: boolean;
  errors: {
    messages: string;
    locations: [{ line: number; column: number }];
  };
  extensions: { code: string };
}

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
    </div>
  );
};

export default AnalyticsContainer;
