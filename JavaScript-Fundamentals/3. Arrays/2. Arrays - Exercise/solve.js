function StringChallenge(num) { 

    // code goes here  
    let minutes = num % 60;
    let hours = Math.floor(num / 60).toFixed(0)
    num = `${hours}:${minutes}`
    console.log(num);
  }
     
  // keep this function call here 
  StringChallenge(63)