function examPrep(input) {
	let badGrades = Number(input[0]);
	let badGradesCount = 0;
	let worstGrade = 4;
	let i = 1;
	let finalScore = 0;
	let numberOfProblems = 0;
	let exitMess = "Enough";
	let lastProb = "";
	while (true) {
		let nameOfProblem = input[i];
		i++;
		let gradeOfProblem = Number(input[i]);
		i++;

		if (nameOfProblem == exitMess) {
			console.log(`Average score: ${(finalScore / numberOfProblems).toFixed(2)}`);
			console.log(`Number of problems: ${numberOfProblems}`);
			console.log(`Last problem: ${lastProb}`);
			break;
		}
		numberOfProblems++;
		finalScore += gradeOfProblem;
		lastProb = nameOfProblem;

		if (gradeOfProblem <= worstGrade) {
			badGradesCount++;

			if (badGradesCount == badGrades) {
				console.log(`You need a break, ${badGradesCount} poor grades.`);
			}
		}
	}
}

examPrep(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
