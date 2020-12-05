import React from 'https://esm.sh/react';
import { Doughnut } from 'https://cdn.skypack.dev/react-chartjs-2';
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

const QuerySuccessFailureGraph = (props: Props) => {
	const { aggregateMetrics } = props;
	const data = {
		labels: [ 'Success', 'Failure' ],
		datasets: [
			{
				backgroundColor: ['#36A2EB','#FF6384'],
				hoverBackgroundColor: ['#36A2EB','#FF6384'],
				data: aggregateMetrics ? [aggregateMetrics.queryFrequency, aggregateMetrics.errorFrequency] : []
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: `Successful Queries : ${aggregateMetrics ? (aggregateMetrics.queryFrequency / aggregateMetrics.queryTotal *100).toFixed(3): 0}%           Unsuccessful Queries: ${aggregateMetrics ? (aggregateMetrics.errorFrequency / aggregateMetrics.queryTotal*100).toFixed(3): 0}%`,
		},
		onClick: function(e, item) {
			console.log(item);
		}
	};

	const legend = {
		display: false
	};

	return (
		<div className="graph">
			<Doughnut
				data={data}
				options={options}
				legend={legend}
				aria-label="display-query-success-and-failures"
				role="img"
			/>
		</div>
	);
};

export default QuerySuccessFailureGraph;
