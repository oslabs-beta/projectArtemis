const queriesPerApi = (arr) => {
    const apis = {}
    arr.forEach(el => {
        if (!apis.hasOwnProperty(el.api)) {
            apis[el.api] = 1;
        }
        else {
            apis[el.api]++
        }
    })
    return apis
}

const latencyMetrics = (arr) => {
    let sum = 0;
    let count = 0;
    let max = 0;
    arr.forEach(el => {
        count++
        sum += el.latency
        if (el.latency > max) {
            max = el.latency
        }
    });
    return {
        average: sum / count,
        max
    }
}