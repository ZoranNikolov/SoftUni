function followers(input) {
	let followers = {};

	for (const line of input) {
		if (line === "Log out") {
			break;
		}
		let [command, ...tokens] = line.split(": ");
		let person = tokens.shift();

		switch (command) {
			case "New follower":
				if (!followers.hasOwnProperty(person)) {
					followers[person] = {
						likes: 0,
						comments: 0,
					};
				}
				break;
			case "Like":
				let likes = Number(tokens.shift());

				if (!followers.hasOwnProperty(person)) {
					followers[person] = {
						likes: likes,
						comments: 0,
					};
				} else {
					followers[person].likes += likes;
				}
				break;
			case "Comment":
				if (!followers.hasOwnProperty(person)) {
					followers[person] = {
						likes: 0,
						comments: 1,
					};
				} else {
					followers[person].comments += 1;
				}
				break;
			case "Blocked":
				if (!followers.hasOwnProperty(person)) {
					console.log(`${person} doesn't exist.`);
				} else {
					delete followers[person];
				}
				break;
		}
	}

	console.log(`${Object.entries(followers).length} followers`);

	for (const person in followers) {
		console.log(
			`${person}: ${followers[person].likes + followers[person].comments}`
		);
	}
}
followers([
	"New follower: George",
	"Like: George: 5",
	"New follower: George",
	"Log out",
]);
followers(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])
followers(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
