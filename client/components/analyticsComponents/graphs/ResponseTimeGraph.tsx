// import React from "https://esm.sh/react";
// import { Line } from "https://cdn.skypack.dev/react-chartjs-2";
// import { Result, Snapshot } from "../../typings/data.d.ts";
// import "../../../style/graphs.css";

// interface Props {
//   aggregateMetrics: Result | {};
//   snapshotArray: [Snapshot] | [];
// }

// const ResponseTimeGraph = (props: Props) => {
//   const { snapshotArray, aggregateMetrics } = props;
//   const data = {
//     labels: !Array.isArray(snapshotArray) || snapshotArray.length <= 0
//       ? []
//       : snapshotArray.map((obj:any, index:any) => {
//         const key = `Query ${index}`;
//         return key;
//       }),
//     datasets: [
//       {
//         label: "Response Times",
//         borderColor: "rgba(255,99,132,1)",
//         borderWidth: 1,
//         data: (!Array.isArray(snapshotArray) || snapshotArray.length <= 0)
//           ? []
//           : snapshotArray.map((obj: any) => {
//             const value = obj.responseTime;
//             return value;
//           }),
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     // ! TODO refactor responseTime avg for ts
//     title: {
//       display: true,
//       text: `Average Response Time: ${
//         aggregateMetrics ? aggregateMetrics.responseTimeAvg : 0
//       } ms          Maximum Response Time: ${
//         aggregateMetrics ? aggregateMetrics.responseTimeAvg : 0
//       } ms`,
//     },
//     onClick: function (e, item) {
//       console.log(item);
//     },
//   };

//   const legend = {
//     display: false,
//   };

//   return (
//     <div className="graph">
//       <Line
//         data={data}
//         options={options}
//         legend={legend}
//         aria-label="display-graph-query-speeds"
//         role="img"
//       />
//     </div>
//   );
// };

// export default ResponseTimeGraph;
