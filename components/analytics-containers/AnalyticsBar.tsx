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
  const [count, setCount] = useState(0);
  const increment = (count: number, setCount: (Number: number) => void) => {
    if (count >= 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const decrement = (count: number, setCount: (Number: number) => void) => {
    if (count <= 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setQueryData((prevQueryData) => [...prevQueryData, createData()]);
    }, 5000);
  }, []);

  return (
    <div className="container-analytics">
      {count === 0 && <QuerySpeed queryData={queryData} />}
      {count === 1 && <h1>Hello1</h1>}
      {count === 2 && <h1>Hello2</h1>}
      <button onClick={() => increment(count, setCount)}>Right arrow!</button>
      <button onClick={() => decrement(count, setCount)}>Left arrow!</button>
    </div>
  );
};

export default AnalyticsBar;
