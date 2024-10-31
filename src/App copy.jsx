import React, { useEffect, useRef, useState } from "react";
import Sunburst from 'sunburst-chart';
// import initialData from "./flare.json";
import * as d3 from "d3";

const initialData = {
  name: "root",
  children: [
    {
      name: "Category 1",
      children: [
        { name: "Subcategory 1-1", size: 300 },
        { name: "Subcategory 1-2", size: 200 },
      ],
    },
    {
      name: "Category 2",
      children: [
        { name: "Subcategory 2-1", size: 100 },
        { name: "Subcategory 2-2", size: 400 },
        { name: "Subcategory 2-3", size: 250 },
      ],
    },
    {
      name: "Category 3",
      children: [{ name: "Subcategory 3-1", size: 150 }],
    },
  ],
};


const App = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState(initialData);



  const color = d3.scaleOrdinal(d3.schemeCategory10);
  

  useEffect(() => {
    if (chartRef.current) {
      const chart = Sunburst()
        .data(data)
        .size("size")
        .color((d, parent) => color(parent ? parent.data.name : null))
        .width(500)
        .height(500)
        .radiusScaleExponent(1)
        .showLabels(true)

      chart(chartRef.current);
    }
  }, [data]);

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2 id="heading">Sunburst Chart</h2>
      <div ref={chartRef} style={{ width: "100%", height: 500 }}></div>
    </div>
  );
};

export default App;
