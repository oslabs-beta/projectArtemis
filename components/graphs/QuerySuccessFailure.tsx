import React from 'https://esm.sh/react';
import { Doughnut } from 'https://cdn.skypack.dev/react-chartjs-2';
import '../../style/graphs.css';

interface Props {
	queryData: [];
}

const QuerySuccessFailure = (props: Props) => {
	const { queryData } = props;
	const testArr: any = [];
	let successfulCount: number = 0;
	let failureCount: number = 0;
	queryData.forEach((obj: any) => {
		if (obj.successfulQuery === true) {
			successfulCount += 1;
		} else failureCount += 1;
	});
	testArr.push(successfulCount, failureCount);
	console.log('testArr:', testArr);
	const data = {
		labels: [ 'Success', 'Failure' ],
		datasets: [
			{
				backgroundColor: ['#36A2EB','#FF6384'],
				hoverBackgroundColor: ['#36A2EB','#FF6384'],
				data: testArr
			}
		]
	};
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Query Success vs Query Failure'
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

export default QuerySuccessFailure;
