//ACTIVATING STRICT MODE
"use strict";
// const interface = "Audio"
// const private = "ES6"
// console.log(private);
// console.log(interface);
//FUNCTIONS

// function greeter (){
// console.log('Hey, good evening');
// return 20
// }
// const result = greeter()
// console.log(result);
// calcAgeDecl(2000);

// blender()
// let x = 5;
// let y = 3;
// let sum = x + y;
// console.log(sum);
// x = 20;
// y = 30;
// sum = x + y;
// console.log(sum);

// function addNumbers(x, y) {
//   console.log(x + y);
//   return "hello";
// }
// console.log(addNumbers(5, 3));

// function blender(apples, oranges) {
// const juice = `juice with ${apples} apples and ${oranges} oranges`;
// console.log(juice);

// }
// const endResult = blender(5, 6);
// console.log(endResult);

//FUNCTION DECLARATION AND FUNCTION EXPRESSION
// function calcAgeDecl(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(age);
//   console.log("decl", this);
// }
//FUNCTION EXPRESSION
// const calcAgeExp = function (birthYear) {
//   const age = 2022 - birthYear;
//   console.log(age);
//   console.log("exp", this);
// };
// calcAgeExp(2000);
// console.log(typeof calcAgeExp);

//ARROW FUNCTIONS
// const calcAgeArrow = (birthYear) => {
//   const age = 2022 - birthYear;
//   console.log(age);
//   console.log("arr", this);
// };
// calcAgeArrow(2005);
//REVIEWING FUNCTIONS
// const greeter = function (user) {
//   console.log(user);
//   console.log(`Hello ${user} how was your day`);
//   const y = 10;
//   const x = 30;
//   const sum = y + x
//   console.log(sum);
//   return sum
// };
// const result = greeter("Ayo");
// console.log(result);

//DATA STRUCTURES - ARRAYS
// const friend1 = "Ciroma";
// const friend2 = "Dumebi";
// const friend3 = "Kate";
// console.log(friend3);
// const firstName = "Ayobami";
// const friends = ["Ciroma", "Dumebi", "Kate", "Adekunle", "Philips", firstName];
// console.log(friends);

// const friends2 = new Array(
//   "Ciroma",
//   "Dumebi",
//   "Kate",
//   "Adekunle",
//   "Philips",
//   firstName
// );
// console.log(friends2);

// console.log(friends);
// console.log(friends);
// console.log(friends[1]);
// console.log(friends[friends.length - 1]);
// console.log(friends[5 - 4]);
// friends[1*3] = "Ruth";
// console.log(friends);

//BASIC ARRAY OPERATIONS
// const friends = ["Ciroma", "Dumebi", "Kate", "Adekunle", "Philips"];
//ADDING ELEMENTS TO AN ARRAY
// friends.push("Olumide", "Tayo")
// console.log(friends);
// friends.unshift("Bridget", "Queen");
// console.log(friends);
//REMOVING ELEMENTS FROM AN ARRAY
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends);
// friends.splice(1,2)
// console.log(friends);

//  console.log(friends.includes("George"));
//  const bill = Number(prompt("Enter bill amount"));
//  const tipFor275 = bill * 0.15
//  const tipFor40 = bill * 0.20
// const tip = bill <= 300 && bill >= 50 ? tipFor275 : tipFor40;
// console.log(tip)

// const bill = prompt("Enter bill amount");
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// console.log(tip);

// const bill = Number(prompt("Enter bill"));
// const tip = Number(prompt("tip % " )) / 100
// const amount = bill * tip

// console.log(amount)

//INTRODUCTION TO OBJECTS
// const ciromaInfo = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   age: 20,
//   job: "Programmer",
//   getSummary: function () {
//     console.log(
//       `${ciromaInfo.firstName} is a ${ciromaInfo.age} year old ${ciromaInfo.job} `
//     );
//   },
// };
// const dumebiInfo = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   age: 20,
//   job: "Programmer",
// };

// console.log(ciromaInfo.firstName)

//DOT VS BRACKET NOTATION
// console.log(ciromaInfo.firstName)
// console.log(ciromaInfo.age)
// // console.log(ciromaInfo.complexion)
// const x = "age"
// // console.log(ciromaInfo["lastName"])
// console.log(ciromaInfo[x])

//OBJECT METHODS
// ciromaInfo.getSummary();
// const arr =[1,2,3]
// arr.push()

