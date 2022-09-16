function flightSchedule(arr) {
  let flights = arr[0];
  let changedStatuses = arr[1];
  let statusToCheck = arr[2];

  let flightChanged = [];
  let flightObj = {};

  for (const status of changedStatuses) {
    flightChanged.push(status.split(" ")[0]);
  }

  flights.map((el) => {
    let flightID = el.splice(0, el.indexOf(' '))
    if (flightChanged.includes(flightID)) {
      console.log(flightID, city);
    }
  });
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled", 'WN498 Cancelled'
  ],
  ["Cancelled"],
]);
