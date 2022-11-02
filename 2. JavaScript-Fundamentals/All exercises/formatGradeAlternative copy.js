function formatGrade(grade) {
    let gradeWord = '';

    if (grade < 3) {
        gradeWord = 'Fail'
    } else if (grade < 3.5) {
        gradeWord = 'Poor'
    } else if (grade < 4.5) {
        gradeWord = 'Good'
    } else if (grade < 5.5) {
        gradeWord = 'Very good'
    } else {
        gradeWord = 'Excellent'
    }


    console.log(gradeWord == 'Fail' ?
        'Fail (2)' :
        `${gradeWord} (${grade.toFixed(2)})`)
}
formatGrade(4.99)