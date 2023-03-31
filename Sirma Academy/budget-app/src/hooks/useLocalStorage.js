import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(key);

		if (jsonValue !== null) { //checks if there is a value associated with the key in local storage, if there is, it returns that value
			return JSON.parse(jsonValue);
		}

		if (typeof defaultValue === "function") {//if the default value is a function, calls the function, otherwise returns the default value
			return defaultValue();
		} else {
			return defaultValue;
		}
	});

	useEffect(() => { //listens for changes in the key or value and updates the localStorage accordingly
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
