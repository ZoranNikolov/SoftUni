const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement("h1", {}, "Hello from React!");
// const secondHeadingElement = React.createElement("h2", {}, "Some slogan here");
// const headerElement = React.createElement("header", {},	headingElement,	secondHeadingElement);

// Use JSX syntax

const headerElement = (
	<div>
		<header className="header-container">
			<h1>Hello from React!</h1>
			<h2>Some slogan here</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
				architecto?
			</p>
			<p>Awesomess Maximus</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, repudiandae!</p>
		</header>
		<button>Click here</button>
	</div>
);

root.render(headerElement);