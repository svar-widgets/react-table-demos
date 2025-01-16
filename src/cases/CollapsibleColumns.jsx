import { getData } from "../data";
import { Grid } from "wx-react-grid";

export default function CollapsibleColumns() {

	const { data, collapsibleColumns } = getData();

	return (
		<>
		<div className="p20">
			<div>
				<Grid data={data} columns={collapsibleColumns()} footer={true} />
			</div>
		</div>

		<div className="p20">
			<div>
				<Grid data={data} columns={collapsibleColumns("first")} />
			</div>
		</div>
		</>
	)
}