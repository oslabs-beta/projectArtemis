import { Import } from 'https://deno.land/x/aleph/mod.ts';
import React from 'https://esm.sh/react';
import AnalyticsContainer from '../components/analyticsComponents/AnalyticsContainer.tsx';
import SideBar from '../components/sidebarComponents/SidebarContainer.tsx';
import useArrow from '../components/hooks/useArrows.ts';

// let's try not to pollute our index.tsx - components that encompass a lot of small components
// testing, testing

export default function Home() {
  // on component mount, adds event listener for the arrow keys
  useArrow();

  return (
    <div className="container-gui">
      <Import from="../style/index.css" />
      <SideBar />
      <AnalyticsContainer />
    </div>
  );
}
