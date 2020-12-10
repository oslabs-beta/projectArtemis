import React from "https://esm.sh/react";
import ResponseTimeGraph from "./ResponseTimeGraph.tsx";
import QuerySuccessFailureGraph from "./QuerySuccessFailureGraph.tsx";
import DataSizeGraph from "./DataSizeGraph.tsx";
import QueryPerAPIGraph from "./QueryPerAPIGraph.tsx";
import QuerySnapShot from "./QuerySnapshot.tsx";
import { InitialState } from "../../typings/viewController.d.ts";
import { Result, Snapshot } from "../../typings/data.d.ts";
import "../../../style/graphs.css";

interface Props {
  view: InitialState;
  snapshotArray: [Snapshot] | [];
  aggregateMetrics: Result | any;
}

const GraphContainer = (props: Props) => {
  const { view, snapshotArray, aggregateMetrics } = props;

  return (
    <>
      <div className="container-analytics">
        {view === 0 && (
          <ResponseTimeGraph
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
        {view === 4 && <QuerySnapShot snapshotArray={snapshotArray} />}
      </div>
    </>
  );
};

export default GraphContainer;
