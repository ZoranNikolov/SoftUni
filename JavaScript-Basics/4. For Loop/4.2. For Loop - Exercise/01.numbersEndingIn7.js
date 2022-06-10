function numbersEndingIn7() {
  for (let i = 0; i <= 997; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}
numbersEndingIn7();
