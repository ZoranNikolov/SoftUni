export default function dateFormatter(date) { //converts the date format from the date input into DD-MM-YYYY format
	const dateObj = new Date(date);
	const day = dateObj.getDate().toString().padStart(2, "0");
	const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
	const year = dateObj.getFullYear();
	return `${day}-${month}-${year}`;
}