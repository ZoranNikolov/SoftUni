import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContext = React.createContext();

export function useBudgets() {
	return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {

	const [incomes, setIncomes] = useLocalStorage("incomes", []); //creates item in local storage named "incomes" with initial value empty array
	const [expenses, setExpenses] = useLocalStorage("expenses", []); //creates item in local storage named "expenses" with initial value empty array

	function addIncome({ description, amount, date }) {
		setIncomes((prevIncomes) => {
			return [
				...prevIncomes,
				{ id: uuidV4(), description, amount, date }, //updates the state, adding new income (with unique id) to the previous incomes 
			];
		});
	}

	function addExpense({ description, amount, date }) {
		setExpenses((prevExpenses) => {
			return [
				...prevExpenses,
				{ id: uuidV4(), description, amount, date },//updates the state, adding new expense (with unique id) to the previous expenses 
			];
		});
	}

	function deleteIncome({ id }) { //filters the state, excluding the chosen id (delete income)
		setIncomes((prevIncomes) => {
			return prevIncomes.filter((income) => income.id !== id);
		});
	}

	function deleteExpense({ id }) { //filters the state, excluding the chosen id (delete expense)
		setExpenses((prevExpenses) => {
			return prevExpenses.filter((expense) => expense.id !== id);
		});
	}

	return (
		<BudgetsContext.Provider
			value={{
				addIncome,
				addExpense,
				deleteExpense,
				deleteIncome
			}}
		>
			{children}
		</BudgetsContext.Provider>
	);
};
