function launchBreak(input) {
	let Movietitle = input[0];
	let epizodeDuration = Number(input[1]);
	let brekDuration = Number(input[2]);

	let launchtime = (1 / 8) * brekDuration;
	let Leisuretime = (1 / 4) * brekDuration;

	let busytime = launchtime + Leisuretime;
	let timeleft = brekDuration - busytime;

	if (timeleft >= epizodeDuration) {
		let TimeAfterMovie = timeleft - epizodeDuration;

		console.log(
			`You have enough time to watch ${Movietitle} and left with ${Math.ceil(
				TimeAfterMovie
			)} minutes free time.`
		);
	} else {
		let timeNeedet = epizodeDuration - timeleft;
		console.log(
			`You don't have enough time to watch ${Movietitle}, you need ${Math.ceil(
				timeNeedet
			)} more minutes.`
		);
	}
}

launchBreak(["Game of Thrones", "60", "96"]);
launchBreak(["Teen Wolf", "48", "60"]);
