function gladiatorInventory(array) {
  let newArr = array.slice();
  let inventory = newArr.shift().split(" ");

  for (let el of newArr) {
    let commandEquipment = el.split(" ");
    let command = commandEquipment[0];
    let equipment = commandEquipment[1];

    switch (command) {
      case "Buy":
        if (!inventory.includes(equipment)) {
          inventory.push(equipment);
        }

        break;

      case "Trash":
        if (inventory.includes(equipment)) {
          let indexToRemove = inventory.indexOf(equipment);
          inventory.splice(indexToRemove, 1);
        }

        break;

      case "Repair":
        if (inventory.includes(equipment)) {
          let indexToRepair = inventory.indexOf(equipment);
          let equipmentToRepair = inventory.splice(indexToRepair, 1).join("");
          inventory.push(equipmentToRepair);
        }

        break;

      case "Upgrade":
        let upgradeEquipment = equipment.split("-");
        equipment = upgradeEquipment[0];

        if (inventory.includes(equipment)) {
          let indexToInsert = inventory.indexOf(equipment) + 1;
          let upgradedEquipmentToInsert = upgradeEquipment.join(":");
          inventory.splice(indexToInsert, 0, upgradedEquipmentToInsert);
        }

        break;
    }
  }

  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
