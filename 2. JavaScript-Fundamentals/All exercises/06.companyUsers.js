function companyUsers(array) {

    let employees = new Map();

    array.forEach((line) => {
        let [name, id] = line.split(' -> ')

        if (!employees.has(name)) {
            employees.set(name, new Set())
        }

        employees.get(name).add(id)
    })

    let sorted = Array.from(employees).sort()

    for (const [company, value] of sorted) {
        console.log(company);
        value.forEach((id) => {
            console.log(`-- ${id}`);
        })
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])