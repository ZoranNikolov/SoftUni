export const RecipeHead = ({ title, quote }) => {
	return (
		<>
			<h1>{title}</h1>
			<hr />
			{quote && (
				<>
					<p>
						<cite>{quote}</cite>
					</p>
					<hr />
				</>
			)}
		</>
	);
};
