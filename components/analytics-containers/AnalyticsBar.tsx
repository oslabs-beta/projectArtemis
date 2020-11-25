import React from 'https://esm.sh/react';
import QuerySpeed from '../graphs/QuerySpeed.tsx';
import QuerySuccessFailure from '../graphs/QuerySuccessFailure.tsx'

interface Props {
  viewIndex: number;
  updateViewIndex: (action: string | number) => void;
  queryData: [object],
}

const AnalyticsBar = (props: Props) => {
  const { viewIndex, updateViewIndex, queryData } = props;

  return (
    <div className="container-analytics">
      {viewIndex === 0 && <QuerySpeed queryData={queryData} />}
      {viewIndex === 1 && <QuerySuccessFailure queryData={queryData} />}
      {viewIndex === 2 && <h1>Hello2</h1>}
      <button onClick={() => updateViewIndex('increment')}>Previous</button>
      <button onClick={() => updateViewIndex(1)}>Jump to!</button>
      <button onClick={() => updateViewIndex('decrement')}>Next</button>
    </div>
  );
};

export default AnalyticsBar;
