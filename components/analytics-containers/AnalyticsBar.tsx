import React, { useState, useEffect } from 'https://esm.sh/react';
import QuerySpeed from '../graphs/QuerySpeed.tsx';

const createData = (() => {
  let count = 0;
  return () => {
    count += 1;
    return {
      [`query${count}`]: Math.random(),
    };
  };
})();

const AnalyticsBar = () => {
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setQueryData((prevQueryData) => [...prevQueryData, createData()]);
    }, 5000);
  }, []);

  return (
    <div className="container-analytics">
      <QuerySpeed queryData={queryData} />
    </div>
  );
};

export default AnalyticsBar;
