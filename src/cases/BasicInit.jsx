import { getData } from "../data";
import { Grid } from "wx-react-grid";

export default function BasicInit() {

	const { data, columns } = getData();
	return (
		<div style={{ padding: "20px" }}>
			<div>
				<Grid data={data} columns={columns} footer={true} />
			</div>
		</div>
	);
}

