import { useState } from "react";
import { getData, repeatColumns } from "../data.js";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

const { data } = getData();
const columns = repeatColumns(50);

export default function Styling() {

	const [cellStyle, setCellStyle] = useState(null);
	const [i, setI] = useState(0);

	function nextRow() {
		let id = data[i].id;
		setCellStyle(() => (row, col) => {
			return row.id === id && col.id === "lastName" ? "cellStyle" : ""
		});
		setI(i === data.length - 1 ? 0 : i + 1);
	}

	return (
		<div className="p20">
			<p>
				<Button type="primary" click={() => nextRow()}>
					Hightlight next row
				</Button>
			</p>
			<div>
				<Grid
					data={data}
					columns={columns}
					cellStyle={cellStyle}
					rowStyle={row => (row.id === 12 ? "rowStyle" : "")}
					columnStyle={col => (col.id === "city" ? "columnStyle" : "")}
					footer={true}
				/>
			</div>
		</div>
	);	
}