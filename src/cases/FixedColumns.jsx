import { useState } from "react";
import { getData } from "../data";
import { Grid } from "wx-react-grid";
import { Slider } from "../ui.js";

const { data, allColumns } = getData();

export default function FixedColumns() {
  const [left, setLeft] = useState(2);
  return (
    <div className="p20">
      <h4>Drag the slider to fix columns on the left</h4>
      <div className="toolbar mw800">
        <span>Fix columns</span>
        <Slider
          min={0}
          max={4}
          value={left}
          onChange={(v) => setLeft(v.value)}
        />
      </div>

      <div className="mw800">
        <Grid data={data} columns={allColumns} split={{ left }} />
      </div>
    </div>
  );
}
