import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
import useViewController from '../hooks/useViewController.ts';
import useData from "../hooks/useData.ts";
import '../../style/analyticsContainer.css';

const AnalyticsContainer = () => {
  const [snapshotArray, aggregateMetrics] = useData();
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
