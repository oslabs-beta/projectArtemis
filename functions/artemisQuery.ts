import addDataSnapshot from "./addDataSnapshot.ts";
import { readStringDelim } from "https://deno.land/std@0.69.0/io/bufio.ts";

//extractFields first checks if the query was successful by making sure the returned data doesn't have an errors object. If there are no errors then we extract the requested fields from the query and push the fields into the metrics object. If there is an errors object, requested fields will return an empty array, update the query to unsuccessful query, and list the errors recieved.
const extractFields = (metrics: any, data: any) => {
  if (!data.errors) {
    for (let x in data) {
      metrics.requestedFields.push(x);
      if (typeof data[x] === "object") extractFields(metrics, data[x]);
    }
  } else {
    metrics.successfulQuery = false;
    metrics.errors = data.errors[0];
  }
};

const artemisQuery = (url: string, query: string) => {
  console.log("You're inside artemisQuery");
  const start = Date.now();
  // syncCacheAndState(state)

  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  };
  // Sets options for fetch request.

  const metrics = {
    api: url,
    latency: 0,
    dataSize: 0,
    requestedFields: [query],
    successfulQuery: true,
    errors: null,
  };

  return fetch(url, opts).then((res) => {
    metrics.dataSize = new TextEncoder().encode(JSON.stringify(res)).length;
    return res.json();
  }).then((data) => {
    extractFields(metrics, data);
    metrics.latency = Date.now() - start;
    // addDataSnapshot(metrics, state)
    return metrics;
  }).catch((err) => {
    metrics.successfulQuery = false;
    metrics.errors = err;
    metrics.latency = Date.now() - start;
    return metrics;
  });
};

export default artemisQuery;
