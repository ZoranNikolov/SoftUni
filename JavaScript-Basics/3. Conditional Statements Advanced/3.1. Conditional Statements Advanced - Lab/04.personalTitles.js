function personalTitles(input) {
    const age = Number(input[0]);
    const gender = input[1];
  
    if (age >= 16) {
      if (gender === "m") {
        console.log("Mr.");
      } else {
        console.log("Ms.");
      }
    } else {
      if (gender === "m") {
        console.log("Master");
      } else {
        console.log("Miss");
      }
    }
  }
  personalTitles(["10", "m"]);
  