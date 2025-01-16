import { getData } from "../data.js";
import { Grid } from "wx-react-grid";

const { allData: data, countries, users } = getData();

const columns = [
	{ id: "id", width: 50 },
	{
		id: "firstName",
		header: 'Name - "text"',
		editor: "text",
		width: 180,
	},
	{
		id: "country",
		header: 'Country - "combo"',
		editor: {
			type: "combo",
			config: { template: option => `${option.id}. ${option.name}` },
		},
		options: countries,
		width: 180,
	},
	{
		id: "date",
		header: 'Date - "datepicker"',
		width: 180,
		editor: "datepicker",
		template: v => (v ? v.toLocaleDateString() : ""),
	},
	{
		id: "user",
		header: 'User - "richselect"',
		width: 180,
		editor: "richselect",
		options: users,
	},
];


export default function InlineEditors() {
	return (
		<div className="p20">
			<h4>
				Editable cells: use double click to activate an editor. Use Tab, Enter
				and Esc to navigate
			</h4>
			<div>
				<Grid data={data} columns={columns} />
			</div>
		</div>
	);
}
