import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import AddIncomeModal from "./components/AddIncomeModal";
import AddExpenseModal from "./components/AddExpenseModal";
import ViewIncomeModal from "./components/ViewIncomeModal";
import ViewExpensesModal from "./components/ViewExpensesModal";
import ViewTotalModal from "./components/ViewTotalModal";
import ImportFromFileModal from "./components/ImportFromFileModal";
import { modalVisibilityHandler } from "./utils/modalVisibilityHandler";

function App() {
	const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
	const [showImportFromFileModal, setShowImportFromFileModal] =
		useState(false);

	const [showViewIncomeModal, setShowViewIncomeModal] = useState(false);
	const [showViewExpensesModal, setShowViewExpensesModal] = useState(false);
	const [showViewTotalModal, setShowViewTotalModal] = useState(false);

	const {
		handleShowAddIncomeModal,
		handleHideAddIncomeModal,
		handleShowAddExpenseModal,
		handleHideAddExpenseModal,
		handleShowImportFromFileModal,
		handleHideImportFromFileModal,
		handleShowViewIncomeModal,
		handleHideViewIncomeModal,
		handleShowViewExpensesModal,
		handleHideViewExpensesModal,
		handleShowViewTotalModal,
		handleHideViewTotalModal,
	} = modalVisibilityHandler();

	return (
		<div>
			<div className="header">
				<Header title="Budget Calculator" />
			</div>

			<div className="container">
				<button
					onClick={() => {
						handleShowAddIncomeModal(setShowAddIncomeModal);
					}}
				>
					Add Income
				</button>
				{showAddIncomeModal && (
					<AddIncomeModal
						handleClose={() =>
							handleHideAddIncomeModal(setShowAddIncomeModal)
						}
					/>
				)}

				<button
					onClick={() =>
						handleShowAddExpenseModal(setShowAddExpenseModal)
					}
				>
					Add Expense
				</button>
				{showAddExpenseModal && (
					<AddExpenseModal
						handleClose={() =>
							handleHideAddExpenseModal(setShowAddExpenseModal)
						}
					/>
				)}

				<button
					onClick={() =>
						handleShowImportFromFileModal(setShowImportFromFileModal)
					}
				>
					Import from file
				</button>
				
				{showImportFromFileModal && (
					<ImportFromFileModal
						handleClose={() =>
							handleHideImportFromFileModal(setShowImportFromFileModal)
						}
					/>
				)}

				<button
					onClick={() =>
						handleShowViewIncomeModal(setShowViewIncomeModal)
					}
				>
					Show Income
				</button>
				{showViewIncomeModal && (
					<ViewIncomeModal
						handleClose={() =>
							handleHideViewIncomeModal(setShowViewIncomeModal)
						}
					/>
				)}

				<button
					onClick={() =>
						handleShowViewExpensesModal(setShowViewExpensesModal)
					}
				>
					Show Expenses
				</button>
				{showViewExpensesModal && (
					<ViewExpensesModal
						handleClose={() =>
							handleHideViewExpensesModal(
								setShowViewExpensesModal
							)
						}
					/>
				)}

				<button
					onClick={() =>
						handleShowViewTotalModal(setShowViewTotalModal)
					}
				>
					Show Total
				</button>
				{showViewTotalModal && (
					<ViewTotalModal
						handleClose={() =>
							handleHideViewTotalModal(setShowViewTotalModal)
						}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
