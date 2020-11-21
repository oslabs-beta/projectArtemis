import React from 'https://esm.sh/react';
import { Bar } from 'https://cdn.skypack.dev/react-chartjs-2';

interface Props {
  queryData: [];
}

const QuerySpeed = (props: Props) => {
  const { queryData } = props;

  console.log(queryData)

  const data = {
    labels: queryData.map(obj => {
      const key = Object.keys(obj)
      return key[0];
    }),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: queryData.map(obj => {
          const value = Object.values(obj)
          return value[0];
        })
      },
    ],
  };

  return (
    <div>
      <Bar data={data} width={500} height={500} />
    </div>
  );
};

export default QuerySpeed;
