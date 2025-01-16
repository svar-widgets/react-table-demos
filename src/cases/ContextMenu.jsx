import { useState } from "react";
import { getData } from "../data";
import { Grid, ContextMenu } from "wx-react-grid";

const { data, flexibleColumns: columns } = getData();

export default function ContextMenuComponent() {
  const [api, setApi] = useState(null);
  const [open, setOpen] = useState(null);

  return (
    <div className="p20">
      <h4>Context menu with default actions</h4>
      <ContextMenu init={(v) => setOpen(() => v)} api={api} />
      <Grid
        data={data}
        columns={columns}
        onItemContext={open}
        init={(v) => setApi(() => v)}
      />
    </div>
  );
}
