const student1 = {
  Bangla: 87,
  English: 72,
  Math: 95,
  Science: 82,
  History: 75
};

let totalMarks = 0;
for (let subject in student1) {
// totalMarks = totalMarks + student1[subject];
  totalMarks +=student1[subject];
}
console.log(`Total marks for student: ${totalMarks}`);


// Accessing keys 
for (let subject in student1) {
  console.log(subject);
}
// Accessing values
for (let subject in student1) {
  console.log(student1[subject]);
}

// To get all valu like keys: values pair
for (let subject in student1) {
  console.log(student1);
}