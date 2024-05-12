let students = [
    {name: "orel", grade: 95},
    {name: "moses", grade: 100},
    {name: "tony", grade: 82},
    {name: "amir", grade: 70},
    {name: "chris", grade: 43},
    {name: "bar", grade: 65}
]

let passingGrade = 60

function printPassingStudents(studentsArray){
    let passingStudents = studentsArray.filter(function(student){
        return student.grade >= passingGrade
    })
    passingStudents.forEach(function(student) {
        console.log("the student who pass this year is: " + student.name);
});
}

printPassingStudents(students);