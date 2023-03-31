import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import BudgetCard from "./components/BudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetContext";
import ViewExpensesModal from "./components/ViewExpensesModal";

function App() {
	const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
	const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
	const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState(false);
	const { budgets, getBudgetExpenses } = useBudgets();

	function openAddExpenseModal(budgetId) {
		setShowAddExpenseModal(true);
		setAddExpenseModalBudgetId(budgetId);
	}

	return (
		<>
			<Container className="my-4">
				<Stack direction="horizontal" gap="2" className="mb-4">
					<h1 className="me-auto">Budgets</h1>
					<Button
						variant="primary"
						onClick={() => setShowAddBudgetModal(true)}
					>
						Add Budget
					</Button>
					<Button
						variant="outline-primary"
						onClick={openAddExpenseModal}
					>
						Add Expense
					</Button>
				</Stack>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(300px, 1fr))",
						gap: "1rem",
						alignItems: "flex-start",
					}}
				>
					{budgets.map((budget) => {
						const amount = getBudgetExpenses(budget.id).reduce(
							(total, expense) => total + expense.amount,
							0
						);
						return (
							<BudgetCard
								key={budget.id}
								name={budget.name}
								amount={amount}
								max={budget.max}
								onAddExpenseClick={() =>openAddExpenseModal(budget.id)}
								onViewExpenseClick={() =>setViewExpensesModalBudgetId(budget.id)}
							/>
						);
					})}
					<UncategorizedBudgetCard
						onAddExpenseClick={openAddExpenseModal}
						onViewExpenseClick={() =>setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
						}
					/>
					<TotalBudgetCard />
				</div>
			</Container>
			<AddBudgetModal
				show={showAddBudgetModal}
				handleClose={() => setShowAddBudgetModal(false)}
			/>
			<AddExpenseModal
				show={showAddExpenseModal}
				defaultBudgetId={addExpenseModalBudgetId}
				handleClose={() => setShowAddExpenseModal(false)}
			/>
			<ViewExpensesModal
				budgetId={viewExpensesModalBudgetId}
				handleClose={() => setViewExpensesModalBudgetId()}
			/>
		</>
	);
}

export default App;
