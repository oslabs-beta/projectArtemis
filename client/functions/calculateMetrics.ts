// const calculateMetrics = (arr: any) => {
//   const apis = {};
//   let responseTimeSum = 0;
//   let responseTimeMax = 0;
//   let sizeSum = 0;
//   let sizeMax = 0;
//   const successfulArr = [];
//   const errorArr = [];
//   arr.forEach((el: object) => {
//     //Queries per API
//     if (!apis.hasOwnProperty(el.api)) {
//       apis[el.api] = 1;
//     } else {
//       apis[el.api]++;
//     }
//     if (el.successfulQuery) {
//       //responseTimes
//       responseTimeSum += el.responseTime;
//       if (el.responseTime > responseTimeMax) {
//         responseTimeMax = el.responseTime;
//       }
//       //Size
//       sizeSum += el.dataSize;
//       if (el.dataSize > sizeMax) {
//         sizeMax = el.dataSize;
//       }
//       //Query vs. Error Frequency
//       successfulArr.push(el.successfulQuery);
//     } else {
//       errorArr.push(el.successfulQuery);
//     }
//   });
//   return {
//     apis,
//     responseTimeAvg: (responseTimeSum / arr.length).toFixed(3),
//     responseTimeMax: responseTimeMax.toFixed(3),
//     sizeAvg: (sizeSum / arr.length).toFixed(3),
//     sizeMax: sizeMax.toFixed(3),
//     queryTotal: arr.length,
//     queryFrequency: successfulArr.length,
//     errorFrequency: errorArr.length,
//   };
// };

// export default calculateMetrics;
