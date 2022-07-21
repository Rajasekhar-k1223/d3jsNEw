import React from "react";
// import * as d3 from "d3";
import { geoMercator, geoPath } from "d3-geo";
import { select } from "d3-selection";
import geojson from "./geojson.json";
import { ZoomTransform } from "d3";
import Tree from "react-d3-tree";
export default function MapPage() {
  //alert(document.body.clientWidth);
  const width = document.body.clientWidth;
  const height = width * 0.5;
  const projection = geoMercator().fitExtent(
    [
      [0, 0],
      [width * 0.9, height * 0.9],
    ],
    geojson
  );

  const path = geoPath().projection(projection);
  const zoom = async () => {
    const d3 = await Promise.all([
      import("d3-format"),
      import("d3-geo"),
      import("d3-geo-projection"),
    ]).then((d3) => Object.assign({}, ...d3));
    projection.translate(d3.event.translate).scale(d3.event.scale);
    // states.selectAll("path").attr("d", path);
    // states.selectAll("red.circle").attr("d", path);
    // states.selectAll("blue.circle").attr("d", path);
  };
  return (
    <div>
      <svg width={width} height={height}>
        <g className="geojson-layer">
          {geojson.features.map((d) => (
            <path
              key={d.properties.name}
              d={path(d)}
              fill="#eee"
              stroke="#0e1724"
              strokeWidth="1"
              strokeOpacity="0.5"
              onMouseEnter={(e) => {
                select(e.target).attr("fill", "#000");
              }}
              onMouseOut={(e) => {
                select(e.target).attr("fill", "#eee");
              }}
              onClick={() => {
                //  alert(d.properties.name);
                zoom();
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
