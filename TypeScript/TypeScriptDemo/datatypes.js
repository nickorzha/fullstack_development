"use strict";
let lname;
// lname = 10;
lname = 'chandra';
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 25;
age = 25.5;
let dob = '25';
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ['Abhishek', 'Abhishek2', 'Abhishek3'];
let emp = empList.find((emp) => emp === 'Abhishek');
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let sum = numList.reduce((acc, num) => acc + num);
let num = numList.find((num) => num === 2);
console.log(results);
console.log(emp);
console.log(sum);
