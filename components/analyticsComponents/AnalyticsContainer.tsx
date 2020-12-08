import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
import { Action, InitialState } from '../typings/viewController.d.ts';
import ClientQuery from './query/ClientQuery.tsx';
import '../../style/analyticsContainer.css';
import { Result, Snapshot } from '../typings/data.d.ts';

interface Props {
  view: InitialState;
  setView: React.Dispatch<Action>;
  snapshotArray: [Snapshot] | null;
  aggregateMetrics: Result | null;
  setSnapshotArray: any;
  setAggregateMetrics: any;
}

const AnalyticsContainer = (props: Props) => {
  const {
    view,
    setView,
    snapshotArray,
    aggregateMetrics,
    setSnapshotArray,
    setAggregateMetrics,
  } = props;

  return (
    <div className="container-main-view">
      <TabBar view={view} setView={setView} />
      <GraphContainer
        view={view}
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
