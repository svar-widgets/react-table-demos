import { useRef, useState } from "react";
import { getData } from "../data.js";
import { Grid } from "wx-react-grid";

const { data } = getData();

const columns = [
	{ id: "id", width: 50 },
	{ id: "city", header: "City", width: 160 },
	{ id: "firstName", header: "First Name" },
	{ id: "lastName", header: "Last Name" },
	{ id: "companyName", header: "Company" },
];

export default function RowSelection() {
	const api = useRef(null);
	const [selected, setSelected] = useState(0);
	
	const init = v => {
		console.log("init", v)
		api.current = v;
	}
	const updateSelected = () => {
		console.log("update", api)
		setSelected(api.current.getState().selected)
	};

	return (
		<div className="p20">
			<h4>Click on any cell to select. Selected: { selected || "none"}</h4>
			<div>
				<Grid data={data} columns={columns} init={init} onSelectRow={updateSelected} />
			</div>
		</div>
	)
}