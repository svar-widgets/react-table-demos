import { useRef } from "react";
import { getData } from "../data.js";
import { Grid } from "wx-react-grid";
import { Button } from "../ui.js";

const { data, columnsSpans } = getData();

export default function ExportCustomStyles() {

	let tbl = useRef(null);

	function exportExcel(styles) {
		tbl.current.exec("export", {
			options: {
				format: "xlsx",
				styles,
			},
		});
	}

	const commonStyles = {
		verticalAlign: "center",
		align: "left",
	};

	function exportWillow() {
		const headerStyles = {
			fontWeight: "bold",
			color: "#2c2f3c",
			background: "#f2f3f7",
			...commonStyles,
		};
		exportExcel({
			cell: {
				color: "#2c2f3c",
				...commonStyles,
			},
			header: { ...headerStyles },
			footer: { ...headerStyles },
		});
	}

	function exportDark() {
		const headerStyles = {
			fontWeight: "bold",
			color: "#ffffff",
			background: "#20262b",
			...commonStyles,
		};
		exportExcel({
			cell: {
				color: "#ffffff",
				background: "#2a2b2d",
				...commonStyles,
			},
			header: { ...headerStyles },
			footer: { ...headerStyles },
		});
	}

	function exportCustom() {
		const headerStyles = {
			fontWeight: "bold",
			color: "#ffffff",
			background: "#457b9d",
			...commonStyles,
		};
		exportExcel({
			cell: {
				color: "#000000",
				background: "#f2f3f7",
				fontSize: "12px",

				...commonStyles,
			},
			header: { ...headerStyles, textDecoration: "underline" },
			footer: {
				...headerStyles,
				fontStyle: "italic",
				background: "#f2f3f7",
				color: "#000000",
			},
			lastHeaderCell: {
				...headerStyles,
				borderBottom: "2px solid #e63946",
				textDecoration: "underline",
			},
			firstFooterCell: {
				...headerStyles,
				borderTop: "1px dotted #000000",
				fontStyle: "italic",
				background: "#f2f3f7",
				color: "#000000",
			},
		});
	}


	return (
		<div className="p20">
			<div className="toolbar">
				<Button type="primary" click={() => exportWillow()}>Willow skin</Button>
				<Button type="primary" click={() => exportDark()}>Dark skin</Button>
				<Button type="primary" click={() => exportCustom()}
					>Custom styles</Button
				>
			</div>
			<div className="wm800">
				<Grid footer={true} data={data} columns={columnsSpans} init={api => tbl.current = api} />
			</div>
		</div>
	)
}