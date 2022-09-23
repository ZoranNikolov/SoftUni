function inventory(array) {
  let heroes = [];

  array.forEach((el) => {
    let [name, level, items] = el.split(" / ");
    let obj = { name: name, level: Number(level), items: items };
    heroes.push(obj);
  });

  let sorted = heroes.sort((a, b) => a.level - b.level);

  sorted.forEach((hero) => {
    console.log(
      `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
    );
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
