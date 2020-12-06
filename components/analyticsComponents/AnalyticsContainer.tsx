import React from 'https://esm.sh/react';
import TabBar from './tabs/TabBar.tsx';
import GraphContainer from './graphs/GraphContainer.tsx';
// import useViewController from '../hooks/useViewController.ts';
import useData from '../hooks/useData.ts';
import '../../style/analyticsContainer.css';
import { Action, InitialState } from '../typings/viewController.d.ts';

interface Props {
  view: InitialState;
  setView: React.Dispatch<Action>;
}

<<<<<<< HEAD
const AnalyticsContainer = (props: Props) => {
  const { view, setView } = props;
  const [snapshotArray, aggregateMetrics] = useData();
=======
interface Snapshot {
  api: string;
  latency: number;
  dataSize: number;
  requestedFields: [];
  successfulQuery: boolean;
  errors: {
    messages: string;
    locations: [{ line: number; column: number }];
  };
  extensions: { code: string };
}

const AnalyticsContainer = () => {
  const [snapshotArray, setSnapshotArray] = useState<[Snapshot] | null>(null);
  const [aggregateMetrics, setAggregateMetrics] = useState<Result | null>(null);

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
  const [viewIndex, updateViewIndex] = useViewController();
>>>>>>> 46db2755975e8d0a621472403621888c4f13d687

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
