import { getData } from "../data.js";
import { Grid } from "wx-react-grid";

const { data } = getData();
const columns = [
	{ id: "id", width: 50, resize: true },
	{ id: "city", header: "City", flexgrow: 1, resize: true },
	{ id: "email", header: "Email", flexgrow: 2, resize: true },
	{ id: "firstName", header: "First Name", resize: true },
	{ id: "lastName", header: "Last Name", resize: true },
];

export default function Resize() {


	return (
		<div className="p20">
			<h4>Resizable columns: drag a border between header cells</h4>
			<div className="mw700">
				<Grid data={data} columns={columns} splitLeft={2} />
			</div>
		</div>
	)

}
