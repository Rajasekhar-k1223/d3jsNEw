import React, { useState } from "react";
import Tree from "react-d3-tree";
import geojson from "./hugeTree";
import geojsonStates from "./states-and-districts.json";
const axios = require("axios").default;
export default function TreeCollapse() {
  const [treeData, settreeData] = useState([]);
  console.log(geojson);
  // console.log(geojsonStates[0].states);

  //console.log(datatree);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Tree data={geojson} />
    </div>
  );
}
