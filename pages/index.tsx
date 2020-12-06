import { Import } from 'https://deno.land/x/aleph/mod.ts';
import React from 'https://esm.sh/react';
import AnalyticsContainer from '../components/analyticsComponents/AnalyticsContainer.tsx';
import SideBar from '../components/sidebarComponents/SidebarContainer.tsx';
import useArrow from '../components/hooks/useArrows.ts';
import useViewController from "../components/hooks/useViewController.ts";

export default function Home() {
  const [view, setView] = useViewController();
  // on component mount, adds event listener for the arrow keys
  useArrow(setView);

  return (
    <div className="container-gui">
      <Import from="../style/index.css" />
      <SideBar />
      <AnalyticsContainer view={view} setView={setView}/>
    </div>
  );
}
