import React, { useState } from 'https://esm.sh/react';
import TabBar from './analytics-containers/TabBar.tsx';
import AnalyticsBar from './analytics-containers/AnalyticsBar.tsx';
import GraphTwo from "./analytics-containers/GraphTwo.tsx";

const increment = (count:number, setCount:(Number:number)=> void) => {
  if (count >= 2) {
    setCount(0)
  }
  else {
    setCount(count + 1)
  }
}

const decrement = (count:number, setCount:(Number:number)=> void) => {
  if (count <= 0) {
    setCount(2)
  }
  else {
    setCount(count - 1)
  }
}


const Main = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div className='container-main'>
    {count === 0 && <AnalyticsBar />}
   {count === 1 && <TabBar />}
    {count === 2 && <GraphTwo />}
<button onClick={() => increment(count, setCount)}>
       Right arrow!
        </button>

        <button onClick={() => decrement(count, setCount)}>
          Left arrow!
        </button>
</div>
  );
}

export default Main;
