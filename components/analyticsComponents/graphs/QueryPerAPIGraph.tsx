import React from 'https://esm.sh/react';
import { Bar } from 'https://cdn.skypack.dev/react-chartjs-2';
import '../../../style/graphs.css';

interface Result {
  apis: {};
  latencyAvg: string;
  latencyMax: string;
  sizeAvg: string;
  sizeMax: string;
  queryTotal: any;
  queryFrequency: number;
  errorFrequency: number;
}

interface Props {
  aggregateMetrics: Result | null;
}

const QueryPerAPIGraph = (props: Props) => {
  const { aggregateMetrics } = props;
  const calAmount = (string: string) => {
    const amounts: any = [];
    const labels: any = [];
    let topAmount: number = 0;
    let topAPI: string = '';
    for (let x in aggregateMetrics.apis) {
      labels.push(x);
      amounts.push(aggregateMetrics.apis[x]);
      if (aggregateMetrics.apis[x] > topAmount) {
        topAmount = aggregateMetrics.apis[x];
        topAPI = x;
      }
    }
    if (string === 'amounts') return amounts;
    else if (string === 'labels') return labels;
    else if (string === 'topAPI') return topAPI;
  };
  const data = {
    labels: aggregateMetrics ? calAmount('labels') : [],
    datasets: [
      {
        backgroundColor: [
          '#36A2EB',
          '#FF6384',
          '#b6fc03',
          '#b503fc',
          '#fc037b',
          '#fcfc03',
        ],
        hoverBackgroundColor: [
          '#36A2EB',
          '#FF6384',
          '#b6fc03',
          '#b503fc',
          '#fc037b',
          '#fcfc03',
        ],
        data: aggregateMetrics ? calAmount('amounts') : [],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: `Most Frequently Queried API: ${
        aggregateMetrics ? calAmount('topAPI') : ''
      }`,
    },
    onClick: function (e, item) {
      console.log(item);
    },
  };

  const legend = {
    display: false,
  };

  return (
    <div className="graph">
      <Bar
        data={data}
        options={options}
        legend={legend}
        aria-label="display-query-success-and-failures"
        role="img"
      />
    </div>
  );
};

export default QueryPerAPIGraph;
