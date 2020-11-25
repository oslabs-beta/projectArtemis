import React, { useState, useEffect } from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';
import useViewController from './utils/useViewController.ts';
import useData from './utils/useData.ts';
import '../style/main-view.css';

const AnalyticsContainer = () => {
  const [queryData, setQueryData] = useState<any>([]);
  // useEffect(() => {
  //   setInterval( async () => {
  //     const data =  await Deno.readTextFileSync("../artemisCache.json");
  //     setQueryData(data);
  //     console.log('hey yo');
  //   }, 2000);
  // }, [])
  const getData = () => {
    fetch('http://localhost:4005/artemis')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // console.log("myJson", myJson.artemis)
        setQueryData(myJson.artemis);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const [viewIndex, updateViewIndex] = useViewController();
  console.log('QUERY DATA:', queryData);

  return (
    <div className="container-main-view">
      <TabBar />
      <AnalyticsBar
        viewIndex={viewIndex}
        updateViewIndex={updateViewIndex}
        queryData={queryData}
      />
    </div>
  );
};

export default AnalyticsContainer;
