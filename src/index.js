import React from "react";
import ReactDOM from "react-dom/client";
import Demos from "./common/Index.jsx"
import "wx-react-grid/dist/grid.css";

const root = ReactDOM.createRoot(document.querySelector("#wx_demo_area") || document.body);
root.render(
	<React.StrictMode>
    <Demos />
  	</React.StrictMode>
);
