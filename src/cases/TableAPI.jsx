import { useState, useRef } from "react";
import { getData } from "../data.js";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

const { data, columns } = getData();
	
export default function TableAPI() {
	const api = useRef(null);
	let [selected, setSelected] = useState(null);

	function init(v){
		api.current = v;
	
		api.current.getReactiveState().selected.subscribe(v => setSelected(v));
		api.current.intercept("select-row", data => {
			if (data.id === 1) return false;
		});
	}

	function addRow() {
		api.current.exec("add-row", { row: {} });
	}
	function deleteRow() {
		const id = api.current.getState().selected;
		if (id) {
			api.current.exec("delete-row", { id });
		}
	}
	function onSelectRow(ev) {
		console.log("selected: "+ev.id);
	}

	return (
		<div className="p20">
			<p>
				<Button click={addRow} type="primary">Add row</Button>
				<Button click={deleteRow}>Delete row</Button>
			</p>
			<div className="mw800">
				<Grid
					data={data.slice(0, 3)}
					columns={columns}
					init={init}
					onSelectRow={onSelectRow}
				/>
			</div>
			<div className="status">Selected: {selected || "none"}</div>
		</div>
	)
}