import React, { useState } from "https://esm.sh/react";
import artemisQuery from "../../../functions/artemisQuery.ts";
import calculateMetrics from "../../../functions/artemisQuery.ts";

interface Result {
  apis: {};
  latencyAvg: string;
  latencyMax: string;
  sizeAvg: string;
  sizeMax: string;
  queryTotal: any;
  queryFrequency: number;
  errorFrequency: number;
}
interface Props {
  aggregateMetrics: Result | null;
  snapshotArray: any;
  setSnapshotArray: (myArray: any | symbol) => void;
  setAggregateMetrics: (myObject: object) => void;
}

const ClientQuery = (props: Props) => {
  const { snapshotArray, setAggregateMetrics, setSnapshotArray } = props;
  const [query, setQuery] = useState("");
  const [URL, setURL] = useState("");
  const [number, setNumber] = useState(0);

  const runQuery = async (URL: string, query: string, number: number) => {
    try {
      query = `${query}`;
      console.log("URL", URL);
      console.log("Query", query);
      const result = await artemisQuery(URL, query);
      setSnapshotArray([...snapshotArray, result]);
      number--;
      if (number > 0) runQuery(URL, query, number);
    } catch (err) {
      console.log(err.message);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await runQuery(URL, query, number);
    console.log(snapshotArray);
    const result: Result = calculateMetrics(snapshotArray);
    console.log("new metrics", result);
    setAggregateMetrics(result);
  };
  return (
    <div className="queryForm">
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitForm}
      >
        <label>URL</label>
        <input
          type="text"
          value={URL}
          onChange={(e) => setURL(e.target.value)}
        />
        <label>QUERY</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label>NUMBER OF QUERIES</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ClientQuery;
