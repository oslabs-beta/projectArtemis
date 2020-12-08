import React, { useState } from "https://esm.sh/react";
import "../../../style/graphs.css";

interface Props {
  snapshotArray: any;
}
const QuerySnapshot = (props: Props) => {
  const { snapshotArray } = props;
  const [number, setNumber] = useState(0);
  // console.log("querydata", snapshotArray)
  // const number = snapshotArray?.forEach((el, index) => console.log(index))
  // let num:number = 0
  let querySnapshotArray: any = [];
  let singleDataSnapshotObject: any = {};
  const query = snapshotArray.forEach((el: any, index: any) => {
    let fields = " ";
    // console.log(el.requestedFields)
    if (el.requestedFields !== undefined) {
      el.requestedFields.forEach((word: string) => fields += `${word},\n`);
    }
    //need to find a way to get rid of data and the extra comma in the requested fields -- slice didnt work try later
    if (el.successfulQuery) {
      el.successfulQuery = "It was a sucessful query";
    } else {
      el.successfulQuery = "It was an unsuccessful query";
    }

    singleDataSnapshotObject = {
      queryNum: index + 1,
      api: el.api,
      latency: el.latency,
      dataSize: el.dataSize,
      requestedFields: fields,
      successfulQuery: el.successfulQuery,
    };
    querySnapshotArray.push(singleDataSnapshotObject);
  });

  return (
    <div className="graph">
      <div className="queryNumberInput">
        <form>
          <label>Enter Query Number:</label>
          <input
            type="text"
            style={{ width: "50px" }}
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value > querySnapshotArray.length) {
                alert("query does not exist");
                setNumber(0);
              } else {
                setNumber(e.target.value);
              }
            }}
          >
          </input>
        </form>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th colSpan="2">Query {querySnapshotArray[number].queryNum}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="queryHeading">API</td>
            <td>{querySnapshotArray[number].api}</td>
          </tr>
          <tr>
            <td className="queryHeading">LATENCY</td>
            <td>{querySnapshotArray[number].latency}</td>
          </tr>
          <tr>
            <td className="queryHeading">DATASIZE (in bytes)</td>
            <td>{querySnapshotArray[number].dataSize}</td>
          </tr>
          <tr className="requestedFields">
            <td className="queryHeading">REQUESTED FIELDS</td>
            <td>{querySnapshotArray[number].requestedFields}</td>
          </tr>
          <tr>
            <td className="queryHeading">SUCCESSFUL QUERY</td>
            <td>{querySnapshotArray[number].successfulQuery}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuerySnapshot;
