import { getData } from "../data.js";
import { Grid } from "wx-react-grid";

const { data } = getData();

const columns = [
	{ id: "id", width: 50 },
	{ id: "city", header: "City", width: 160 },
	{ id: "firstName", header: "First Name", flexgrow: 1 },
	{ id: "lastName", header: "Last Name", flexgrow: 1 },
	{ id: "companyName", header: "Company", flexgrow: 2 },
];

export default function FillspaceColumns() {
	return (
		<div className="p20">
			<h4>Columns with flexible widths to fill the available space</h4>
			<div>
				<Grid data={data} columns={columns} />
			</div>
		</div>
	)
}