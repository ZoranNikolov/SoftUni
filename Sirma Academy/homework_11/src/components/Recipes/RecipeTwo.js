import styles from "./css/main.module.css";
import { RecipeHead } from "./RecipeHead";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeInstructions } from "./RecipeInstructions";
import { RecipesNavigation } from "./RecipesNavigation";

export const RecipeTwo = () => {
	return (
		<div className={styles.container}>
			<RecipesNavigation />
			<RecipeHead 
				title="Чийзкейк с крема сирене и ягоди"
				quote="Страхотен чийзкейк с крема сирене и ягоди - удоволствие за
				сетивата."
			/>
			<RecipeIngredients 
				ingredients=
				{[
					'заквасена сметана - 400 г',
					'течна сметана - 200 мл',
					'крема сирене - 200 г',
					'желатин - 15 г',
					'пудра захар - 6 с.л.',
					'ягоди - 300 г',
					'лимонова кора - 1/2',
					'ванилия - 1',
					'обикновени бисквити - 200 г',
					'краве масло - 120 г',
				]} />
			<RecipeInstructions
				instructions={[
					`Обикновени бисквити се смилат. Прибавя се разтопеното краве
					масло. Разбърква се.`,
					`Сместа се поставя в ринг с размер 22 сантиметра. Разпределя
					се и леко се притиска с лъжица. Оставя се в хладилник.`,
					`Желатинът се залива със 100 мл студена вода и се оставя да
					набъбне.`,
					`Течната сметана се разбива.`,
					`Крема сиренето се смесва със заквасената сметана и захарта.
					Разбърква се и се прибавя към разбитата сметана.`,
					`Добавя се желатинът към приготвения сметанов крем.`,
					`Кремът се ароматизита с настърганата кора от лимона и
					ванилията.`,
					`Половината крем се поставя върху основата на чийзкейка без
					печене.`,
					`Разпръскват се част от нарязаните на дребно ягоди и се
					разпределя останалият крем.`,
					`Чийзкейкът с крема сирене и ягоди се поставя в хладилник за
					2-3 часа.`,
					`Украсява се с останалите ягоди.`,
				]}
			/>
			<ol></ol>
		</div>
	);
};
