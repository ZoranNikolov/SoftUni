function passwordValidator(password) {

  let digitsCounter = 0;
  let isSymbol = false;

  for (let i = 0; i < password.length; i++) {
    let charNum = password[i].charCodeAt();

    let isDigit = charNum >= 48 && charNum <= 57;
    let isSmallLetter = charNum >= 97 && charNum <= 122
    let isBigLetter = charNum >= 65 && charNum <= 90;

    if (isDigit) {
      digitsCounter++;
    }

    if (!isDigit && !isSmallLetter && !isBigLetter) {
      isSymbol = true
    }

  }

  if (password.length < 6 && password.length > 10) {
    console.log('Password must be between 6 and 10 characters');
  }

  if (isSymbol) {
    console.log('Password must consist only of letters and digits');
  }

  if (digitsCounter < 2) {
    console.log('Password must have at least 2 digits');
  }

  if (digitsCounter >= 2 && !isSymbol && (password.length >= 6 && password.length <= 10)) {
    console.log('Password is valid');
  }

}
passwordValidator('MyPass123')

/*
function passwordValidator(password) {
  let isLongEnough = false;
  let isLetterAndDigits = true;
  let isTwoDigits = false;
  let digitCounter = 0;

  if (password.length >= 6 && password.length <= 10) {
    isLongEnough = true;
  }

  for (let el of password) {
    let current = el.charCodeAt(0);

    if (isLetterAndDigits) {
      if (
        (current >= 48 && current <= 57) ||
        (current >= 65 && current <= 90) ||
        (current >= 97 && current <= 122)
      ) {
        isLetterAndDigits = true;
      } else {
        isLetterAndDigits = false;
      }
    }

    if (current >= 48 && current <= 57) {
      digitCounter++;
    }
  }

  if (digitCounter >= 2) {
    isTwoDigits = true;
  }

  if (!isLongEnough) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLetterAndDigits) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isTwoDigits) {
    console.log("Password must have at least 2 digits");
  }

  if (isLongEnough && isLetterAndDigits && isTwoDigits) {
    console.log("Password is valid");
  }
}
passwordValidator("logIn");
passwordValidator("MyPass123");
passwordValidator("Pa$s$s");
*/