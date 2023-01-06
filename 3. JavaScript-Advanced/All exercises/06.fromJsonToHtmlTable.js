function jsonToHtmlTable(json) {
	let parsed = JSON.parse(json);
	let columNames = Object.keys(parsed[0]);
	let values = parsed.map((obj) => Object.values(obj));
	let result = "<table>\n";

	appendHeaders(columNames);
	appendValues(values);

	result += "</table>";

	function appendValues(values) {
		for (let currentValue of values) {
			result += `    <tr>`;
			for (const value of currentValue) {
				result += `<td>${escape(value)}</td>`;
			}
			result += "</tr>\n";
		}
	}

	function appendHeaders(columNames) {
		result += `    <tr>`;
		for (let column of columNames) {
			result += `<th>${column}</th>`;
		}
		result += "</tr>\n";
	}

	function escape(value) {
		return value
			.toString()
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#39;");
	}
	console.log(result);
}
// jsonToHtmlTable(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`);
jsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`);
