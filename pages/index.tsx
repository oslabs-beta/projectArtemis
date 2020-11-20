import { Import } from 'https://deno.land/x/aleph/mod.ts';
import React from 'https://esm.sh/react';
import AnalyticsContainer from '../components/AnalyticsContainer.tsx';
import QuerySpeed from '../components/graph/QuerySpeed.tsx';
import SideBar from '../components/SideBar.tsx';

// let's try not to pollute our index.tsx - components that encompass a lot of small components

export default function Home() {
  return (
    <div className="container-gui">
      {/* <Import from="../style/index.css" /> */}
      {/* <SideBar /> */}
      {/* <AnalyticsContainer /> */}
      <QuerySpeed />
    </div>
  );
}
