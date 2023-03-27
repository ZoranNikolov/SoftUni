import { Link } from "react-router-dom";

export const PostOrTable = () => {
	return (
		<>
			<p>
				Бихте могли да разгледате нашите статии или да проверите
				количеството валежи за последните 4 години н територията на
				Република България:
			</p>
			<ul>
				<li>
					<Link to="/posts">Статии</Link>
				</li>
				<li>
					<Link to="/table">Количество валежи</Link>
				</li>
			</ul>
		</>
	);
};
