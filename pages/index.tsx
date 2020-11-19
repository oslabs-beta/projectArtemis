import { Import } from 'https://deno.land/x/aleph/mod.ts';
import React, { useState } from 'https://esm.sh/react';
import MenuBar from '../components/MenuBar.tsx';
import AnalyticsContainer from '../components/AnalyticsContainer.tsx';
import ListOfQueries from '../components/menubar-container/ListOfQueries.tsx';

// let's try not to pollute our index.tsx - components that encompass a lot of small components

export default function Home() {
  const [state, setState] = useState(true);
  return (
    <div className="container-gui">
      <Import from="../style/index.css" />
      {state ? (
        <MenuBar state={state} setState={setState} />
      ) : (
        <ListOfQueries state={state} setState={setState} />
      )}
      <AnalyticsContainer />
    </div>
  );
}
