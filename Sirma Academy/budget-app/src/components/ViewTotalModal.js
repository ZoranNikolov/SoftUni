export default function ViewTotalModal({ handleClose }) {
	const totalIncome = JSON.parse(localStorage.getItem("incomes"))
		.reduce((total, income) => total + income.amount, 0);
	const totalExpenses = JSON.parse(localStorage.getItem("expenses"))
		.reduce((total, expense) => total + expense.amount, 0);
	const total = (totalIncome - totalExpenses).toFixed(2);

	return (
		<div className="overlay">
			<div className="show-total">
				<h2>Total Net:</h2>
				<p>{total} BGN</p>
				<button className="close-btn" onClick={handleClose}>
					<span className="close-symbol">&times;</span>
				</button>
			</div>
		</div>
	);
}
