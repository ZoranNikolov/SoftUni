function arenaTier(gladiatorsList) {

    let gladiatorPool = {};

    for (const info of gladiatorsList) {
        if (info === 'Ave Cesar') {
            break;
        } else if (!info.split(' ').includes('vs')) {

            addGladiator(info)
        } else {

            getDuelResult(info)
        }
        function addGladiator(gladiator) {
            let [name, technique, skill] = info.split(' -> ');
            let totalSkill = 'totalSkill';
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
        function getDuelResult(duel) {
            let [gladiatorA, gladiatorB] = info.split(' vs ')
            let isDuel = false
            if (gladiatorPool.hasOwnProperty(gladiatorA) && gladiatorPool.hasOwnProperty(gladiatorB)) {
                let techniqueCounter = 0;
                for (const keyA of Object.keys(gladiatorPool[gladiatorA])) {
                    let gladiatorAtechnique = keyA
                    for (const keyB of Object.keys(gladiatorPool[gladiatorB])) {
                        let gladiatorBtechnique = keyB
                        if (gladiatorAtechnique === gladiatorBtechnique) {
                            techniqueCounter++
                        }
                    }
                    if (techniqueCounter >= 2) {
                        isDuel = true
                    }
                }
            }
            if (isDuel) {
                let gladiatorAtotalSkill = Object.entries(gladiatorPool[gladiatorA])[0].pop()
                let gladiatorBtotalSkill = Object.entries(gladiatorPool[gladiatorB])[0].pop()
                gladiatorAtotalSkill > gladiatorBtotalSkill ?
                    delete gladiatorPool[gladiatorB] :
                    delete gladiatorPool[gladiatorA]
            }
        }
    }
    let sorted = Object.entries(gladiatorPool).sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]))
    
    for (const [name, skills] of sorted) {
        let totalSkill = Object.entries(skills)[0][1]
        delete skills.totalSkill
        let sortedSkills = Object.entries(skills).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        console.log(`${name}: ${totalSkill} skill`)

        for (const [technique, skill] of sortedSkills) {
            console.log(`- ${technique} <!> ${skill}`);
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
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])