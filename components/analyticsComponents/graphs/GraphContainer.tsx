import React from 'https://esm.sh/react';
import LatencyGraph from './LatencyGraph.tsx';
import QuerySuccessFailureGraph from './QuerySuccessFailureGraph.tsx';
import DataSizeGraph from './DataSizeGraph.tsx';
import QueryPerAPIGraph from './QueryPerAPIGraph.tsx'
import '../../../style/graphs.css';

interface Props {
  viewIndex: number;
  updateViewIndex: (action: string | number) => void;
  snapshotArray: object | null;
  aggregateMetrics: object | null;
}

const GraphContainer = (props: Props) => {
  const { viewIndex, updateViewIndex, snapshotArray, aggregateMetrics } = props;

  return (
    <>
      <div className="container-analytics">
        {viewIndex === 0 && <LatencyGraph snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics} />}
        {viewIndex === 1 && <QuerySuccessFailureGraph aggregateMetrics={aggregateMetrics} />}
        {viewIndex === 2 && <DataSizeGraph snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics} />}
        {viewIndex === 3 && <QueryPerAPIGraph aggregateMetrics={aggregateMetrics} />}
      </div>
      <button
        id="increment"
        className='hidden-view-buttons'
        onClick={() => updateViewIndex('increment')}
      ></button>
      <button
        id="decrement"
        className='hidden-view-buttons'
        onClick={() => updateViewIndex('decrement')}
      ></button>
    </>
  );
};

export default GraphContainer;
