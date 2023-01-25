function filterEmloyees(string, criteria) {
	let parsedArray = JSON.parse(string);
	criteria === "all"
		? parsedArray.forEach(function (obj, i) {
				console.log(`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
		  })
		: parsedArray
				.filter(function (obj) {
					let [critKey, critValue] = criteria.split("-");
					return obj[critKey] === critValue;
				})
				.forEach(function (obj, i) {
					console.log(
						`${i}. ${obj.first_name} ${obj.last_name} - ${obj.email}`
					);
				});
}
filterEmloyees(
	`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
	"gender-Female"
);
