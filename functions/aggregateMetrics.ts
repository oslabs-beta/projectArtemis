const aggregateMetrics = (arr) => {
    const apis = {}
    let latencySum = 0;
    let latencyMax = 0;
    let sizeSum = 0;
    let sizeMax = 0;
    const successfulArr = []
    const errorArr = []
    arr.forEach(el => {
        //Queries per API
        if (!apis.hasOwnProperty(el.api)) {
            apis[el.api] = 1;
        }
        else {
            apis[el.api]++
        }
        //Latency
        latencySum += el.latency
        if (el.latency > latencyMax) {
            latencyMax = el.latency
        }
        //Size
        sizeSum += el.dataSize
        if (el.dataSize > sizeMax) {
            sizeMax = el.dataSize
        }
        //Query vs. Error Frequency
        if (el.successfulQuery === true) {
            successfulArr.push(el.successfulQuery)}
        else {
            errorArr.push(el.successfulQuery)
      }
    });

    return {
        apis,
        latencyAvg : latencySum / arr.length,
        latencyMax,
        sizeAvg: sizeSum / arr.length,
        sizeMax,
        queryFrequency: successfulArr.length,
        errorFrequency: errorArr.length,
    }
}