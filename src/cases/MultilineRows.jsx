import { useRef } from "react";
import { repeatColumns, repeatData } from "../data.js";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

export default function MultilineRows() {
	const api = useRef(null);

	function addRow() {
		api.current.exec("add-row", { row: {} });
	}
	function deleteRow() {
		const id = api.current.getState().selected;
		if (id) {
			api.current.exec("delete-row", { id });
		}
	}

	return (
		<div className="p20">
			<div className="toolbar">
				<Button click={addRow} type="primary">Add row</Button>
				<Button click={deleteRow}>Delete Row</Button>
			</div>
			<div className="hf-50">
				<Grid
					init={v => api.current = v}
					autoRowHeight={true}
					data={repeatData(60)}
					columns={repeatColumns(15).map(c => ({
						...c,
						resize: true,
						editor: "text",
					}))}
					footer={true}
					split={{ left: 2 }}
				/>
			</div>
		</div>
	)
}

