function wordsUpperCase(text) {
	return words = text.match(new RegExp(/\w+/g)).join(", ").toUpperCase();
}
wordsUpperCase("Hi, how are you?");
wordsUpperCase("hello");
