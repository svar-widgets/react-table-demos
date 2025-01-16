import { useState, useEffect, useRef } from "react";
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

export default function DynamicData() {
  const debounce = useRef(null);
  const nextbounce = useRef(null);
  const [data, setData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [columns, setColumns] = useState([]);

  const [stats, setStats] = useState(null);
  const [counter, setCounter] = useState(1);
  const [dynamic, setDynamic] = useState({ rowsCount: 1000, colsCount: 100 });

  function genAndLoad() {
    timer("gen");
    setStats(null);
    setRawData(repeatData(+dynamic.rowsCount));
    setColumns(repeatColumns(+dynamic.colsCount));
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
        return { gen, render, full, rows: dynamic.rowsCount, cols:dynamic.colsCount };
      });
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  if (rawData.length === 0) genAndLoad();

  function dataProvider(ev) {
    const { requestData } = ev;
    const { row } = requestData;

    console.log(`Request data: ${row.start} - ${row.end}`, nextbounce.current);

    if (nextbounce.current && nextbounce.current > new Date()) return;
      if (row) {
        console.log(row.start, row.end, rawData.length);
        const end = Math.min(rawData.length, Math.max(row.start + 20, row.end));
        setData(rawData.slice(row.start, end));
        nextbounce.current = new Date(new Date().getTime() + 300);
      }
  }

  return (
    <div className="p20">
      <h4>Load data in portions during scroll</h4>

      <div className="w320 p20">
        <Slider
          label={`Rows: ${dynamic.rowsCount}`}
          min={2}
          max={200000}
          value={dynamic.rowsCount}
          onChange={(v) => {
            if (v.value !== dynamic.rowsCount)
              setDynamic(prev => ({ ...prev, rowsCount: v.value }));
          }}
        />
      </div>
      <div className="w320 p20">
        <Slider
          label={`Columns: ${dynamic.colsCount}`}
          min={2}
          max={20000}
          value={dynamic.colsCount}
          onChange={(v) => {
            if (v.value !== dynamic.colsCount)
              setDynamic(prev => ({ ...prev, colsCount: v.value }));
          }}
        />
      </div>
      <div className="w320 p20">
        <Button type="primary" click={() => setTimeout(genAndLoad, 250)}>
          Generate data and load
        </Button>
      </div>
      <GridComponent data={data} columns={columns} onDataRequest={dataProvider} dynamic={dynamic} />
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


function GridComponent(props){
  return (
    <div className="w1000 h600 p20">
      <Grid
        key={props.columns.length+"x"+props.data.length}
        data={props.data}
        columns={props.columns}
        onDataRequest={props.onDataRequest}
        dynamic={props.dynamic}
      />
    </div>
  )
}