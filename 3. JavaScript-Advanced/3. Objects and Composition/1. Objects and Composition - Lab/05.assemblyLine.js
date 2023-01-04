function createAssemblyLine() {
	return {
		hasClima(car) {
			car.temp = 21;
			car.tempSettings = 21;
			car.adjustTemp = () => {
				if (car.temp < car.tempSettings) {
					car.temp++;
				} else if (car.temp > car.tempSettings) {
					car.temp--;
				}
			};
		},
		hasAudio(car) {
			car.currentTrack = { name: "", artist: "" };
			car.nowPlaying = () => {
				if (car.currentTrack !== null) {
					console.log(
						`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`
					);
				}
			};
		},
		hasParktronic(car) {
			car.checkDistance = (distance) => {
				if (distance < 0.1) {
					console.log("Beep! Beep! Beep!");
				} else if (0.1 <= distance && distance < 0.25) {
					console.log("Beep! Beep!");
				} else if (0.25 <= distance && distance < 0.5) {
					console.log("Beep!");
				} else {
					console.log("");
				}
			};
		},
	};
}

const assemblyLine = createAssemblyLine();

const myCar = {
	make: "Toyota",
	model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
	name: "Never Gonna Give You Up",
	artist: "Rick Astley",
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);
