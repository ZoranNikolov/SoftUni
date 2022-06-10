function firm(input) {
  const hoursNeeded = Number(input[0]);
  const daysToFinish = Number(input[1]);
  const extraWorkingEmployees = Number(input[2]);

  const workHours = daysToFinish * 0.9 * 8;
  const extraWorkingHours = extraWorkingEmployees * 2 * daysToFinish;

  const workHoursTotal = Math.floor(workHours + extraWorkingHours);

  const difference = Math.abs(hoursNeeded - workHoursTotal);

  if (hoursNeeded <= workHoursTotal) {
    console.log(`Yes!${difference} hours left.`);
  } else {
    console.log(`Not enough time!${difference} hours needed.`);
  }
}
firm(["50", "5", "2"]);