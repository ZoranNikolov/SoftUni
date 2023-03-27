import { Link } from "react-router-dom";

export const RecipesNavigation = () => {
	return (
		<>
			<p>Още от нашите рецепти може да намерите тук:</p>
			<ul>
				<li>
					<Link to="/recipeone">Рогчета като от пекарна</Link>
				</li>
				<li>
					<Link to="/recipetwo">
						Чийзкейк с крема сирене и ягоди{" "}
					</Link>
				</li>
				<li>
					<Link to="/recipethree">
						Българска баница с готови кори
					</Link>
				</li>
				<li>
					<Link to="/recipefour">Коктейл Маргарита</Link>
				</li>
				<li>
					<Link to="/recipefive">Коктейл Лонг Айлънд</Link>
				</li>
			</ul>
			<hr />
		</>
	);
};
