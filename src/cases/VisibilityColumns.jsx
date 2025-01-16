import { useState } from "react";
import { getData } from "../data";
import { Grid, HeaderMenu } from "wx-react-grid";

const { data } = getData();

const columns1 = [
  { id: "id", width: 50 },
  { id: "city", header: "City", width: 160, hidden: true },
  { id: "firstName", header: "First Name", flexgrow: 1 },
  { id: "lastName", header: "Last Name", flexgrow: 1 },
  { id: "companyName", header: "Company", flexgrow: 1 },
];

const columns2 = [
  { id: "id", width: 50 },
  {
    id: "lastName",
    header: "Last Name",
    footer: "Last Name",
    width: 150,
  },
  { id: "email", header: "Email", footer: "Email" },
  {
    id: "companyName",
    header: "Company",
    footer: "Company",
    flexgrow: 1,
  },
  { id: "city", header: "City", width: 160, hidden: true },
  { id: "stars", header: "Stars" },
];

export default function VisibilityColumns() {
  const [api1, setApi1] = useState(null);
  const [open1, setOpen1] = useState(null);

  const [api2, setApi2] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    <div className="p20">
      <h4>
        Any column can be hidden: right-click on the header to show the menu
      </h4>
      <div>
        <HeaderMenu api={api1} init={(v) => setOpen1(() => v)} />
        <Grid
          data={data}
          columns={columns1}
          init={(v) => setApi1(() => v)}
          onHeaderContext={open1}
        />
      </div>

      <h4>
        Some columns can be hidden: right-click on the header to show the menu
      </h4>
      <div>
        <HeaderMenu
          columns={{ city: true, stars: true }}
          api={api2}
          init={(v) => setOpen2(() => v)}
        />
        <Grid
          data={data}
          columns={columns2}
          init={(v) => setApi2(() => v)}
          onHeaderContext={open2}
        />
      </div>
    </div>
  );
}
