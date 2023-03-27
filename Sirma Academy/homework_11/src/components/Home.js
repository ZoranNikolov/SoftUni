import styles from "./css/home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className={styles.container}>
			<h1>
				Бихте могли да разгледате нашите рецепти, постове с новини или
				да влезете в профила си за повече възможности!
			</h1>
			<ul>
				<li>
					<Link to="/recipeone">Рецепти</Link>
				</li>
				<li>
					<Link to="/postortable">Постове</Link>
				</li>
				<li>
					<Link to="/login">Логин</Link>
				</li>
			</ul>
		</div>
	);
};
