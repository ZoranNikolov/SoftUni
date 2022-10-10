function arenaTier(gladiatorsList) {

    let gladiatorPool = {};
    let aveCesar = gladiatorsList.pop()

    for (const gladiatorInfo of gladiatorsList) {
        let [name, technique, skill] = gladiatorInfo.split(' -> ');
        let totalSkill = 'totalSkill'

        if (!gladiatorPool.hasOwnProperty(name)) {
            gladiatorPool[name] = {}
            gladiatorPool[name][totalSkill] = 0

        }

        if (!gladiatorPool[name].hasOwnProperty(technique)) {
            gladiatorPool[name][technique] = Number(skill);
            gladiatorPool[name][totalSkill] += Number(skill)
        } else {
            if (Number(skill) > gladiatorPool[name][technique]) {
                let diff = Number(skill) - gladiatorPool[name][technique]
                gladiatorPool[name][technique] = Number(skill)
                gladiatorPool[name][totalSkill] += diff
            }
        }
    }

    for (const [name, technique] of Object.entries(gladiatorPool)) {

        for (const [key, value] of Object.entries(technique)) {
            console.log(`name ${name}, ${key}, ${value}`);
        }

    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])
// arenaTier([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ])