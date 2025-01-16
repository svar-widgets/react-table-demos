import { useEffect, useRef } from "react";
import { useState } from "react";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";
import { RestDataProvider } from "wx-grid-data-provider";

const columns = [
	{
		id: "name",
		header: "Title",
		flexgrow: 1,
		sort: true,
		editor: "text",
	},
	{
		id: "year",
		header: "Year",
		width: 100,
		sort: true,
		editor: "text",
	},
	{
		id: "votes",
		header: "Votes",
		width: 100,
		sort: true,
		editor: "text",
	},
];
const provider = new RestDataProvider(
	"https://master--svar-grid-go--dev.webix.io/films",
	obj => {
		obj.year = obj.year * 1;
		obj.votes = obj.votes * 1;
	}
);


export default function RestBackend() {
	const api = useRef(null);
	const [data, setData] = useState([]);

	useEffect(() => {
		provider.getData().then(v => setData(v));
	}, []);
	
	const deleteRow = () => {
		const id = api.current.getState().selected;
		if (id) {
			api.current.exec("delete-row", { id });
		}
	};
	const addRow = () => {
		api.current.exec("add-row", {
			row: { name: "New Film", year: 2022, votes: 1 },
		});
	};
	const init = () => {
		api.current.setNext(provider);
	};

	return (
		<div className="p20 h600">
			<div className="toolbar">
				<Button click={addRow} type="primary">Add row</Button>
				<Button click={deleteRow}>Delete row</Button>
			</div>

			<Grid data={data} columns={columns} api={api} init={init} />
		</div>
	)
}