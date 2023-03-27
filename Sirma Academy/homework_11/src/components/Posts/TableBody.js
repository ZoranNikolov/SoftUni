export const TableBody = ({ firstRow, secondRow, thirdRow, fourthRow }) => {
	return (
		<tbody>
			<tr>
				{firstRow.map((data, index) =>
					index === 0 ? 
						<th>{data}</th> : 
						<td dangerouslySetInnerHTML={{ __html: data }}></td>
				)}
			</tr>
			<tr>
				{secondRow.map((data, index) =>
					index === 0 ? 
						<th>{data}</th> : 
						<td dangerouslySetInnerHTML={{ __html: data }}></td>
				)}
			</tr>
			<tr>
				{thirdRow.map((data, index) =>
					index === 0 ? 
						<th>{data}</th> : 
						<td dangerouslySetInnerHTML={{ __html: data }}></td>
				)}
			</tr>
			<tr>
				{fourthRow.map((data, index) =>
					index === 0 ? 
						<th>{data}</th> : 
						<td dangerouslySetInnerHTML={{ __html: data }}></td>
				)}
			</tr>
		</tbody>
	);
};
