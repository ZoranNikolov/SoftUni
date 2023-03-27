import styles from "./css/main.module.css";
import { RecipeHead } from "./RecipeHead";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeInstructions } from "./RecipeInstructions";
import { RecipesNavigation } from "./RecipesNavigation";

export const RecipeFive = () => {
	return (
		<div className={styles.container}>
			<RecipesNavigation />
			<RecipeHead
				title="Коктейл Лонг Айлънд"
			/>
			<RecipeIngredients
				ingredients=
				{[
					'30 мл. водка',
					'30 мл. текила',
					'30 мл. ром',
					'30 мл. джин',
					'30 мл. трипъл сек',
					'45 мл. сладко-кисел микс',
					'50 мл. кока кола',
					'1 резен лимон',
					'2 коктейлни черешки',
					'лед',
				]}
			/>
			<RecipeInstructions 
				instructions=
				{[
					`Натрийте ръбчето на чашата за маргарита с резенче лайм.`,
					`Ледът се слага в шейкър.`,
					`Водката (30 мл.), текилата (30 мл.), ромът (30 мл.), джинът
					(30 мл.), трипъл секът (30 мл.) и сладко-киселият микс (45
					мл.) се разбиват в шейкъра с леда.`,
					`Съдържанието се изсипва във висока чаша с лед и резен лимон
					и се долива с кока кола (50 мл.).`,
					`Коктейлът се украсява с резен лимон и коктейлни черешки.`
				]}
			/>
		</div>
	);
};
