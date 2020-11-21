import syncCacheAndState from "./sync.ts"
import addDataSnapshot from "./snapshot.ts"

const extractFields = (metrics: any, data: any) => {
  for (let x in data) {
  metrics.requestedFields.push(x)
    if (typeof data[x] === "object") extractFields(metrics, data[x])
  }
}

const artemisQuery = (url: string, query: string, state: any) => {
  /* 
  An Artemis Query takes in two parameters: a URL for the API you're retrieving 
  data from and an optional object, which is used to retrieve a single piece of
  data. The provided object must match the structure that id's are provided to
  resolvers: { variableName }
  */
  const start = Date.now()
  syncCacheAndState(state)

  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({query})
  }
  // Sets options for fetch request.

  const metrics = {
    api : url,
    latency: 0,
    method: opts.method,
    headers: opts.headers,
    size: 0,
    query: null,
    requestedFields: [],
  }

  return fetch(url, opts).then(res =>
    // metrics.size = new TextEncoder().encode(JSON.stringify(res)).length / 1024
    res.json()
  ).then(data => {
    console.log("data", data)
    extractFields(metrics, data)
    metrics.latency = Date.now() - start
    addDataSnapshot(metrics, state)
    return data
      /*
      If an object is provided as a parameter, that lets the query function know
      that the client is searching for a single piece of data and triggers this
      part of the function. Due to the way the Oak-GraphQL Playground is setup, it
      requires both the label (first queryParameter) and value (second queryParameter)
      of the variable. Find matches the label in the returned data array with the
      value requested.
      */
      
      /*
      Otherwise, by default, artemisQuery returns a full array of data which can
      be further filtered by the client.
      */
  }).catch(err => {
    console.log("Error in Artemis fetch request")
    const error = {
      latency: Date.now() - start,
      errStatus : err.status,
      errMessage : err.mesage
    }
    addDataSnapshot(error, state)
    console.log(err)
  })
} 
    
export default artemisQuery