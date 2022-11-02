function operationsBetweenNumbers(input) {
    const N1 = Number(input[0]);
    const N2 = Number(input[1]);
    const operator = input[2];
  
    let result = 0;
  
    switch (operator) {
      case "+":
        result = N1 + N2;
        if (result % 2 === 0) {
          console.log(`${N1} ${operator} ${N2} = ${result} - even`);
        } else {
          console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
        }
        break;
      case "-":
        result = N1 - N2;
        if (result % 2 === 0) {
          console.log(`${N1} ${operator} ${N2} = ${result} - even`);
        } else {
          console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
        }
        break;
      case "*":
        result = N1 * N2;
        if (result % 2 === 0) {
          console.log(`${N1} ${operator} ${N2} = ${result} - even`);
        } else {
          console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
        }
        break;
      case "/":
        result = N1 / N2;
        if (N2 === 0) {
          console.log(`Cannot divide ${N1} by zero`);
        } else {
          console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
        }
        break;
      case "%":
        result = N1 % N2;
        if (N2 === 0) {
          console.log(`Cannot divide ${N1} by zero`);
        } else {
          console.log(`${N1} ${operator} ${N2} = ${result}`);
        }
        break;
    }
  }
  operationsBetweenNumbers(["123", "12", "/"]);