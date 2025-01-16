import { useRef, useState } from "react";
import { getData } from "../data";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

const { data, columns } = getData();

export default function EventHandling() {
	const api = useRef(null);
	const [messages, setMessages] = useState([]);
	const helpers = {
		showNotice: (ev) => {
			setMessages((prev) => [...prev, ev.text]);
		}
	}



	async function addRow() {
		await api.current.exec("add-row", {
			row: {},
			done: ev => {
				helpers.showNotice({ text: "row added, id:" + ev.row.id });
			},
		});
	}

	async function deleteRow() {
		await api.current.exec("delete-row", {
			id: api.current.getState().selected,
			done: () => {
				helpers.showNotice({ text: "[delete] store" });
			},
		});
		helpers.showNotice({ text: "[delete] finish" });
	}

	function init(v) {
		api.current = v;

		//selection handlers
		api.current.on("select-row", log("[select] on"));
		api.current.intercept("select-row", ({ id }) => {
			if (id % 2 === 1) {
				log("[select] intercept: blocked")();
				return false;
			}
			else log("[select] intercept")();
		});

		api.current.on("add-row", log("[add] on"));
		api.current.intercept("add-row", log("[add] intercept"));

		api.current.on("delete-row", log("[delete] on"));
		api.current.intercept("delete-row", log("[delete] intercept"));
	}

	function log(text) {
		return () => helpers.showNotice({ text });
	}

	return (
		<div className="p20">
			<div>
				<Button click={addRow} type="primary">Add row</Button>
				<Button click={deleteRow}>Delete row</Button>
				<hr />

				<Grid
					init={init}
					data={data}
					columns={columns}
					onSelectRow={log("[select] handler")}
					onAddRow={log("[add] handler")}
					onDeleteRow={log("[delete] handler")}
				/>

				<div style={{width: "600px", "max-height":"320px", overflow:"auto"}}>
				{messages.reverse().map((msg, i) => (
					<div className="mline" key={i}>{msg}</div>
				))}
				</div>
			</div>
		</div>
	)
}