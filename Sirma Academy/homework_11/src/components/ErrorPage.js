import error from "../resources/images/error-404.jpg";

export const ErrorPage = () => {
	const style = {
		width: "625px",
		margin: "0 auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<div>
			<img src={error} alt="Page not found" style={style} />
		</div>
	);
};
