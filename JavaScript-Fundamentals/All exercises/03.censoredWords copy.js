function censoredWords(text, word) {

    let newText = text.split(word)
    let res = newText.join('*'.repeat(word.length))
    console.log(res);
    
}
censoredWords('A small sentence with some words', 'small')
censoredWords('Find the hidden word', 'hidden')