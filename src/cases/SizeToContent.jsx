import { getData } from "../data.js";
import { Grid } from "wx-react-grid";

const { data, allColumns } = getData();

export default function SizeToContent() {
	return (
		<>
			<div className="p20">
				<h4>DataGrid adjusts to the content ( 1 row )</h4>
				<Grid data={data.slice(0, 1)} columns={allColumns.slice(0, 3)} />
			</div>

			<div className="p20">
				<h4>DataGrid adjusts to the content ( 1 row, flexible column widths )</h4>
				<Grid
					data={data.slice(0, 1)}
					header={false}
					columns={[
						{ id: "id", width: 40 },
						{ id: "city", flexgrow: 1 },
						{ id: "email", flexgrow: 1 },
					]}
				/>
			</div>

			<div className="p20">
				<h4>DataGrid adjusts to the content ( 10 rows )</h4>
				<Grid data={data.slice(0, 10)} columns={allColumns.slice(0, 5)} />
			</div>

			<div className="p20">
				<h4>DataGrid adjusts to the content ( multiple rows )</h4>
				<Grid data={data} columns={allColumns} />
			</div>
		</>
	)
}
