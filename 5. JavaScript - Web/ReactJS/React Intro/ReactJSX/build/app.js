var rootElement = document.querySelector("#root");
var root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement("h1", {}, "Hello from React!");
// const secondHeadingElement = React.createElement("h2", {}, "Some slogan here");
// const headerElement = React.createElement("header", {},	headingElement,	secondHeadingElement);

// Use JSX syntax

var headerElement = React.createElement(
	"div",
	null,
	React.createElement(
		"header",
		{ className: "header-container" },
		React.createElement(
			"h1",
			null,
			"Hello from React!"
		),
		React.createElement(
			"h2",
			null,
			"Some slogan here"
		),
		React.createElement(
			"p",
			null,
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, architecto?"
		),
		React.createElement(
			"p",
			null,
			"Awesomess Maximus"
		),
		React.createElement(
			"p",
			null,
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, repudiandae!"
		)
	),
	React.createElement(
		"button",
		null,
		"Click here"
	)
);

root.render(headerElement);