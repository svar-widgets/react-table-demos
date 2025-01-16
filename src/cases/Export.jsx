import { useRef } from "react";
import { getData } from "../data.js";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

const { data, columnsSpans } = getData();

export default function ExportCustomStyles() {
	let tbl = useRef(null);

	function exportExcel() {
		tbl.current.exec("export", {
			options: {
				format: "xlsx",
				fileName: "clients",
				sheetName: "Main client info",
			},
		});
	}

	function exportCsv() {
		tbl.current.exec("export", {
			options: {
				format: "csv",
				fileName: "clients",
				cols: ";",
			},
		});
	}

	return (
		<div className="p20">
			<div className="toolbar">
				<Button type="primary" click={exportExcel}>Export to Excel</Button>
				<Button type="primary" click={exportCsv}>Export to CSV</Button>
			</div>
			<div className="mw800">
				<Grid footer={true} data={data} columns={columnsSpans} init={api => tbl.current = api} />
			</div>
		</div>
	)
}