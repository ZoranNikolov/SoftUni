export const modalVisibilityHandler = () => { //displays the chosen modal
	const handleShowAddIncomeModal = (setShowAddIncomeModal) => {
		setShowAddIncomeModal(true);
	};

	const handleHideAddIncomeModal = (setShowAddIncomeModal) => {
		setShowAddIncomeModal(false);
	};

	const handleShowAddExpenseModal = (setShowAddExpenseModal) => {
		setShowAddExpenseModal(true);
	};

	const handleHideAddExpenseModal = (setShowAddExpenseModal) => {
		setShowAddExpenseModal(false);
	};

	const handleShowImportFromFileModal = (setShowImportFromFileModal) => {
		setShowImportFromFileModal(true);
	};
	const handleHideImportFromFileModal = (setShowImportFromFileModal) => {
		setShowImportFromFileModal(false);
	};

	const handleShowViewIncomeModal = (setShowViewIncomeModal) => {
		setShowViewIncomeModal(true);
	};

	const handleHideViewIncomeModal = (setShowViewIncomeModal) => {
		setShowViewIncomeModal(false);
	};

	const handleShowViewExpensesModal = (setShowViewExpensesModal) => {
		setShowViewExpensesModal(true);
	};

	const handleHideViewExpensesModal = (setShowViewExpensesModal) => {
		setShowViewExpensesModal(false);
	};

	const handleShowViewTotalModal = (setShowViewTotalModal) => {
		setShowViewTotalModal(true);
	};

	const handleHideViewTotalModal = (setShowViewTotalModal) => {
		setShowViewTotalModal(false);
	};

	return {
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
	};
};
