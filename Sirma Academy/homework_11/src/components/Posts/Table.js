import { Link } from "react-router-dom";
import logo from "../../resources/images/logo_arrow_back.svg";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export const Table = () => {
	const tableHeads = [
		"Година",
		"Януари",
		"Февруари",
		"Март",
		"Април",
		"Май",
		"Юни",
		"Юли",
		"Август",
		"Септември",
		"Октомври",
		"Ноември",
		"Декември",
	];
	const firstRow = [
		"2022 г.",
		"0.30 л/м<sup>2</sup>",
		"0.35 л/м<sup>2</sup>",
		"0.50 л/м<sup>2</sup>",
		"0.43 л/м<sup>2</sup>",
		"0.41 л/м<sup>2</sup>",
		"0.31 л/м<sup>2</sup>",
		"0.45 л/м<sup>2</sup>",
		"0.10 л/м<sup>2</sup>",
		"0.12 л/м<sup>2</sup>",
		"0.15 л/м<sup>2</sup>",
		"0.46 л/м<sup>2</sup>",
		"1.45 л/м<sup>2</sup>",
	];
	const secondRow = [
		"2021 г.",
		"0.32 л/м<sup>2</sup>",
		"0.54 л/м<sup>2</sup>",
		"0.53 л/м<sup>2</sup>",
		"0.47 л/м<sup>2</sup>",
		"0.31 л/м<sup>2</sup>",
		"0.21 л/м<sup>2</sup>",
		"0.65 л/м<sup>2</sup>",
		"1.10 л/м<sup>2</sup>",
		"1.12 л/м<sup>2</sup>",
		"0.45 л/м<sup>2</sup>",
		"0.86 л/м<sup>2</sup>",
		"1.35 л/м<sup>2</sup>",
	];
	const thirdRow = [
		"2020 г.",
		"0.72 л/м<sup>2</sup>",
		"0.84 л/м<sup>2</sup>",
		"0.63 л/м<sup>2</sup>",
		"0.07 л/м<sup>2</sup>",
		"0.51 л/м<sup>2</sup>",
		"0.71 л/м<sup>2</sup>",
		"0.35 л/м<sup>2</sup>",
		"1.50 л/м<sup>2</sup>",
		"0.17 л/м<sup>2</sup>",
		"0.75 л/м<sup>2</sup>",
		"0.96 л/м<sup>2</sup>",
		"1.05 л/м<sup>2</sup>",
	];
	const fourthRow = [
		"2019 г.",
		"0.74 л/м<sup>2</sup>",
		"0.88 л/м<sup>2</sup>",
		"0.69 л/м<sup>2</sup>",
		"0.97 л/м<sup>2</sup>",
		"0.71 л/м<sup>2</sup>",
		"0.81 л/м<sup>2</sup>",
		"0.87 л/м<sup>2</sup>",
		"1.98 л/м<sup>2</sup>",
		"0.54 л/м<sup>2</sup>",
		"0.98 л/м<sup>2</sup>",
		"1.66 л/м<sup>2</sup>",
		"1.75 л/м<sup>2</sup>",
	];

	return (
		<>
			<Link to="/postortable">
				<img src={logo} width="25" title="Go back" alt="Arrow back" />
			</Link>
			<h2>
				Количество валежи на квадратен метър през последните 4 години на
				територията на Република България
			</h2>
			<table
				border="1"
				bordercolor="black"
				width="100%"
				cellpadding="10"
				cellspacing="0"
			>
			<TableHead tableHeads={tableHeads} />
			<TableBody
				firstRow={firstRow}
				secondRow={secondRow}
				thirdRow={thirdRow}
				fourthRow={fourthRow}
			/>
			</table>
		</>
	);
};
