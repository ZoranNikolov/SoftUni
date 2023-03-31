import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BudgetsProvider } from "./contexts/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BudgetsProvider>
		<App />
	</BudgetsProvider>
);

reportWebVitals();
