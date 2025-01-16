import { useRef } from "react";
import { repeatData, repeatColumns } from "../data.js";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

const data = repeatData(1000);
const columns = repeatColumns(100);

export default function ScrollTable() {
  const api = useRef(null);
  function doScroll(row, column) {
    api.current.exec("scroll", { row, column });
  }

  return (
    <div className="p20">
      <div className="toolbar">
        <Button type="primary" click={() => doScroll(data[999].id)}>
          Scroll to the last row
        </Button>
        <Button type="primary" click={() => doScroll(null, columns[99].id)}>
          Scroll to the last column
        </Button>
        <Button
          type="primary"
          click={() => doScroll(data[0].id, columns[1].id)}
        >
          Scroll to the first row and column
        </Button>
      </div>
      <div className="w1000 h600">
        <Grid
          init={(v) => (api.current = v)}
          data={data}
          columns={columns}
          split={{ left: 1 }}
        />
      </div>
    </div>
  );
}
