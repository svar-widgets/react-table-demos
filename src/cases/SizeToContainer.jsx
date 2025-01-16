import { useState } from "react";
import { getData, repeatColumns } from "../data";
import { Grid } from "wx-react-grid";
import { Slider, Checkbox } from "../ui.js";

const { data, columns, flexibleColumns } = getData();

export default function SizeToContainer() {
  const [w, setW] = useState(600);
  const [h, setH] = useState(320);
  const [psize, setPSize] = useState(false);

  return (
    <div className="p20">
      <h4>DataGrid adjusts to the container</h4>
      <div className="toolbar">
        <Checkbox label="Fill screen" onChange={(v) => setPSize(v.value)} />
        {!psize && (
          <>
            <Slider
              label={`Container width: ${w}px`}
              min={200}
              max={800}
              value={w}
              onChange={(v) => setW(v.value)}
            />
            <Slider
              label={`Container height: ${h}px`}
              min={200}
              max={800}
              value={h}
              onChange={(v) => setH(v.value)}
            />
          </>
        )}
      </div>

      <h3>Columns with fixed widths</h3>
      <div
        className="box1200"
        style={
          psize
            ? { width: "100%", height: "50%" }
            : { width: w + "px", height: h + "px" }
        }
      >
        <Grid data={data.slice(0, 15)} columns={columns} />
      </div>

      <h3>Columns with flexible widths</h3>
      <div
        className="box1200"
        style={
          psize
            ? { width: "100%", height: "50%" }
            : { width: w + "px", height: h + "px" }
        }
      >
        <Grid data={data.slice(0, 15)} columns={flexibleColumns} />
      </div>

      <h3>A lot of columns</h3>
      <div
        className="box1200"
        style={
          psize
            ? { width: "100%", height: "50%" }
            : { width: w + "px", height: h + "px" }
        }
      >
        <Grid data={data.slice(0, 15)} columns={repeatColumns(50)} />
      </div>
    </div>
  );
}
