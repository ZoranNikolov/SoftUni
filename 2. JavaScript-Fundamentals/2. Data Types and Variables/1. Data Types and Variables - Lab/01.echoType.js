function echoType(input) {
  console.log(typeof input);
  if (typeof input !== "string" && typeof input !== "number") {
    console.log("Parameter is not suitable for printing");
  } else {
    console.log(input);
  }
}
echoType("Hello, JavaScript!");
echoType(18);
echoType(null);
