import { Import } from 'https://deno.land/x/aleph/mod.ts';
import React from 'https://esm.sh/react';
import AnalyticsContainer from '../components/analyticsComponents/AnalyticsContainer.tsx';
import SideBar from '../components/sidebarComponents/SidebarContainer.tsx';
import useArrow from '../components/hooks/useArrows.ts';
import useViewController from '../components/hooks/useViewController.ts';
import useData from '../components/hooks/useData.ts';
import ContextQuery from '../components/hooks/useContextQuery.tsx';

export default function Home() {
  const [
    snapshotArray,
    aggregateMetrics,
    setSnapshotArray,
    setAggregateMetrics
  ] = useData();
  const [view, setView] = useViewController();
  // on component mount, adds event listener for the arrow keys
  useArrow(setView);

  return (
    <div className="container-gui">
      <Import from="../style/index.css" />
      <ContextQuery>
        <SideBar
          snapshotArray={snapshotArray}
          setView={setView}
        />
        <AnalyticsContainer
          snapshotArray={snapshotArray}
          aggregateMetrics={aggregateMetrics}
          setSnapshotArray={setSnapshotArray}
          setAggregateMetrics={setAggregateMetrics}
          view={view}
          setView={setView}
        />
      </ContextQuery>
    </div>
  );
}
