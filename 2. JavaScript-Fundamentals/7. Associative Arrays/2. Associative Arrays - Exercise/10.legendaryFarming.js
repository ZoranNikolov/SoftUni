function legendaryFarming(materialsAsString) {
    let materialsArr = materialsAsString.split(' ')
    let keyMaterials = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    }
    let junk = {}
    let legendaryItem = ''
    getFarming(materialsArr)
    console.log(`${legendaryItem} obtained!`);
    getPrintSorted(keyMaterials, junk)
    function getPrintSorted(keyMaterials, junk) {
        let sortedkeyMaterials = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        for (const [material, quantity] of sortedkeyMaterials) {
            console.log(material + ': ' + quantity);
        }
        let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]))
        for (const [material, quantity] of sortedJunk) {
            console.log(material + ': ' + quantity);
        }
    }
    function getFarming(farmingMaterials) {
        for (let i = 0; i < materialsArr.length; i += 2) {
            let quantity = Number(materialsArr[i])
            let material = materialsArr[i + 1].toLowerCase()
            switch (material) {
                case 'shards':
                    keyMaterials.shards += quantity;
                    break
                case 'fragments':
                    keyMaterials.fragments += quantity;
                    break
                case 'motes':
                    keyMaterials.motes += quantity;
                    break;
                default:
                    !junk.hasOwnProperty(material) ?
                        junk[material] = quantity :
                        junk[material] += quantity;
                    break;
            }
            if (keyMaterials.shards >= 250) {
                legendaryItem = 'Shadowmourne'
                keyMaterials.shards -= 250
                break
            } else if (keyMaterials.fragments >= 250) {
                legendaryItem = 'Valanyr'
                keyMaterials.fragments -= 250
                break
            } else if (keyMaterials.motes >= 250) {
                legendaryItem = 'Dragonwrath'
                keyMaterials.motes -= 250
                break
            }
        }
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')