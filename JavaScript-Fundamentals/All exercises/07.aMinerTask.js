function aMinerTask(array) {

    let resources = new Map();

    for (let i = 0; i < array.length; i += 2) {

        let resource = array[i]
        let currentAmount = Number(array[i + 1])

        if (!resources.has(resource)) {
            resources.set(resource, new Set())
        }

        resources.get(resource).add(currentAmount)

    }

    for (const [resource, value] of resources) {
        let amount = 0;
        value.forEach(num => {
            amount += num
        })
        console.log(`${resource} -> ${amount}`);
    }

}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])