import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainNavigation } from "./components/MainNavigation";
import { RecipeOne } from "./components/Recipes/RecipeOne";
import { RecipeTwo } from "./components/Recipes/RecipeTwo";
import { RecipeThree } from "./components/Recipes/RecipeThree";
import { RecipeFour } from "./components/Recipes/RecipeFour";
import { RecipeFive } from "./components/Recipes/RecipeFive";
import { PostOrTable } from "./components/Posts/PostOrTable";
import { Posts } from "./components/Posts/Posts";
import { PostOne } from "./components/Posts/PostOne";
import { PostTwo } from "./components/Posts/PostTwo";
import { PostThree } from "./components/Posts/PostThree";
import { PostFour } from "./components/Posts/PostFour";
import { Table } from "./components/Posts/Table";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/Login/SignUp";
import { Home } from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<MainNavigation />
			</header>
			<Routes>
				<Route path="/" element=<Home /> />
				
				<Route path="/recipeone" element=<RecipeOne /> />
				<Route path="/recipetwo" element=<RecipeTwo /> />
				<Route path="/recipethree" element=<RecipeThree /> />
				<Route path="/recipefour" element=<RecipeFour /> />
				<Route path="/recipefive" element=<RecipeFive /> />

				<Route path="/postortable" element=<PostOrTable /> />
				<Route path="/posts" element=<Posts /> />
				<Route path="/postone" element=<PostOne /> />
				<Route path="/posttwo" element=<PostTwo /> />
				<Route path="/postthree" element=<PostThree /> />
				<Route path="/postfour" element=<PostFour /> />
				<Route path="/table" element=<Table /> />

				<Route path="/login" element=<Login /> />
				<Route path="/signup" element=<SignUp /> />

				<Route path="*" element=<ErrorPage /> />
			</Routes>
		</div>
	);
}

export default App;
