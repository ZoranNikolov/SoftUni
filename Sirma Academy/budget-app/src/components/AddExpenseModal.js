import React from "react";
import { useState } from "react";
import { useBudgets } from "../contexts/BudgetContext";
import dateFormatter from "../utils/dateFormatter";

export default function AddIncomeModal({ handleClose }) {
	const { addExpense } = useBudgets();
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");

	const handleAmountChange = (event) => {
		setAmount(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const newExpense = {
			description,
			amount: Number(amount),
			date: dateFormatter(date)
		};

		addExpense(newExpense);
		setAmount("");
		setDescription("");
		setDate("");
	};

	const handleDateChange = (event) => {
		const { value } = event.target;
		setDate(value);
	};

	return (
		<div className="overlay">
			<div className="add-transaction-component">
				<h2>Add expense</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="amount">Amount:</label>
					<input
						type="number"
						value={amount}
						onChange={handleAmountChange}
						id="amount"
						required
					/>
					<label htmlFor="description">Description:</label>
					<input
						type="text"
						value={description}
						onChange={handleDescriptionChange}
						id="description"
						required
					/>
					<label htmlFor="datePicker">Date:</label>
					<input
						type="date"
						value={date}
						onChange={handleDateChange}
						id="datePicker"
						className="date-picker"
						required
					/>
					<input type="submit" value="Add" />
				</form>
				<button className="close-btn" onClick={handleClose}>
					<span className="close-symbol">&times;</span>
				</button>
			</div>
		</div>
	);
}
