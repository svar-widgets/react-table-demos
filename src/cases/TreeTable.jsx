import { useRef } from "react";
import { getData } from "../data.js";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

const { treeData, treeColumns } = getData();

export default function TreeTable() {

	
	const api = useRef(null);

	function openAll() {
		api.current.exec("open-row", { id: 0, nested: true });
	}
	function closeAll() {
		api.current.exec("close-row", { id: 0, nested: true });
	}

return (
<div className="p20">
	<div className="toolbar">
		<Button type="primary" click={() => openAll()}>Open all</Button>
		<Button type="primary" click={() => closeAll()}>Close all</Button>
	</div>
	<div>
		<Grid
			init={a => api.current = a}
			tree={true}
			data={treeData}
			columns={treeColumns}
			footer={true}
		/>
	</div>
</div>



);
}