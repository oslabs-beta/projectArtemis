import { useState, useEffect } from 'https://esm.sh/react';
import { Result, Snapshot } from '../typings/data.d.ts';
import calculateMetrics from '../../functions/calculateMetrics.ts';

const useData = () => {
  const [snapshotArray, setSnapshotArray] = useState<[Snapshot] | null>(null);
  const [aggregateMetrics, setAggregateMetrics] = useState<Result | null>(null);
  const [currentSnapshot, setCurrentSnapshot] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:4020/artemis')
      .then((response) => response.json())
      .then((data) => {
        setSnapshotArray(data.artemis);
        const result: Result = calculateMetrics(data.artemis);
        setAggregateMetrics(result);
      })
      .catch((err) => console.error('UseEffect error', err));
  }, []);

  return [
    snapshotArray,
    aggregateMetrics,
    currentSnapshot,
    setCurrentSnapshot,
  ] as const;
};

export default useData;
