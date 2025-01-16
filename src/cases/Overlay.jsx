import { useState } from "react";
import { getData } from "../data.js";
import { Grid } from "wx-react-grid";
import Overlay from "../custom/Overlay.jsx";

const { columns, data } = getData();

export default function OverlayComponent() {
  const [show, setShow] = useState(true);

  return (
    <div className="p20">
      <h4>Overlay as a text</h4>
      <div>
        <Grid
          data={data.slice(0, 5)}
          columns={columns}
          overlay={"Loading..."}
          footer={true}
        />
      </div>

      <h4>Overlay as a component</h4>
      <div>
        <Grid
          data={data}
          columns={columns}
          overlay={show ? Overlay : null}
          footer={true}
          onClick={() => setShow(false)}
        />
      </div>
    </div>
  );
}
