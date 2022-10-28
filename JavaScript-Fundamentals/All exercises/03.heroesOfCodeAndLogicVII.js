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
		heroes[hero].hp = hp;
		heroes[hero].mp = mp;
	}

	commandParser = {
		CastSpell(heroes, hero, mpNeeded, spell) {
			mpNeeded = Number(mpNeeded);

			if (heroes[hero].mp >= mpNeeded) {
				heroes[hero].mp -= mpNeeded;
				console.log(
					`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`
				);
			} else {
				console.log(`${hero} does not have enough MP to cast ${spell}!`);
			}

			return heroes;
		},
		TakeDamage(heroes, hero, damage, attacker) {
			damage = Number(damage);
			heroes[hero].hp -= damage;

			if (heroes[hero].hp > 0) {
				console.log(
					`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`
				);
			} else {
				delete heroes[hero];
				console.log(`${hero} has been killed by ${attacker}!`);
			}

			return heroes;
		},
		Recharge(heroes, hero, amountRecharge) {
			amountRecharge = Number(amountRecharge);

			if (heroes[hero].mp + amountRecharge > maxMp) {
				amountRecharge = maxMp - heroes[hero].mp;
			}

			heroes[hero].mp += amountRecharge;
			console.log(`${hero} recharged for ${amountRecharge} MP!`);

			return heroes;
		},
		Heal(heroes, hero, amountHeal) {
			amountHeal = Number(amountHeal);

			if (heroes[hero].hp + amountHeal > maxHp) {
				amountHeal = maxHp - heroes[hero].hp;
			}

			heroes[hero].hp += amountHeal;
			console.log(`${hero} healed for ${amountHeal} HP!`);

			return heroes;
		},
	};

	input.forEach((line) => {
		if (line !== "End") {
			let [command, ...tokens] = line.split(" - ");
			heroes = commandParser[command](heroes, ...tokens);
		}
	});

	for (const hero in heroes) {
		console.log(hero);
		console.log(`  HP: ${heroes[hero].hp}`);
		console.log(`  MP: ${heroes[hero].mp}`);
	}
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
heroes([
	"4",
	"Adela 90 150",
	"SirMullich 70 40",
	"Ivor 1 111",
	"Tyris 94 61",
	"Heal - SirMullich - 50",
	"Recharge - Adela - 100",
	"CastSpell - Tyris - 1000 - Fireball",
	"TakeDamage - Tyris - 99 - Fireball",
	"TakeDamage - Ivor - 3 - Mosquito",
	"End",
]);
