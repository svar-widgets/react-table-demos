import { useRef, useState } from "react";
import { getData } from "../data";
import { Grid } from "wx-react-grid";

const { data } = getData();

const columns = [
  { id: "id", width: 50 },
  { id: "city", header: "City", width: 160 },
  { id: "firstName", header: "First Name" },
  { id: "lastName", header: "Last Name" },
  { id: "companyName", header: "Company" },
];

export default function RowMultiSelection() {
  const api = useRef(null);
  const [selected, setSelected] = useState([]);

  const updateSelected = () => setSelected(api.current.getState().selectedRows);

  return (
    <div className="p20">
      <h4>
        Click cells using Ctrl/Shift keys. Selected:
        {selected.length ? selected.join(", ") : "none"}
      </h4>
      <div>
        <Grid
          data={data}
          columns={columns}
          multiselect={true}
          init={(v) => (api.current = v)}
          onSelectRow={updateSelected}
        />
      </div>
    </div>
  );
}
