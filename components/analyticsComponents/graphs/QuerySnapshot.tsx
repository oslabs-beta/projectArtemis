import React, { useContext } from "https://esm.sh/react";
import { QueryContext } from "../../hooks/useContextQuery.tsx";
import "../../../style/graphs.css";

interface Props {
  snapshotArray: any;
}
const QuerySnapshot = (props: Props) => {
  const { queryNumber, setQueryNumber } = useContext(QueryContext);
  const { snapshotArray } = props;
  // console.log("querydata", snapshotArray)
  // const number = snapshotArray?.forEach((el, index) => console.log(index))
  // let num:number = 0
  let querySnapshotArray: any = [];
  let singleDataSnapshotObject: any = {};
  if (Array.isArray(snapshotArray) && snapshotArray.length > 0) {
    snapshotArray.forEach((el: any, index: any) => {
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
        queryNum: index,
        api: el.api,
        latency: el.latency,
        dataSize: el.dataSize,
        requestedFields: fields,
        successfulQuery: el.successfulQuery,
      };
      querySnapshotArray.push(singleDataSnapshotObject);
    });
  } else {
    singleDataSnapshotObject = {
      queryNum: null,
      api: null,
      latency: null,
      dataSize: null,
      requestedFields: null,
      successfulQuery: null,
    };
    querySnapshotArray.push(singleDataSnapshotObject);
  }

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
                setQueryNumber(0);
              } else {
                setQueryNumber(e.target.value);
              }
            }}
          >
          </input>
        </form>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th colSpan={2}>
              Query {querySnapshotArray[queryNumber].queryNum}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="queryHeading">API</td>
            <td>{querySnapshotArray[queryNumber].api}</td>
          </tr>
          <tr>
            <td className="queryHeading">LATENCY</td>
            <td>{querySnapshotArray[queryNumber].latency}</td>
          </tr>
          <tr>
            <td className="queryHeading">DATASIZE (in bytes)</td>
            <td>{querySnapshotArray[queryNumber].dataSize}</td>
          </tr>
          <tr className="requestedFields">
            <td className="queryHeading">REQUESTED FIELDS</td>
            <td>{querySnapshotArray[queryNumber].requestedFields}</td>
          </tr>
          <tr>
            <td className="queryHeading">SUCCESSFUL QUERY</td>
            <td>{querySnapshotArray[queryNumber].successfulQuery}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuerySnapshot;
