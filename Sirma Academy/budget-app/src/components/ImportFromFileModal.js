import { useBudgets } from "../contexts/BudgetContext";
import { useState, useEffect, useRef } from "react";
import { validateData } from "../utils/validateData";
import currencyFormatter from "../utils/currencyFormatter";

export default function ImportFromFileModal({ handleClose }) {
	const { addIncome, addExpense } = useBudgets();
	const fileInputRef = useRef(null); //get reference to the file input field
	const [selectedFile, setSelectedFile] = useState("");
	const [fileContent, setFileContent] = useState("");
	const [errorMessages, setErrorMessages] = useState([]);
	const [isImported, setIsImported] = useState(false);

	const { validateAmount, validateDate, validateTransactionType } = validateData(setErrorMessages); 
	//initially passes setErrorMessages to the validateData, using currying technique in JS
	//belowe in the code pass and the data to the validating functions

	useEffect(() => {
		validateAmount(data);
		validateDate(data);
		validateTransactionType(data);
	}, [fileContent, selectedFile, fileInputRef]);

	const handleFileRead = (event) => {
		const file = event.target.files[0];
		if (file.type === "text/plain") { //if the chosen file is text file, sets the file to selectedFile variable
			setSelectedFile(file);
			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = () => {	setFileContent(reader.result) }; //sets the result of reading the file to the fileContent
		} else {
			alert("Please select a text file."); //if the user uploads a non-text file, alerts message
			fileInputRef.current.value = ""; //reset the chosen file value
			handleErrorMessagesReset();
			return;
		}
	};

	const rows = fileContent.split("\n"); //splits the content of the file into rows
	if (rows[rows.length - 1] === "") {
		rows.pop(); //removes the last row if it is empty (due to the )
	}

	const data = rows.map((row) => {
		let rowData = row.trim().split(/[,\s\r]+/);
		let type = rowData.shift();
		let date = rowData.pop();
		let amount = rowData.pop();
		let text = rowData.join(" ");
		if (!amount.includes(".")) { //if the user has written the amount in format 100,50, formats the amount into format 100.00
			const formattedCurrency = currencyFormatter(amount, text);
			amount = formattedCurrency.amount;
			text = formattedCurrency.text;
		}
		return [type, text, amount, date];
	});

	const incomesArray = data.filter((row) => row[0] === "income"); //gets the income rows
	const expensesArray = data.filter((row) => row[0] === "expense"); //gets the expense rows

	const handleErrorMessagesReset = () => { //resets states
		setErrorMessages([]);
		setFileContent("");
		setIsImported(false);
	};

	

	const handleSubmit = (event) => {
		event.preventDefault();

		if (errorMessages.length > 0) { //if there are errors, alerts message with the errors
			alert(errorMessages.map((message) => message).join("\n") + '\nPlease, fix the errors and upload the file again.');
			fileInputRef.current.value = "";
			handleErrorMessagesReset();
			return;
		}

		if (fileContent) { // if the file content is not empty, sets true value to isImported boolean and displays message when submitted
			setIsImported(true);
		}

		incomesArray.forEach((income) => {
			const newIncome = {
				description: income[1],
				amount: Number(income[2]),
				date: income[3],
			};

			addIncome(newIncome);
		});

		expensesArray.forEach((expense) => {
			const newExpense = {
				description: expense[1],
				amount: Number(expense[2]),
				date: expense[3],
			};

			addExpense(newExpense);
		});

		fileInputRef.current.value = ""; //resets the value of the chosen file
		setErrorMessages([]); //resets the error messages
		setFileContent(""); //resets the fileContent variable
	};

	return (
		<div className="overlay">
			<div className="import-from-file-component">
				<h2>Import transactions from file</h2>

				<p>
					The data from the file provided should be organized into
					rows.
				</p>
				<p>Example:</p>
				<table>
					<thead>
						<tr>
							<th>Transaction type</th>
							<th>Description</th>
							<th>Amount</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Expense,</td>
							<td>Groceries,</td>
							<td>50.00,</td>
							<td>01-04-2022</td>
						</tr>
						<tr>
							<td>Income,</td>
							<td>Salary,</td>
							<td>1000.00,</td>
							<td>01-05-2022</td>
						</tr>
						<tr>
							<td>Expense,</td>
							<td>Gas,</td>
							<td>20.50,</td>
							<td>15-05-2022</td>
						</tr>
					</tbody>
				</table>
				<div className="small-text">
					<p>Restrictions:</p>
					<ul>
						<li>Supported file format: ".txt".</li>
						<li>
							The transaction type, the description, the amount
							and the date must be separated by comma.
						</li>
						<li>
							The amount of the transaction must be numeric value.
						</li>
						<li>
							You may write the amount in one of the following
							number formats: 50.50 or 50,50.
						</li>
						<li>
							You may write the date in the following format:
							DD-MM-YYYY.
						</li>
					</ul>
				</div>
				{isImported && (
					<p className="successfully-imported">
						Successfully imported
					</p>
				)}
				<form onSubmit={handleSubmit}>
					<input
						type="file"
						accept=".txt"
						onClick={handleErrorMessagesReset}
						ref={fileInputRef}
						onChange={handleFileRead}
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
