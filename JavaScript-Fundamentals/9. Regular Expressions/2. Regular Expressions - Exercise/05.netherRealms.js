function netherRealms(input) {
	let demons = input.split(/,/g).map((el) => el.trim())
	let object = {}
	for (let demon of demons) {
		let health = 0
		let damage = 0
		if (demon.match(/[A-z]+/g) != null) {
			demon.match(/[A-z]+/g).join('').split('').forEach(char => {
				health += Number(char.charCodeAt())
			})
		}
		let getDamage = demon.match(/[+-]?\d+\.?\d*/g)
		if (getDamage != null) {
			getDamage.forEach(el => {
				damage += Number(el)
			})
		}
		let action = demon.match(/\*|\//g)
		if (action != null) {
			action.forEach(el => {
				if (el == '*') {
					damage *= 2;
				} else {
					damage /= 2;
				}
			})
		}
		if (!object.hasOwnProperty(demon) && demon.length != 0) {
			object[demon] = { health: health, damage: damage }
		}
	}
	let sorted = Object.entries(object).sort((a, b) => {
		return a[0].localeCompare(b[0])
	})
	for (let [key, value] of sorted) {
		console.log(`${key} - ${value.health} health, ${(value.damage).toFixed(2)} damage`);
	}
}
netherRealms('M3ph-0.5s-0.5t0.0**')