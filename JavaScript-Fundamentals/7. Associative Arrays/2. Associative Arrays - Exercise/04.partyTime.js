function partyTime(array) {

    let normal = [];
    let vip = [];
    let isParty = false;

    for (const line of array) {

        if (line === 'PARTY') {
            isParty = true;
        }

        let firstChar = line[0]

        if (!isParty) {
            !isNaN(firstChar) ? vip.push(line) : normal.push(line);
        } else {
            if (!isNaN(firstChar)) {
                let index = vip.indexOf(line);
                vip.splice(index, 1);
            } else {
                let index = normal.indexOf(line);
                normal.splice(index, 1);
            }
        }
    }

    let size = normal.length + vip.length

    console.log(vip);

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)