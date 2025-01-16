import { useState, useRef } from "react";
import { getData } from "../data";
import { Grid, HeaderMenu } from "wx-react-grid";

const { data, columnsSpans } = getData();

export default function TableHeaderFooterSpans() {
  const [api, setApi] = useState(null);
  const open = useRef();

  return (
    <div className="p20">
      <div>
        <HeaderMenu open={open} api={api} />
        <Grid
          data={data}
          columns={columnsSpans}
          footer={true}
          init={(v) => setApi(() => v)}
          onHeaderContext={open.current}
        />
      </div>
    </div>
  );
}
