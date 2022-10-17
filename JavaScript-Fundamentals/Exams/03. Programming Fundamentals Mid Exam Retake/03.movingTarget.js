function movingTarget(input) {

	let targets = input.shift().split(' ').map(Number)

	for (const line of input) {

		if (line === 'End') {
			console.log(targets.join('|'));
		} else {
			let [command, index, token] = line.split(' ')
			index = Number(index)

			switch (command) {
				case 'Shoot':
					if (index >= 0 && index < targets.length) {
						let power = Number(token);
						targets[index] -= power
						if (targets[index] <= 0) {
							targets.splice(index, 1)
						}
					}
					break;
				case 'Add':
					if (index >= 0 && index < targets.length) {
						let value = Number(token)
						
					}
					break;
				case 'Strike':
					let radius = Number(token);
					break
			}
		}
	}

}
movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"])
// movingTarget(["1 2 3 4 5", "Strike 0 1", "End"])