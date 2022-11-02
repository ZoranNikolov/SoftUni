function jansNotation(notation) {
  let nums = [];
  let array = notation.slice();
  let index = 0;
  let error = false;

  while (array.length > 1) {
    let current = array[index];
    let res = 0;

    if (typeof current === "number") {
      nums.push(current);
    } else {
      if (nums.length > 1) {
        switch (current) {
          case "+":
            let plusB = nums.pop();
            let plusA = nums.pop();
            res = plusA + plusB;
            index -= 2;
            array.splice(index, 3, res);
            nums.push(res);
            break;
          case "-":
            let minusB = nums.pop();
            let minusA = nums.pop();
            res = minusA - minusB;
            index -= 2;
            array.splice(index, 3, res);
            nums.push(res);
            break;
          case "*":
            let multiplyB = nums.pop();
            let multiplyA = nums.pop();
            res = multiplyA * multiplyB;
            index -= 2;
            array.splice(index, 3, res);
            nums.push(res);
            break;
          case "/":
            let divisionB = nums.pop();
            let divisionA = nums.pop();
            res = divisionA / divisionB;
            index -= 2;
            array.splice(index, 3, res);
            nums.push(res);
            break;
        }
      }
    }

    index++;

    let countNum = 0;
    let countOp = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        countNum++;
      } else {
        countOp++;
      }
    }

    if (countNum > 1 && countOp === 0) {
      console.log("Error: too many operands!");
      error = true;
      break;
    } else if (countNum < 2 && countOp > 0) {
      console.log("Error: not enough operands!");
      error = true;
      break;
    }
  }
  if (!error) {
    console.log(array.join(""));
  }
}
jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([0, "/", "*"]);

// function solve(expression) {
//   let stack = [];
//   let instructionSet = {
//       '+': (a, b) => a + b,
//       '-': (a, b) => a - b,
//       '*': (a, b) => a * b,
//       '/': (a, b) => a / b,
//   };

//   for (let i of expression) {
//       let instruction = instructionSet[i];
//       if (instruction === undefined) {
//           stack.push(i);
//       } else {
//           let [reg2, reg1] = [stack.pop(), stack.pop()];
//           if (reg1 === undefined || reg2 === undefined) {
//               console.log('Error: not enough operands!');
//               return;
//           }
//           stack.push(instruction(reg1, reg2));
//       }
//   }

//   if (stack.length > 1) {
//       console.log('Error: too many operands!');
//   } else {
//       console.log(stack.pop());
//   }
// }

// solve([0, "/", "*", 5, 10]);
