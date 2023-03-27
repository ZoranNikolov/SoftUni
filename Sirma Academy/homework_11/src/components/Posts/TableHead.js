export const TableHead = ({tableHeads}) => {
	return (
		<thead>
			<tr>
				{tableHeads.map((tableHead, index) => (
					<th key={index}>{tableHead}</th>
				))}
			</tr>
		</thead>
	);
}