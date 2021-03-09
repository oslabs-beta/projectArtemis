// import React from "https://esm.sh/react";
// import { Bar } from "https://cdn.skypack.dev/react-chartjs-2";
// import { Result, Snapshot } from "../../typings/data.d.ts";
// import "../../../style/graphs.css";

// interface Props {
//   snapshotArray: [Snapshot] | null;
//   aggregateMetrics: Result | null;
// }

// const DataSizeGraph = (props: Props) => {
//   const { snapshotArray, aggregateMetrics } = props;

//   const data = {
//     labels: !Array.isArray(snapshotArray) || snapshotArray.length <= 0
//       ? []
//       : snapshotArray.map((obj, index) => {
//         const key = `Query ${index}`;
//         return key;
//       }),
//     datasets: [
//       {
//         label: "Data Size",
//         backgroundColor: "rgb(63, 191, 127)",
//         borderWidth: 1,
//         hoverBackgroundColor: "rgb(51, 157, 104)",
//         data: (!Array.isArray(snapshotArray) || snapshotArray.length <= 0)
//           ? []
//           : snapshotArray.map((obj: any) => {
//             const value = obj.dataSize;
//             return value;
//           }),
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     title: {
//       display: true,
//       text: `Average Size: ${
//         aggregateMetrics.sizeAvg ? aggregateMetrics.sizeAvg : 0
//       } bytes           Maximum Size: ${
//         aggregateMetrics.sizeMax ? aggregateMetrics.sizeMax : 0
//       } bytes`,
//     },
//     onClick: function (e, item) {
//       console.log(item);
//     },
//   };

//   const legend = {
//     display: false,
//     labels: {
//       fontColor: "rgb(255, 99, 132)",
//     },
//   };

//   return (
//     <div className="graph">
//       <Bar
//         data={data}
//         options={options}
//         legend={legend}
//         aria-label="display-graph-query-speeds"
//         role="img"
//       />
//     </div>
//   );
// };

// export default DataSizeGraph;
