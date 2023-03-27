import styles from "./css/main.module.css";
import { RecipeHead } from "./RecipeHead";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeInstructions } from "./RecipeInstructions";
import { RecipesNavigation } from "./RecipesNavigation";

export const RecipeFour = () => {
	return (
		<div className={styles.container}>
			<RecipesNavigation />
			<RecipeHead
				title="Коктейл Маргарита"
			/>
			<RecipeIngredients
				ingredients=
				{[
					'75 мл. текила',
					'25 мл. трипъл сек',
					'50 мл. лимонов сок',
					'сол',
					'1 резен лайм',
				]}
			/>
			<RecipeInstructions
				instructions=
				{[
					`Натрийте ръбчето на чашата за маргарита с резенче лайм.`,
					`В малка чинийка разстелете слой едра сол, обърнете чашата и
					внимателно я допрете до солта, така че да полепне сол по
					края.`,
					`Текилата (75 мл.), трипъл секът (25 мл.) и лимоновият сок
					(50 мл.) се разбиват с лед в шейкър.`,
					`Изсипват се в чашата (без да се преизползва ледът от
					разбиването).`,
					`Коктейлът маргарита се сервира украсен с резенче лайм.`
				]}
			/>
		</div>
	);
};
