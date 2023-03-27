import { NavLink } from "react-router-dom";
import styles from "./css/mainNavigation.module.css";

export const MainNavigation = () => {
	return (
				<>
					<ul className={styles.container}>
						<li>
							<NavLink style={({ isActive }) => ({color: isActive ? "black" : "gray"})} to="/">Начало</NavLink>
						</li>
						<li>
							<NavLink style={({ isActive }) => ({color: isActive ? "black" : "gray"})} to="/recipeone">Рецепти</NavLink>
						</li>
						<li>
							<NavLink style={({ isActive }) => ({color: isActive ? "black" : "gray"})} to="/postortable">Постове</NavLink>
						</li>
						<li>
							<NavLink style={({ isActive }) => ({color: isActive ? "black" : "gray"})} to="/login">Логин</NavLink>
						</li>
					</ul>
					<hr />
				</>
			);
};
