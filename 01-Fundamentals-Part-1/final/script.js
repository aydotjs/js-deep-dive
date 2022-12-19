//VALUES AND VARIABLES
// let firstName = "Ayo";
// let lastName = "Owoeye"
// console.log(lastName);
// console.log(firstName);
// console.log(5)
// console.log("5")
//CONVENTIONS AND RULES OF NAMING VARIABLES
//camel casing
// let highscore = 100;
// let accountBalanceInNaira = 0;
//rules
//!number
// let highScore1 = 200
// let high-Score = 20
// let else = "Hello"
// let person1 = "Ciroma";
// console.log(person1);

// let PERSON1 = "ayo"

// let job1 = "Programmer";
// let job2 = "Teacher"

// let firstJob = "Programmer"
// let secondJob = "Teacher"

//DATA TYPES
//1 ==> Primitives
//2 ===> Objects

//PRIMITIVE DATA TYPES
//number
// console.log(typeof 50);
//string
// let firstName = "Dumebi"
// console.log(firstName);

// console.log("Korede");

//boolean
// console.log(typeof false);

//undefined
// let accountBalance;
// console.log(typeof undefined);

//null
// let account = null;
// console.log(typeof null);

//symbol

//bigint
// console.log(typeof 50n);

// let accountBalance;
// console.log(accountBalance);
// accountBalance = 50;
// console.log(accountBalance);

//DYNAMIC TYPING
// let firstName = "Ayo";
// console.log(typeof firstName);

// firstName = 70;
// console.log(typeof firstName);

//LET CONST VAR
//let variables can be mutated
// let age = 20;
// age = 21
// console.log(age);

// let mood;
// console.log(mood);

// mood = "Happy"
// console.log(mood);
// const birthYear = 2000;
// console.log(birthYear);
// const mood = "Happy";

//var
// var job = "Programmer";
// job = "Teacher";
// console.log(job);
//BASIC OPERATORS
//MATH OPERATORS
//COMPARISON OPERATORS
//LOGICAL  OPERATORS
//ASSIGNMENT  OPERATORS
//MATH OPERATORS
// const currentYear = 2022;
// const ageDumebi = currentYear - 2005
// console.log(ageDumebi);
// const num1 = 2;
// const num2 = 5
// console.log(2 + 5 * 3);//7
// console.log(2 - 5);//-3
// console.log(2 * 5);//10
// console.log(2 / 5);//

// const firstName = "Ciroma"
// const lastName = "Adekunle"
// const fullName = firstName  + " " +  lastName
// console.log(fullName);

//COMPARISON OPERATORS
// console.log(5 < 6);//T
// console.log(5  > 6);//F
// console.log(5 >= 6);// F
// console.log(5 <= 6);//T

//ASSIGNMENT  OPERATORS
//=
//+=
//-=
//*=
// let account = 100;
// account = account + 500
// account = (account - 500)
// console.log(account);
// account /= 300
// console.log(account);

//LOGICAL OPERATORS
//AND ==> &&
//OR
// console.log('========AND OPERATION======');

// console.log(true && true);//true
// console.log(true && false);//false
// console.log(false && true);//false
// console.log(false && false);//false
// console.log('========OR OPERATION======');
//OR
// console.log(true || true);//true
// console.log(true || false);//true
// console.log(false || true);//true
// console.log(false || false);//false

//OPERATOR PRECEDENCE
// console.log(2 + 5 * 3); //17
// let x, y;
// x = y = 25 - 10 - 5;
// // console.log(x);
// // console.log(y);
// const bodyMass = 75;
// const height = 1.84;

// const bmi = bodyMass / height * height;
// console.log(bmi);

//TEMPLATE LITERALS
// const firstName = "Ciroma"
// const lastName = "Adek \n unle"
// const fullName = firstName  + " " +  lastName + " " + 50 * 20 ;
// console.log(fullName);

// const firstName = "Ciroma";
// const lastName = "Dumebi"
// const fullName =  `${firstName} ${lastName} ${5*10}`
// console.log(fullName);
// const statement = `I woke up with 0 and got
//  an alert of ${50*20} before i slept`
// console.log(statement);
// console.log("I am \nhungry ${5 * 8}");
// console.log(`I am hungry `);

