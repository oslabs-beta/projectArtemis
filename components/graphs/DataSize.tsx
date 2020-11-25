import React from 'https://esm.sh/react';
import { Bar } from 'https://cdn.skypack.dev/react-chartjs-2';
import '../../style/graphs.css';

interface Props {
	queryData: [];
}

const DataSize = (props: Props) => {
	const { queryData } = props;
	const data = {
		labels: queryData.map((obj, index) => {
			const key = `Query ${index}`;
			return key;
		}),
		datasets: [
			{
				label: 'Query Speed',
				backgroundColor: 'rgb(63, 191, 127)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgb(51, 157, 104)',
				data: queryData.map((obj: any) => {
					const value = obj.dataSize;
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
			text: 'Size of Returned Data'
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
			<Bar data={data} options={options} legend={legend} aria-label="display-graph-query-speeds" role="img" />
		</div>
	);
};

export default DataSize;
