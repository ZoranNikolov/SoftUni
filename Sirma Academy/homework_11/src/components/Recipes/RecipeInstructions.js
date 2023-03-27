export const RecipeInstructions = ({ instructions }) => {
	return (
		<>
			<hr />
			<h3>НАЧИН НА ПРИГОТВЯНЕ</h3>
			<ol>
				{instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
			</ol>
		</>
	);
};
