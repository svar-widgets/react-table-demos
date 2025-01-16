import { getData } from "../data.js";
import { Grid } from "wx-react-grid";

const { data } = getData();
let columns = [
	{ id: "id", width: 50, sort: true },
	{ id: "city", header: "City", width: 160, sort: true },
	{ id: "email", header: "Email", width: 250, sort: true },
	{ id: "firstName", header: "First Name", sort: true },
	{ id: "lastName", header: "Last Name", sort: true },
];

export default function Sort() {

	return (<div className="p20">
		<h4>Click on header cells to sort the data</h4>
		<Grid data={data} columns={columns} />
	</div>)
}
