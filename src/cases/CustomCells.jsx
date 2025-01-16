import { getData } from "../data";
import { Grid } from "wx-react-grid";
import AvatarCell from "../custom/AvatarCell.jsx";

const columns = [
	{ id: "id", width: 50 },
	{ id: "avatar", cell: AvatarCell, width: 300 },
];
const { data } = getData();

export default function CustomCells() {
	return (
		<div className="p20">
			<h4>Table with custom cells and templates</h4>
			<div className="mw800 h320">
				<Grid
					sizes={{ rowHeight: 70 }}
					data={data}
					columns={columns}
				/>
			</div>
		</div>
	)
}

