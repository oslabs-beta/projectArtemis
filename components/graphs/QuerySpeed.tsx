import React from 'https://esm.sh/react';
import { Bar } from 'https://cdn.skypack.dev/react-chartjs-2';
import '../../style/graphs.css';

interface Props {
  queryData: [];
}

const QuerySpeed = (props: Props) => {
  const { queryData } = props;

  const data = {
    labels: queryData.map((obj) => {
      const key = Object.keys(obj);
      return key[0];
    }),
    datasets: [
      {
        label: 'Query Speed',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: queryData.map((obj) => {
          const value = Object.values(obj);
          return value[0];
        }),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: function (e, item) {
      console.log(item)
    },
  };

  const legend = {
    display: false,
  };

  return (
    <div className="query-speed-container">
      <Bar
        data={data}
        options={options}
        legend={legend}
        aria-label="display-graph-query-speeds"
        role="img"
      />
    </div>
  );
};

export default QuerySpeed;
