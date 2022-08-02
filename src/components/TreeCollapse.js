import React, { useState } from "react";
// import Tree from "react-d3-tree";
import { AnimatedTree } from "react-tree-graph";
import geojson from "./hugeTree";
import geojsonStates from "./states-and-districts.json";
import "react-tree-graph/dist/style.css";
const axios = require("axios").default;
export default function TreeCollapse() {
  let datachec = {
    name: "Colour",
    textProps: { x: -25, y: 25 },
    children: [
      {
        name: "Black",
        pathProps: "black",
        textProps: { x: -25, y: 25 },
        children: [],
      },
      {
        name: "Blue",
        textProps: { x: -25, y: 25 },
        children: [
          {
            name: "Aquamarine",
            textProps: { x: -25, y: 25 },
            children: [],
          },
          {
            name: "Cyan",
            textProps: { x: -25, y: 25 },
            children: [],
          },
          {
            name: "Navy",
            textProps: { x: -25, y: 25 },
            children: [],
          },
          {
            name: "Turquoise",
            textProps: { x: -25, y: 25 },
            children: [],
          },
        ],
      },
      {
        name: "Green",
        textProps: { x: -25, y: 25 },
        children: [],
      },
      {
        name: "Purple",
        textProps: { x: -25, y: 25 },
        children: [
          {
            name: "Indigo",
            textProps: { x: -25, y: 25 },
            children: [],
          },
          {
            name: "Violet",
            textProps: { x: -25, y: 25 },
            children: [],
          },
        ],
      },
      {
        name: "Red",
        textProps: { x: -25, y: 25 },
        children: [
          {
            name: "Crimson",
            textProps: { x: -25, y: 25 },
            children: [],
          },
          {
            name: "Maroon",
            textProps: { x: -25, y: 25 },
            children: [],
          },
          {
            name: "Scarlet",
            textProps: { x: -25, y: 25 },
            children: [],
          },
        ],
      },
      {
        name: "White",
        textProps: { x: -25, y: 25 },
        children: [],
      },
      {
        name: "Yellow",
        textProps: { x: -25, y: 25 },
        children: [],
      },
    ],
  };
  const DEFAULT_DEPTH = 9;
  const cloneWithDepth = (object, depth = DEFAULT_DEPTH) => {
    if (depth === -1) return undefined;
    if (typeof object !== "object") return object;

    if (Array.isArray(object)) {
      return object
        .map((val) => cloneWithDepth(val, depth - 1))
        .filter((val) => val !== undefined);
    }

    const clone = {};

    for (const key in object) {
      if (typeof object["key"] === "object" && depth - 1 === -1) {
        continue;
      }

      const clonedValue = cloneWithDepth(object[key], depth - 1);

      if (clonedValue !== undefined) {
        clone[key] = clonedValue;
      }
    }

    return clone;
  };

  const findNode = (key, node = datachec, parentPath = []) => {
    const path = [...parentPath, node.name];

    if (node.name === key) {
      return { node: cloneWithDepth(node), path };
    }

    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        const found = findNode(key, child, path);

        if (found) return found;
      }
    }
  };
  const [treeData, settreeData] = useState([]);
  const [data, setData] = useState(cloneWithDepth(datachec));
  const [path, setPath] = useState([datachec.name]);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);
  console.log(geojson);
  // console.log(geojsonStates[0].states);

  //console.log(datatree);

  const handleClick = (_, key) => {
    changeNode(findNode(key));
  };

  const handleMouseOver = (_, key) => {
    console.log(key);
  };

  const onRightClick = (event, key) => {
    event.preventDefault();
    console.log(key);
  };
  const changeNode = ({ node, path }) => {
    setPath(path);
    setData(node);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <AnimatedTree
        animated={true}
        data={data}
        nodeRadius={15}
        margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
        height={700}
        width={1000}
        gProps={{
          className: "node",
          onClick: handleClick,
          onMouseOver: handleMouseOver,
          onContextMenu: onRightClick,
        }}
      />
    </div>
  );
}