//LOOPS(ITERATION)
// console.log("----MANUAL-----")
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log("----FOR LOOP-----")
//FOR LOOP
// for(let i = 0; i <= 5; i++){
// console.log(i)
// }
// for (let rep = 1; rep <= 10; rep += 5) {
//   console.log(`Lifting weight ${rep} time(s)`);
// }
//ITERABLE
//LOOPING THROUGH AN ARRAY
// const friends = ["Ciroma", "Dumebi", "Kate", "Adekunle", "Philips"];
// console.log("----MANUAL LABOUR-----");
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
// console.log("----FOR LOOP-----");
// for (let bunny = friends.length - 1; bunny >= 0; bunny -= 1) {
//   console.log(friends[bunny]);
// }

//LOOPING BACKWARDS
// for (let i = 5; i <= 5; i--) {
//   console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }
// let i = 5
//  i = i - 1;
//  i -= 1
//  i--
//CONTINUE STATEMENT
// const birthYears = [2000, 2002, 2003, 2004, 2005];
// for (let bunny = 0; bunny < birthYears.length; bunny++) {
//   if(birthYears[bunny] === 2002) continue;
//   console.log(2022 - birthYears[bunny])
// }

//BREAK STATEMENT
// const birthYears = [2000, 2002, 2003, 2004, 2005];
// for (let bunny = 0; bunny < birthYears.length; bunny++) {
//   if(birthYears[bunny] === 2002) break;
//   console.log(2022 - birthYears[bunny])
// }

//LOOPS IN LOOPS
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------STARTING EXERCISE ${exercise} ----`);
//   for (let rep = 1; rep <= 5; rep += 1) {
//     console.log(`Lifting weight ${rep} time(s)`);
//   }
// }

// for (let rep = 1; rep <= 10; rep += 1) {
//   console.log(`Lifting weight ${rep} time(s)`);
// }
// const integer = Number(prompt("Enter a number"));

// for(let i = 1; i <= 12; i++){
//   console.log(`${integer} * ${i} = ${integer * i}`)
// }

// for (let i = 1; i <= 12; i++) {
//   console.log(`Multiplication table ${i}`);
//   for (let y = 1; y <= 12; y++) {
//     console.log(`${i} * ${y} = ${i * y}`);
//   }
// }
// console.log(`-----FOR LOOP----`)
// for (let rep = 1; rep <= 10; rep += 1) {
//   console.log(`Lifting weight ${rep} time(s)`);
// }
// //WHILE LOOP
// console.log(`-----WHILE LOOP----`)
// let rep = 1
// while(rep <= 10){
//   console.log(`Lifting weight ${rep} time(s)`);
//   rep++
// }
// const integer = Number(prompt("Enter number"));
// const range = Number(prompt("Enter range"));
// for (let i = 1; i <= range; i++) {
//   console.log(`${integer} * ${i} = ${integer * i}`);
// }
// const age = [];
// const birthYears = [2000, 2002, 2003, 2004, 2005];
// for (let i = 0; i < birthYears.length; i++) {
//   age.push(2022 - birthYears[i]);
// }
// console.log(age)

//REVISION REVISION

// function declaration
// function multiply(x, y) {
//   console.log(x * y);
//   return x * y
// }
// console.log(multiply(5, 6));

// const multiplyExp = function (x, y) {
//   return x * y;
// };
// console.log(multiplyExp(20, 30));

// const multiplyArr = (x,y) => {
//   return x * y;
// }

// const a = 5;
// console.log(a)

// const ciromaInfo = {
//   firstName: "Ciroma",
//   lastName: "Adekunle",
//   age: 20,
//   job: "Programmer",
//   getBirthYear : function(){
//     console.log(2022 - ciromaInfo.age)
//   },
//   getSummary : function(){
//     console.log(`My name is ${ciromaInfo.lastName}`)
//   }
// };
// ciromaInfo.getBirthYear()
// ciromaInfo.getSummary()
// console.log(x)
//ITERATION
// console.log(1)
// console.log(2)

// for(let i = 3; i <= 10; i++){
// console.log(i)
// }

// const friends = ["Ciroma", "Dumebi", "Kate", "Adekunle", "Philips"];
// for(let i = 0; i < friends.length; i++){
//   console.log(friends[i])
// }

const array1 = [1,2,3,4]
const array2 = [45,56,-12,-50]
//create a for loop
//add consecutive numbers together
//create a variable called sum, and add consecutive numbers together
const addArrayNumber = function(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
    }
    console.log(sum)
}
addArrayNumber(array1)
addArrayNumber(array2)