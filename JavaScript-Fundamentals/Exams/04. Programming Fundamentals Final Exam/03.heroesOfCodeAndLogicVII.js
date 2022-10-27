function heroes(input) {
	let numOfHeroes = Number(input.shift());
	let heroes = {};
	const maxHp = 100;
	const maxMp = 200;

	for (let i = 0; i < numOfHeroes; i++) {
		let [hero, hp, mp] = input.shift().split(" ");
		hp = Number(hp);
		mp = Number(mp);

		heroes[hero] = {};
		heroes[hero]["hp"] = hp;
		heroes[hero]["mp"] = mp;
	}

	commandParser = {

        CastSpell(heroes, hero, mpNeeded, spell){
            mpNeeded = Number(mpNeeded);
        }
    };

	input.forEach((line) => {
		if (line !== "End") {
			let [command, ...tokens] = line.split(" - ");
			heroes = commandParser[command](heroes, ...tokens);
		}
	});
}
heroes([
	"2",
	"Solmyr 85 120",
	"Kyrre 99 50",
	"Heal - Solmyr - 10",
	"Recharge - Solmyr - 50",
	"TakeDamage - Kyrre - 66 - Orc",
	"CastSpell - Kyrre - 15 - ViewEarth",
	"End",
]);
// heroes([
// 	"4",
// 	"Adela 90 150",
// 	"SirMullich 70 40",
// 	"Ivor 1 111",
// 	"Tyris 94 61",
// 	"Heal - SirMullich - 50",
// 	"Recharge - Adela - 100",
// 	"CastSpell - Tyris - 1000 - Fireball",
// 	"TakeDamage - Tyris - 99 - Fireball",
// 	"TakeDamage - Ivor - 3 - Mosquito",
// 	"End",
// ]);
