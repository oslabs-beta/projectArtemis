import { useEffect, useState } from "https://esm.sh/react";
import { Result, Snapshot } from "../typings/data.d.ts";
import calculateMetrics from "../../functions/calculateMetrics.ts";
import { array } from "https://esm.sh/@types/prop-types@15.7.3/index.d.ts";

const useData = () => {
  const [snapshotArray, setSnapshotArray] = useState<[Snapshot] | null>(null);
  const [aggregateMetrics, setAggregateMetrics] = useState<Result | null>(null);

  useEffect(async () => {
    const artemis = JSON.parse(localStorage.getItem("artemis"));
    if (!Array.isArray(artemis)) {
      localStorage.setItem("artemis", JSON.stringify([]));
    } else {
      if (artemis.length > 0) {
        setSnapshotArray(artemis);
        const result = calculateMetrics(artemis);
        setAggregateMetrics(result);
        console.log(aggregateMetrics);
      }
    }
    await console.log(
      "Local Storage Use Effect",
      JSON.parse(localStorage.getItem("artemis")),
    );
    // fetch("http://localhost:4020/artemis")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setSnapshotArray(data);
    //     const result: Result = calculateMetrics(data);
    //     setAggregateMetrics(result);
    //   })
    //   .catch((err) => console.error("UseEffect error", err));
  }, []);

  return [
    snapshotArray,
    aggregateMetrics,
    setSnapshotArray,
    setAggregateMetrics,
  ] as const;
};

export default useData;
