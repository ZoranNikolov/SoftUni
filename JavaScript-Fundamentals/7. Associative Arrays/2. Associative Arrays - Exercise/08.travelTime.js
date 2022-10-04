function travelTime(array) {

    let destinations = {}

    for (let line of array) {
        let [countryName, town, price] = line.split(' > ')

        destinations.country = countryName
        console.log(destinations);

    }

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])