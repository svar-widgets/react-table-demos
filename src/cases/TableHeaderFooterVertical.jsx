import { getData } from "../data.js";
import { Grid } from "wx-react-grid";

	const {
		data,
		columnsVertical: columns,
		columnsSpansVertical: scolumns,
	} = getData();
	data.length = 5;


export default function TableHeaderFooterVertical() {

	return (
		<div className="p20">
			<div>
				<Grid data={data} columns={columns} footer={true} />
			</div>
			<div className="mt20">
				<Grid data={data} columns={scolumns} footer={true} />
			</div>
		</div>
	)
}


