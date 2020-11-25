import React from 'https://esm.sh/react';
import { Bar } from 'https://cdn.skypack.dev/react-chartjs-2';
import '../../style/graphs.css';

interface Props {
	queryData: [];
}

const QueryPerAPI = (props: Props) => {
	const { queryData } = props;
	const testArr: any = [];
	const labels: any = [];
	const apis: object = {}
	queryData.forEach((obj: any) => {
		if (!apis.hasOwnProperty(obj.api)) {
            apis[obj.api] = 1;
        }
        else {
            apis[obj.api]++
        }
	});
	for (let x in apis) {
		labels.push(x)
	testArr.push(apis[x]);
	}
	console.log('testArr:', testArr);
	const data = {
		labels,
		datasets: [
			{
				backgroundColor: ['#36A2EB', '#FF6384', '#b6fc03', '#b503fc', '#fc037b', '#fcfc03'],
				hoverBackgroundColor: ['#36A2EB', '#FF6384', '#b6fc03', '#b503fc', '#fc037b', '#fcfc03'],
				data: testArr
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Queries per API'
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

export default QueryPerAPI;
