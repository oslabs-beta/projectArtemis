import React from 'https://esm.sh/react';
import { Line } from 'https://cdn.skypack.dev/react-chartjs-2';
import '../../../style/graphs.css';

interface Props {
	aggregateMetrics: object | {};
	snapshotArray: [object] | [];
}

const LatencyGraph = (props: Props) => {
const { snapshotArray, aggregateMetrics } = props;//
	const data = {
		labels: snapshotArray.map((obj, index) => {
			const key = `Query ${index}`;
			return key;
		}),
		datasets: [
			{
				label: 'Latency',
				// backgroundColor: 'rgba(255,99,132,0.2)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1,
				// hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				// hoverBorderColor: 'rgba(255,99,132,1)',
				data: snapshotArray.map((obj: any) => {
					const value = obj.latency;
					return value;
				})
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: `Average Latency: ${aggregateMetrics.latencyAvg} bytes           Maximum Latency: ${aggregateMetrics.latencyMax} bytes`,
		},
		onClick: function(e, item) {
			console.log(item);
		}
	};

	const legend = {
		display: false
	};

	return (
		<div className="query-speed-container">
			<Line data={data} options={options} legend={legend} aria-label="display-graph-query-speeds" role="img" />
		</div>
	);
};

export default LatencyGraph;