//TAKING DECISIONS
//IF ELSE STATEMENTS
// const age = 19;
// if (age >= 18) {
//   console.log(`Come get your driver's license`);
// } else {
//   console.log(`wait for ${18 - age} years`);
// }

//TYPE CONVERSION AND TYPE COERCION
// const birthYear = prompt("Enter your birthyear");
// console.log(Number(birthYear) + 20);

// console.log(Number('5')+ 3);
// console.log(Number('20') + 20);
// console.log('5' * 3);
// console.log(typeof String(5));
// console.log(Boolean(0));

//TYPE COERCION
// console.log('2' + 3);
// console.log('5' * "4");
// console.log(`5` -"4");
// console.log("5"**"3");

// console.log('23' - "10" -3 + "5");//105

// let n = "1" + 1//11
// n -= 1
// console.log(n);//10

// console.log('10' - "4" - "3" + "5");//35

//TRUTHY AND FALSY VALUES
//0, "", undefined, null, NaN

// console.log(Boolean(0));//false
// console.log(Boolean(''));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean(3));//true
// console.log(Boolean("Ayo"));//true
// console.log(Boolean(20));//true

// const money = 50
// if(money){
//     console.log('dont spend it all');
// }else{
//     console.log('get a job');
// }

//EQUALITY OPERATOR
// const age = Number(prompt("Enter you age"))
// if(age === 19 ){
//     console.log(age + 2)
// }

// //=== called strict equality
// //== called loose equality
// console.log('5'=== 5);//false
// console.log('5'== 5);//true
// console.log(5 != "5");
// console.log(5 !== "5");

//!= loose not eauality
//!== strict not eauality

// CODING CHALLENGE -1
// Ciroma and Dumebi are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
// 1. Store Ciroma's and Dumebi's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'ciromaHigherBMI' containing information about whether Ciroma has a higher BMI than Dumebi.
// TEST DATA 1: Ciroma weights 78 kg and is 1.69 m tall. Dumebi weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Ciroma weights 95 kg and is 1.88 m tall. Dumebi weights 85 kg and is 1.76 m tall.

// const ciromaMass = 78;
// const dumebiMass = 92;
// const ciromaHeight = 1.69;
// const dumebiHeight = 1.95;

// const ciromaBMI = ciromaMass/ciromaHeight ** 2
// const dumebiBMI = dumebiMass/ (dumebiHeight * dumebiHeight)
// console.log("Ciroma bmi",ciromaBMI);
// console.log("dumebi bmi", dumebiBMI);
// const ciromaHigherBMI = ciromaBMI > dumebiBMI
// console.log(ciromaHigherBMI);

// const ciromaMass = 95;
// const dumebiMass = 85;
// const ciromaHeight = 1.88;
// const dumebiHeight = 1.76;

// const ciromaBMI = ciromaMass/ciromaHeight ** 2
// const dumebiBMI = dumebiMass/ (dumebiHeight * dumebiHeight)
// console.log("Ciroma bmi",ciromaBMI);
// console.log("dumebi bmi", dumebiBMI);
// const ciromaHigherBMI = ciromaBMI > dumebiBMI
// console.log(ciromaHigherBMI);

//BOOLEAN LOGIC

// const isDarkSkinned = true;
// const isHausa = false;

// console.log(!isDarkSkinned);
// console.log(!isHausa);

// if (isDarkSkinned === true || isHausa === true) {
//   console.log("Transfer successful");
// } else {
//   console.log("Invalid Transfer");
// }

// console.log(true && true || false && true);//true
// console.log(true && !true || false || true);//true
// console.log(!true || false || true);//true

//CONDITIONAL TERNARY OPERATOR
/*
if (age > 18) {
  console.log("you can drink wine");
} else {
  console.log("you can drink water");
}
*/
// const age = 2;
// const isAdult = age > 18 ? "yaay" : "naayy";
// console.log(isAdult);

//STATEMENTS AND EXPRESSIONS

// const x = 5;
// console.log(`${5}`);

// console.log(5*10*29);
// const greeting = "Hello"
//  const isAdult = age > 18 ? "yaay" : "naayy";