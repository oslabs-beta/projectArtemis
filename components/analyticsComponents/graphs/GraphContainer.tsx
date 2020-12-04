import React from 'https://esm.sh/react';
import LatencyGraph from './LatencyGraph.tsx';
import QuerySuccessFailureGraph from './QuerySuccessFailureGraph.tsx';
import DataSizeGraph from './DataSizeGraph.tsx';
import QueryPerAPIGraph from './QueryPerAPIGraph.tsx';
import { Action, InitialState } from '../../typings/viewController.d.ts';
import { Result, Snapshot } from '../../typings/data.d.ts';
import '../../../style/graphs.css';

interface Props {
  view: InitialState;
  setView: React.Dispatch<Action>;
  snapshotArray: [Snapshot] | null;
  aggregateMetrics: Result | null;
}

const GraphContainer = (props: Props) => {
  const { view, setView, snapshotArray, aggregateMetrics } = props;

  return (
    <>
      <div className="container-analytics">
        {view === 0 && (
          <LatencyGraph
            snapshotArray={snapshotArray}
            aggregateMetrics={aggregateMetrics}
          />
        )}
        {view === 1 && (
          <QuerySuccessFailureGraph aggregateMetrics={aggregateMetrics} />
        )}
        {view === 2 && (
          <DataSizeGraph
            snapshotArray={snapshotArray}
            aggregateMetrics={aggregateMetrics}
          />
        )}
        {view === 3 && <QueryPerAPIGraph aggregateMetrics={aggregateMetrics} />}
      </div>
      <button
        id="increment"
        className="hidden-view-buttons"
        onClick={() => setView({ type: 'NEXT' })}
      ></button>
      <button
        id="decrement"
        className="hidden-view-buttons"
        onClick={() => setView({ type: 'PREV' })}
      ></button>
    </>
  );
};

export default GraphContainer;
