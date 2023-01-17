setTimeout(() => {
	console.log("I will refresh");
}, 3000);

document.getElementById("mybtn").addEventListener("click", function (event) {
	event.preventDefault();
});
