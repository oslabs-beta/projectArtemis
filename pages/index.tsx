import { Import } from 'https://deno.land/x/aleph/mod.ts';
import React, { useState, useEffect } from 'https://esm.sh/react';
import AnalyticsContainer from '../components/AnalyticsContainer.tsx';
import QuerySpeed from '../components/graph/QuerySpeed.tsx';
import SideBar from '../components/SideBar.tsx';

// let's try not to pollute our index.tsx - components that encompass a lot of small components

const createData = (() => {
  let count = 0;
  return () => {
    count += 1;
    return {
      [`query${count}`]: Math.random(),
    };
  };
})();

export default function Home() {
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setQueryData((prevQueryData) => [...prevQueryData, createData()]);
    }, 5000);
  }, []);

  return (
    <div className="container-gui">
      {/* <Import from="../style/index.css" /> */}
      {/* <SideBar /> */}
      {/* <AnalyticsContainer /> */}
      <QuerySpeed queryData={queryData}/>
    </div>
  );
}
