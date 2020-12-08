import { useEffect, useState } from "https://esm.sh/react";
import { Result, Snapshot } from "../typings/data.d.ts";
import calculateMetrics from "../../functions/calculateMetrics.ts";

const useData = () => {
  const [snapshotArray, setSnapshotArray] = useState<[Snapshot] | null>(null);
  const [aggregateMetrics, setAggregateMetrics] = useState<Result | null>(null);

  useEffect(() => {
    fetch("http://localhost:4020/artemis")
      .then((response) => response.json())
      .then((data) => {
        setSnapshotArray(data);
        const result: Result = calculateMetrics(data);
        setAggregateMetrics(result);
      })
      .catch((err) => console.error("UseEffect error", err));
  }, []);

  return [snapshotArray, aggregateMetrics, setSnapshotArray, setAggregateMetrics] as const;
};

export default useData;
