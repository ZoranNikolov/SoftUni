import { useEffect, useState } from "react";
import { useBudgets } from "../contexts/BudgetContext";

export default function ViewIncomeModal({ handleClose }) {
	const { deleteIncome } = useBudgets();
	const [incomes, setIncomes] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {
		const storedIncomes = JSON.parse(localStorage.getItem("incomes")); //gets incomes from local storage
		setIncomes(storedIncomes || []); //if there are no incomes stored, sets the state to empty array
	}, []);

	useEffect(() => {
		const totalIncome = incomes.reduce(
			(total, income) => total + income.amount, 0); //calculates the total amount
		setTotalIncome(totalIncome.toFixed(2));
	}, [incomes]);

	function handleDeleteIncome(id) { //gets the id of the selected income and deletes it (filters the incomes excluding the income we want to delete)
		deleteIncome({ id });
		setIncomes(incomes.filter((income) => income.id !== id));
	}

	return (
		<div className="overlay">
			<div className="show-transactions-component">
				<h2>Incomes</h2>
				{incomes.map((income) => (
					<div className="transaction-info" key={income.id}>
						<ul>
							<li>
								<p>Description: {income.description}</p>
							</li>
							<li>
								<p>Amount: {income.amount} BGN</p>
							</li>
							<li>
								<p>Date: {income.date}</p>
							</li>
						</ul>
						<button
							className="delete-btn"
							onClick={() => handleDeleteIncome(income.id)}
						>
							Delete
						</button>
					</div>
				))}
				<p className="total">Total Income: <br/><br/>{totalIncome} BGN</p>
				<button className="close-btn" onClick={handleClose}>
					<span className="close-symbol">&times;</span>
				</button>
			</div>
		</div>
	);
}
