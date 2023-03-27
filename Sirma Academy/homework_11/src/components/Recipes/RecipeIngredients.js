export const RecipeIngredients = ({ingredients}) => {
	return(
		<ul>
			<h3>НЕОБХОДИМИ ПРОДУКТИ</h3>
			{ingredients.map((ingredient, index)=> <li key={index}>{ingredient}</li>)}
		</ul>
	)
}