import { useEffect, useState } from "react";
import { useBudgets } from "../contexts/BudgetContext";

export default function ViewExpensesModal({ handleClose }) {
	const { deleteExpense } = useBudgets();
	const [expenses, setExpenses] = useState([]);
	const [totalExpenses, setTotalExpenses] = useState("");

	useEffect(() => {
		const storedExpenses = JSON.parse(localStorage.getItem("expenses")); //gets the expenses from local storage
		setExpenses(storedExpenses || []); //if there are no expenses, sets the state to empty array
	}, []);

	useEffect(() => {
		const totalExpenses = expenses.reduce(
			(total, expense) => total + expense.amount, 0); //calculates the total expenses
		setTotalExpenses(totalExpenses.toFixed(2));
	}, [expenses]);

	function handleDeleteExpense(id) { //gets the id of the expens end deletes it on click (filters the expenses excluding the expense we want to delete)
		deleteExpense({ id });
		setExpenses(expenses.filter((expense) => expense.id !== id));
	}

	return (
		<div className="overlay">
			<div className="show-transactions-component">
				<h2>Expenses</h2>
				{expenses.map((expense) => (
					<div className="transaction-info" key={expense.id}>
						<ul>
							<li>
								<p>Description: {expense.description}</p>
							</li>
							<li>
								<p>Amount: {expense.amount} BGN</p>
							</li>
							<li>
								<p>Date: {expense.date}</p>
							</li>
						</ul>
						<button
							className="delete-btn"
							onClick={() => handleDeleteExpense(expense.id)}
						>
							Delete
						</button>
					</div>
				))}
				<p className="total">Total Expenses: <br/><br/>{totalExpenses} BGN</p>
				<button className="close-btn" onClick={handleClose}>
					<span className="close-symbol">&times;</span>
				</button>
			</div>
		</div>
	);
}
