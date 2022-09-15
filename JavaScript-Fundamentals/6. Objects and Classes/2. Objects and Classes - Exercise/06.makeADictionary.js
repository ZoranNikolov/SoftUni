function makeADictionary(input){
  let dict = {};
  for (let element of input){
      let obj = JSON.parse(element);
      dict = Object.assign(dict, obj);        
  } 
      
  let sortedKeys = Object.keys(dict);
  sortedKeys.sort((a, b) => a.localeCompare(b));   
   
  for (let term of sortedKeys) {
      let definition = dict[term];             
      console.log(`Term: ${term} => Definition: ${definition}`);
  }
}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);

// function makeADictionary(arr) {
//   let dictionaryArr = arr.slice();
//   let newArr = [];
//   let dictionary = {};

//   for (let el of dictionaryArr) {
//     let parsedEl = JSON.parse(el);
//     for (const key in parsedEl) {
//       dictionary.term = key;
//       dictionary.definition = parsedEl[key];
//     }
//     newArr.push(JSON.parse(JSON.stringify(dictionary)));
//   }

//   newArr.sort((a, b) => {
//     return a.term.localeCompare(b.term);
//   });

//   for (const el of newArr) {
//     let term = el.term;
//     let definition = el.definition;
//     console.log(`Term: ${term} => Definition: ${definition}`);
//   }
// }
// makeADictionary([
//   '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//   '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//   '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//   '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//   '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
// ]);
