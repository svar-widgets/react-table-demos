	import { useRef } from "react";
	import { getData } from "../data";
	import { Grid } from "wx-react-grid";

	const { data, treeData, treeColumns } = getData();
	delete treeColumns[0].flexgrow;

	const columns = [
		{ id: "id", width: 50 },
		{ id: "firstName", header: "First Name" },
		{ id: "lastName", header: "Last Name", editor: "text" },
		{ id: "email", header: "Email", editor: "text" },
		{
			id: "companyName",
			header: "Company - long column name could be here",
			editor: "text",
		},
		{
			id: "street",
			header: "Street",
			template: v => v + " street",
		},
	];

export default function ColumnsToContent() {

	const api1 = useRef(null);
	const api2 = useRef(null);

	function resizeColumns() {
		api1.current.exec("resize-column", { id: "email", auto: "data" });
		api1.current.exec("resize-column", { id: "lastName", auto: "header" });
		api1.current.exec("resize-column", {
			id: "companyName",
			auto: true,
			maxRows: 20,
		});
		api1.current.exec("resize-column", { id: "street", auto: true });
	}

	function resizeTreeColumns(api) {
		api2.current.exec("resize-column", { id: "lastName", auto: "data" });
		api2.current.exec("resize-column", { id: "firstName", auto: "header" });
		api2.current.exec("resize-column", { id: "city", auto: true });
	}

	const init = api => {
		api1.current = api;
		resizeColumns();
	};

	const treeInit = api => {
		api2.current = api;
		resizeTreeColumns();
	};

	return (
		<>
		<div className="p20">
			<h3>Basic mode</h3>
			<h4>"Last Name" column is adjusted to header text</h4>
			<h4>"Email" column is adjusted to data</h4>
			<h4>"Company" column is adjusted to both data and header text</h4>
			<Grid
				data={data}
				columns={columns}
				init={init}
				onUpdateCell={resizeColumns}
			/>
		</div>

		<div className="p20">
			<h3>Tree mode</h3>
			<h4>"Last Name" column is adjusted to data</h4>
			<h4>"First Name" column is adjusted to header</h4>
			<h4>"City" column is adjusted to both data and header text</h4>
			<Grid
				init={treeInit}
				tree={true}
				data={treeData}
				columns={treeColumns}
				onUpdateCell={resizeTreeColumns}
			/>
		</div>
		</>
	);
}