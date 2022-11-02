function projectsCreation(input) {
    let architectName = input [0];
    let projectNumber = input [1];
    let timeEvaluation = projectNumber * 3;
    console.log("The architect" + " " + architectName + " " + "will need" + " " + timeEvaluation + " " +  "hours to complete" + " " + projectNumber + " " + "project/s.");
}

projectsCreation(['Todor Ivanov', '7'])