import React from "https://esm.sh/react";
import TabBar from "./tabs/TabBar.tsx";
import GraphContainer from "./graphs/GraphContainer.tsx";
import useData from "../hooks/useData.ts";
import ClientQuery from "./query/ClientQuery.tsx";
import "../../style/analyticsContainer.css";
import { Action, InitialState } from "../typings/viewController.d.ts";

interface Props {
  view: InitialState;
  setView: React.Dispatch<Action>;
}

const AnalyticsContainer = (props: Props) => {
  const { view, setView } = props;
  const [snapshotArray, aggregateMetrics] = useData();

  return (
    <div className="container-main-view">
      <TabBar view={view} setView={setView} />
      <GraphContainer
        view={view}
        snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics}
      />
      <ClientQuery
        // setSnapshotArray={setSnapshotArray}
        // setAggregateMetrics={setAggregateMetrics}
        snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics}
      />
    </div>
  );
};

export default AnalyticsContainer;
