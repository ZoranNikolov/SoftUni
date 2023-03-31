import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BudgetsProvider } from "./contexts/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BudgetsProvider>
		<App />
	</BudgetsProvider>
);

reportWebVitals();
