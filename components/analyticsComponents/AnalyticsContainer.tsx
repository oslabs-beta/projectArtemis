import React from "https://esm.sh/react";
import TabBar from "./tabs/TabBar.tsx";
import GraphContainer from "./graphs/GraphContainer.tsx";
import useViewController from "../hooks/useViewController.ts";
import { useEffect, useState } from "https://esm.sh/react";
import calculateMetrics from "../../functions/calculateMetrics.ts";
import "../../style/analyticsContainer.css";
import ClientQuery from "./query/ClientQuery.tsx";

const AnalyticsContainer = () => {
  const [snapshotArray, setSnapshotArray] = useState([]);
  const [aggregateMetrics, setAggregateMetrics] = useState({});

  useEffect(() => {
    console.log("UseEffect fired");
    fetch("http://localhost:4015/artemis")
      .then((response) => response.json())
      .then((data) => {
        setSnapshotArray(data);
        const result = calculateMetrics(data);
        setAggregateMetrics(result);
      })
      .catch((err) => console.error("UseEffect error", err));
  }, []);

  const [viewIndex, updateViewIndex] = useViewController();
import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
import useData from '../hooks/useData.ts';
import '../../style/analyticsContainer.css';
import { Action, InitialState } from '../typings/viewController.d.ts';

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
        setSnapshotArray={setSnapshotArray}
        setAggregateMetrics={setAggregateMetrics}
        snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics}
      />
    </div>
  );
};

export default AnalyticsContainer;
