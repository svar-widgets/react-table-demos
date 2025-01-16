import { getData } from "../data";
import { Grid } from "wx-react-grid";

export default function AutoConfigColumns() {

	const { allData } = getData();
	const config = { editor: "text" };
	return (
		<div style={{ padding: "20px", height:"620px", maxWidth:"800px", overflow: "hidden" }}>
			<div>
				<Grid data={allData} autoConfig={config} />
			</div>
		</div>
	);
}
