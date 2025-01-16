import { useState, useEffect } from "react";
import { repeatData, repeatColumns } from "../data";
import { Grid } from "wx-react-grid";
import { Slider, Button } from "../ui.js";

const timers = {};
function timer(name) {
  timers[name] = new Date();
}

function timerEnd(name) {
  return timers[name] ? new Date() - timers[name] : 0;
}

export default function StaticData() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const [stats, setStats] = useState(null);
  const [counter, setCounter] = useState(1);
  const [rows, setRows] = useState(1000);
  const [cols, setCols] = useState(100);

  function genAndLoad() {
    timer("gen");
    setStats(null);
    setData(repeatData(+rows));
    setColumns(repeatColumns(+cols));
    setCounter(counter + 1);

    const gen = timerEnd("gen");
    setStats(() => {
      return { gen };
    });
    timer("render");
  }

  useEffect(() => {
    setTimeout(() => {
      if (!stats) return;
      const gen = stats.gen;
      const render = timerEnd("render");
      const full = gen + render;
      setStats(() => {
        return { gen, render, full, rows, cols };
      });
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  if (data.length === 0) genAndLoad();

  return (
    <div className="p20">
      <h4>Load and render big data at once</h4>
      <div className="w320 p20">
        <Slider
          label={`Rows: ${rows}`}
          min={2}
          max={200000}
          value={rows}
          onChange={(v) => {
            setRows(v.value);
          }}
        />
      </div>
      <div className="w320 p20">
        <Slider
          label={`Columns: ${cols}`}
          min={2}
          max={20000}
          value={cols}
          onChange={(v) => {
            setCols(v.value);
          }}
        />
      </div>
      <div className="w320 p20">
        <Button type="primary" click={genAndLoad}>
          Generate data and load
        </Button>
      </div>
      <div className="w1000 h600 p20">
        <Grid key={counter} data={data} columns={columns} split={{ left: 1 }} />
      </div>
      {stats && (
        <pre>
          {stats.rows} rows, {stats.cols} columns, {stats.rows * stats.cols}{" "}
          cells dataset generation: {stats.gen}ms dataset rendering:{" "}
          {stats.render}ms
        </pre>
      )}
    </div>
  );
}
