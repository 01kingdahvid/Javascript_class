// alert("Learning JS is Fun!");
// console.warn("BE CAREFUL DAVID JS can blow your MIND");

//  VARIABLES HAVE 3 PARTS
// vsriables are names we used to store values in computer program
// variable parts
// variable declarator, variable name, and variable value
// Declarators in JS: var, let, const
var david = "David is a human being"
console.log(david)
let age = 44
console.log(age);
const name1 = "Success"
console.log(name1);
console.log(david, name1, age)

// Camelcave
const firstName = "Waziri"
console.log(firstName);
let lastName = "Olumide"
console.log(lastName);
const toDoList = ['eat breakfast', 'watch netflix', 'write JS']
console.log(toDoList);


// Difference btw var, let, const
// var firstName
// var can be re-declared and reassigned
var bday = "Tuesday"
console.log(bday);
var bday = "Wednesday"
console.log(bday);
    bday = "Thursday"
    console.log(bday);



// let
// let can only be reassigned
// let cannot be redeclared

let myAge = 30
console.log(myAge);
    myAge =20
    console.log(myAge);

let OTP = 1234
console.log(OTP);
    OTP = Math.floor(Math.random() * 7000)
console.log(OTP);

// const
// Const cannot be declared or reassigned
const myConst = "Mr strict";



// data types in JS

// * strings
// * number 
// * booleans
// * null and undefined 
// * Arrays and Objects
// * Symbols and BigInt

// String
// String are data/text stored in either single or double quotes
const myStr = 'Hello, this is a string with single quotes'
console.log(myStr);
const myStr2 = 'Hello, this is a string with double quotes'
console.log(myStr2);
console.log(myStr, myStr2);
console.log(typeof myStr2);
console.log(OTP, typeof OTP);





// ASSIGNMENT

// Print myStr on the console in block letters (i.e capitalize)
// const uppercase = myStr.toUpperCase('Hello, this is a string with single quotes')
// console.log(uppercase);

console.log(myStr.toUpperCase('Hello, this is a string with single quotes'));
// change the first letter of each word in myStr2 to capital letter

// let myStr = 'Hello, this is a string with single quotes';

// Numbers
const num1 = 65
const gravity = 9.8
const BMI = 22.5
console.log(num1, gravity, BMI);


// Assignment
// what is NaN in JavaScript

// Null and Undefined 
let undef
console.log(undef);
let empty = null;
console.log(empty);


// Booleans
// Boolean returns true or false

let isAuth = false;
if (isAuth) {
    console.log("You are Authorised");
}else{
    console.log("You are not Authorized");
}

// task
let isAdult = false;
if (isAdult){
    console.log("You are 18+");
}else{
    console.log("You are Underaged");
}


// Using loose comparison operator
console.log(0 == false); //true
console.log(1 == true); //true


// Using strict compaarison operator
console.log(0 === false); //false
console.log(1 === true); //false

// Arrays
// an array is a collection of items enclosed in a rectangular bracket
const items = []
console.log(items);

const students = ['sir blard', 'david', 'success', 'richard', 'Tony', 34, true, ["red", "green"]]
console.log(students);
// strings, number, booleans, arrays


// OBJECT
// Name: David
// Age: 34
// Color: ["red", "green"]
// isMarried: True
// OBJECT is a data structure that store data in key-value pairs
const obj = {
    name: "david",
    age: 34,
    color: ["red", "green"],
    isMarried: true
}
console.log(obj);

// STRING METHODS AND PROPERTIES
// index, length, toUpperCase, toLowerCase, split, trim, slice, substring

let word1 = "I love Techstudio"
console.log(word1);
let word2 = "Academy"
console.log(word2);

// concatination of strings; combining 2 or more strings
// let word3 = word1 + ' ' + word2 + " and I am learning JavaScript"
let word3 = `${word1} ${word2} and I am learning JavaScript ${obj.name}`
console.log(word3);


// length
// word1.length = word1
// console.log(word1.length);
let lengthOfWord1 = word1.length
console.log(lengthOfWord1);

// index
// index 0,1,2,3...

console.log(word2);
let firstLetter = word2[0];
console.log(firstLetter);
let lastLetter = word2[6].toUpperCase() //method is a function - bracket to invoke it
console.log(lastLetter);
console.log(word2.length);
let lastIndex = word2.length -1
let lastLetter1 = word2[lastIndex]
console.log(lastLetter1);


// toUpperCase (), toLowerCase
console.log(word1.toUpperCase());
console.log(word2.toLowerCase());

// split
console.log(word2.split('a'));
let fullName = "Blard Omu Richard"
let eachName = fullName.split(' ');
console.log(eachName); //['Blard', 'Omu', 'Richard']
let fName, surName, middleName
fName = eachName[0]
middleName = eachName[1]
surName = eachName[2]
console.log(fName);
console.log(middleName);
console.log(surName);
// console.log(`${fName}\n${middleName}\n${surName}`);


// substring
console.log(word3);
console.log(word3.substring(0, 20));
console.log(word3.substring(0, word3.length));

// Trim
// trim() is used to removes whitespace from a string
let untrimWord = "              Blard                 "
console.log(untrimWord, untrimWord.length); //36
let trimmedWord = untrimWord.trim();
console.log(trimmedWord, trimmedWord.length); //5


// Operator
// Arithmetic Operators; +, -, *, /, **, %, ++, --
// Assignment Operators; =, +=, -=, /=, etc 
// Logically operators; &&, ||, !, ??
// Comparison operators; ==, ===, !=, !==, <, >, >=, <=

console.log(5**3 + 8 - 6 * 10**2 / 25);

// modules (%) returns a remainder
// console.log(25 % 2); //1
// console.log(33 % 4);
// console.log(33 % 5);
// console.log(24 % 2);


for (let n = 1; n <=20; n++) {
    if(n % 2 == 0){
        // console.log(n);
        continue
    }
    console.log(n); //odd
}


let x, y 
x = 13
y = 3


if (x % 2 == 0) {
    console.log("x is an even number");
} else {
    console.log("x is an odd number");
}


//Assignment Operator
// =

let sth = "Something" 
console.log(sth);

// +=, -=

console.log(x, y);

// x = x + 5;

x += y
console.log(x);

y -= x
console.log(y);


// Logical Operator &&, || hand or

let T = true
let F = false

console.log(T);
console.log(F);
console.log(T && F);
console.log(T || F);
console.log(T && T);
console.log(F && F);
let isMarried = true;
console.log(isAdult, isMarried, isAuth);




// ! cahnges to opposite. eg false before ! changes it to true
if (isAdult || isMarried) {
    console.log("Hello, Mrs Adams");
} else {
    console.log("Hello, Mrs Adams");
}




//Write a logic to check password strength
// If the password length is greater 11, and has a special character, it should log "very strong password"
//If the password length is greater 8 but less than 12, it should log "Strong password"
// Else, it should log "Weak password"

let pass = 'mypassword123#@'
console.log(pass);

if (pass.length > 11 && pass.includes(`@`)) {
    console.log(`YOUR PASSWORD: "${pass}" is a very STRONG password`);
}else if (pass.length > 8 && pass.length < 12){
    console.log(`YOUR PASSWORD: "${pass}" IS GOOD`);
} else{
    console.log("Weak password");
} 



// Comparison Operators ==, ===, |=, |==
// == loose comparison, compares the values of variables and not the data types
// === strict comparison, compares the values and data types

let score1 = 40
let score2 = '40'
// console.log(score1 + score2);
console.log(score1 == score2);
console.log(score1 === score2);


// Javascript MathMethods/Functions/Object
// floor ceil random max min  PI

console.log(Math.PI);

let dice = 6
console.log(dice);
    dice = Math.ceil(Math.random() * 6)
console.log(dice);

// diff ceil vs floor 
// floor does not round up but will pick the first whole number
//ceil will round up to whole number


// CONDITIONS if, if-else, if-else-if, switch,  ternary operator

// if(condition)
//  run this codes

if (isAdult) {
    console.log("You can Drive");
}


//if-else

if (isAdult) {
    console.log("You can Drive");
}else{
    console.log("You are not old enough to drive");
}

//if-else-if
//any if statement must start with else and end with if to have more than one condition
//write a javascript logic to log to the console the following message;
//the number "4"is an even number 
//the number '5'is an old number 
//"the number is zero"

let num = 5 
if (num === 0) {
    console.log("The number is ZERO!");
} else if(num % 2 === 0) {
    console.log(`The number ${num} is even number`);
}else{
    console.log(`The number ${num} is odd number`);
}

// Switch statement
const caseValue = null;
switch(caseValue){
    case 1:
        //run this code
        break;
    case 2:
        // run this code
        break;
    default:
        //run this code
}



//Example of Switch Statement
//Students grading system
let grade = 50
switch(grade){
    case 50:
        console.log(`Youe score ${grade} is C`);
        break;
    case 60:
        console.log(`You scored ${grade} and your grade is B`);
        break;
    case 70:
         console.log(`Your score is ${grade} and your grade is B+`);
            break;
    case 80:
        console.log(`Your score is ${grade} and your grade is A`);
        break;
    default:
        console.log("You Failed");
        }

    // Task
    // Using switch statement, create a banking system that authenticate users, deposit, withdraw and checkBalance

//     let enterPin = prompt("Enter PIN or Username")
//     let loginPin = enterPin.toLowerCase()
//     console.log(enterPin, loginPin);
//     let accName = "Oldies"
//     let deposit = "deposit"
//     let withdraw = "withdraw"
//     let checkBalance = "checkBalance"
//     let accBal = 1000

//     if (loginPin == 1234 || loginPin == "oldies"){
//         console.log(`${accName} Welcome to TECHBank APP`);
//     let action = prompt(`Welcome ${accName}, What would like to do?` )
//     //switch action that you are performing
//     switch (action) {
//         case "deposit":
//             // console.log("Deposit");
//             let depAmt = Number(prompt("Enter amount to deposit"));
//             console.log(depAmt);
//             // accbal = accBal + deposit
//             accBal += depAmt;
//             console.log(`You made a deposit of ${depAmt} and your balance is $${accBal}`);
//             break;
//         case "withdraw":
//             // console.log("Withdraw");
//             let withAmt = Number(prompt("Enter amount to withdraw"));
//             if(withAmt > accBal){
//                 console.log("Insufficient Balance!");
//             }else{
           
//             // console.log(withAmt);
//             //accbal = accBal - withdraw
//             accBal -= withAmt;
//             console.log(`You made a withdraw of ${withAmt} and your balance is $${accBal}`);
//         }
//             break;
//         case "checkBalance":
//             let checkAmt = `Your Balance is $${accBal}`;
//             console.log(checkAmt);
//             break;
//             default:
//                 console.log("Oooops ... something went wrong!");
//     }
    
// }else{
//         console.log("Wrong Pin or Username");
//     }

    // Ternary Operator
    // Condition ? expression1 : expression2
    isMarried ? console.log("Call her madam") : console.log("Call her sisi");

    let isLoading = false;
    !isLoading ? console.log("Loading...") : console.log("Data is now available");



    // Assignment

// Write a short note the difference between logical OR and nullish operator (??)
// What is Nan 
 
// answer

// The OR operator || uses the right value if left is false or 0, while the nullish coalescing operator ?? uses the right value if left is null or undefined. || 



// the OR operator can be problematic if your left value might contain "" or 0 or false .
console.log(12 || "invalid")
console.log(0  || "invalid")

console.log("success" || "invalid")
console.log(""     || "invalid") 

console.log(true  || "not found")
console.log(false || "invalid") 

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// function a() {
//     console.log("a was called");
//     return undefined;
//   }
//   function b() {
//     console.log("b was called");
//     return false;
//   }
//   function c() {
//     console.log("c was called");
//     return "foo";
//   }

//   console.log(a() || c());
//   console.log(b() || c());
const isSuccess = null ?? 'Mentor Jnr';
console.log(isSuccess);

const isBlard = 0 ?? 42;
console.log(isBlard);

const isRichard = null || 'Mentor Jnr';
console.log(isRichard);

const isTony = 0 || 42;
console.log(isTony);

//NaN (Not a Number) is a numeric data type that means an undefined value or value that cannot be represented, especially results of floating-point calculations.

// For example, NaNs can represent infinity, result of division by zero, missing value, or the square root of a negative (which is imaginary, whereas a floating-point number is real).





//Array Properties and Methods
const myArr = ["BMW", "Toyota", "Mercedes",  "Lexus", "RR", "Volkswagen", "Tesla"];
console.log(myArr);

// index
// let thirdItem = myArr[2]
let firstItem = myArr[0]
console.log(firstItem);
const lastIndex1 = myArr.length - 1
let lastItem = myArr[lastIndex1]
console.log(lastItem);

myArr[2] = "Mercedes"
console.log(myArr);
//removing single items from an array
//shift() or pop()
let delfirstItem = myArr.shift()
console.log(delfirstItem);
console.log(myArr);

let delLastItem = myArr.pop()
console.log(delLastItem);

//Adding single items to an array
//UNSHIFT() or PUSH()

myArr.unshift("Nissan")
console.log(myArr);
myArr.push("Honda")
console.log(myArr);

//Slice
// Arr.Splice(startIndex, delCount, addItems)
// deleting lexus
myArr.splice(3, 1)
console.log(myArr);
//deleting more tha one item
myArr.splice(3, 0, "Ferarri", "Porche", "Lamboghini")
console.log(myArr);


//Slice(start, end)
let raw = "This is a slice example on string"
console.log(raw);
let rawSlice = raw.slice (0, 10);
console.log(rawSlice);

let carBrand = myArr.slice(0, 4)
console.log(carBrand);
let car 
for (car in carBrand) {
    console.log(carBrand [car].toUpperCase());;
}


//join()
let joined = carBrand.join('#')
console.log(joined);

// let split = (joined.split('-'))
console.log(joined.split);

//reverse()
let numb = [20, 40, 5, 100, 35]
console.log(numb.reverse());

// LOOPS
// for, while, for-in, for-of, do-while, etc...

console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");
console.log("I love JavaScript");

// for
//for (condition)



for(var mentor = 3; mentor <= 10; mentor++) {
    console.log(`I love JavaScript ${mentor}`);
}
for(var count = 10; count >= 0; count--) {
    console.log(`I love JavaScript ${count}`);
}
console.log(`This is count ${count}`);

// let n = 12;
// for (let i = 1; i <= 12; ++i)
//     console.log(n + " X " + i +
//         " = " + n * i);

let n
for(n = 1; n <= 12; n++){
    console.log(`12 X ${n} = ${n * 12}`);
}

const fruits = ["Apple", "Mango", "Orange", "Banana", "Pear", "Grape"];
console.log(fruits);

//solution

for(let i in fruits){
    // console.log(i);
    // console.log(fruits[i]);
    console.log(`Fruits at ${i} is ${fruits[i]}`);
}


console.log("////////////////////////////////////////////");
//Alternatively, using for-of
for(let a of fruits){
    console.log(`This is ${a.toUpperCase()}`);
}



//Task 
//Loop through fruits array and only log the fruits that ends with "e"

for(let fruit of fruits){
    if(fruit.endsWith("e")){
        console.log(`I love ${fruit}`);
    }
}


//while loop
let i = 0
while(i < fruits.length){
    console.log(`This is while ${fruits[i]}`); i++;
}

//Assignment
//Assignment
let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10, 9]
//loop through the marks and select only even numbers and store them in a new array "evenMark".

let evenMark = [];

for (let mark of marks) {
    if (mark % 2 === 0) {
        evenMark.push(mark);
    }
}
//console.log(evenMark);

//filter

let filterMarks = marks.filter((mark) => mark % 2 === 0)
console.log(filterMarks);

//FUNCTIONS
//Function is a block of code written to perform a specific task
//Naming of Function
//handle, get, set, create, delete, fetch, run.
//handleSubmit
//getPosts
//setData
//updatePosts
//createUsers


//Hoisting




//creating functions
//Function declaration
// e.g function nameOfFunction(){
//     //Run this code
// }

function wishHBD(){
    console.log("Happy Birthday TechStudio");
}
//calling function
// wishHBD();
// wishHBD();
// wishHBD();
// wishHBD();
// wishHBD();

//Function expression is another way of creating function
const handleBDay = function(){console.log("Happy Birthday TechStudio Academy");}

handleBDay()
handleBDay()
handleBDay()
handleBDay()
handleBDay()


// const greetMe = function(){
//     console.log("Good Morning Blard");
// }

// greetMe();

// const greetMe = function(somebody){
//     console.log(`Good day ${somebody}`);
// }

// greetMe("Oldies");

const greetMe = function(somebody="Alien"){
        console.log(`Good day ${somebody}`);
    }
    
    greetMe();


function addNum(a,b){
    // console.log(a,b);
    return a + b;
}

// addNum(11,9)
console.log(addNum(11,9));

function sumNum(a,b){
    let sum = a * b;
    // console.log(sumNum);
    return sum
}

console.log(sumNum (11,9));


//Arrow Functions is a type of expresssion

const getSquare = (x, n)=>{

    console.log(`${x**n}`);
}

getSquare(2, 5);

//Task
//Write a function that counts the number of letter in the string parameter passed into it
// i.e countLetter("Blard")
// "The word 'blard' has 5 letters"


function countLetters(inputString) {
    // Remove non-alphabetical characters using a regular expression
    const cleanedString = inputString.replace(/[^a-zA-Z]/g, "");
  
   // Count the number of letters in the cleaned string
    const letterCount = cleanedString.length;
  
    // Print the result
    console.log(`The word '${inputString.trim()}' has ${letterCount} letters`);
  }
  
  // Example usage:
  const inputWord = "Blard";
  countLetters('      mentor     ');


//   function countLetters(string) {
//     // Initialize a variable to store the number of letters.
//     let numLetters = 0;
  
//     // Iterate over the string and count the number of letters.
//     for (let char of string) {
//       if (char.match(/[a-zA-Z]/)) {
//         numLetters++;
//       }
//     }
  
//     // Return the number of letters.
//     return numLetters;
//   }
  
//   // Example usage
//   console.log(countLetters("john"));


// const letter = function(Words="mentor"){
//     let trimword = Words.trim()
//     let count = trimword.length;
//     console.log(`The word in ${trimword} is ${count} letters`);
    
// } 
// letter("    ddfghhjjj     ");


function countletter(word="Blard"){
    let trimWord = word.trim();
    let wordLength = trimWord.length
    console.log(`"${trimWord}" has ${wordLength} letters`);
}
countLetters("   Techstudio   ")



//multiple arguments

function addAll(...num){ //SPREAD
    console.log(num);
}
addAll(3,5,7,8,9,10,11,12,13,14,15, "sdfdfdgdh")


// Rest operator and spread operator, destructuring of array

const countries = ["Zimbabwe", "Togo", "Ghana", "Sudan", "Uk", "Spain"]
const africa = ["Niger", "Ethiopa", "Kenya"]
console.log(countries[1]);
// const [a,b,c,d,] = countries
const [a,b,c, ...d] = countries
console.log(b);
console.log(d);


// copying array
// const allCountries = countries + ',' + africa
const allCountries = [...countries, ...africa];
console.log(allCountries);

//JavaScript Object
//Object is a collection of properties key-value pairs.
const darkMode = {
backgroundColor: "dark-blue",
color: "white",
padding: "10px",
marginTop: "10px",
age: 30,
skills: ["html", "css"]
}
let mode = "dark"
switch (mode){
    case "light":
        console.log("Light mode ON");
        break;
    case "dark":
        console.log("Dark mode ACTIVATED");
        console.log(darkMode);
        break;
    default:
        console.log("Switch to default mode");
}


//Accessing Object
// console.log(darkMode);
// dot
// console.log(darkMode.backgroundColor);
// console.log(darkMode.skills);
//key
// console.log(darkMode[`backgroundColor`]);
// console.log(darkMode['age']);


//Task
//create an object called person with the following properties
//name, age, gender, religion, occupaation, skills, address
//Also destructure the object properties

// Order is not important when you destructure object but it is important when you destructure array

// const person = {
// fName1: "David Chibuzor Onyekwere,",
// age1: 26,
// isMarriedd: false,
// status1: this.isMarriedd ? "I am married" : "I am single",
// occupation: "Web Developer",
// skills: ["Debugger, Interpersonal Communication, Playing around boss"],
// address: {
//     street: "123 Main St",
//     city: "Snapchatville",
//     state: "Snapchatland",
//     zip: "12345",
//     country: this.country,
//     religion: "Christianity,",
//     gender: "Male.",
//   },
//     getDetails: function(){
    // console.log("Hey there! My name is "+this.fName1 +" and I'm a " + this.occupation +". Nice to meet you!");
//     console.log(`Hi, my name is ${fName1} 
//     \n I live in ${country}, I am a ${skills}. \n${status1} `);
// }
// }



// console.log(person);
// person.getDetails();


// const {fName1, age1, occupation, country, city, status1, skills, address, religion, gender, getDetails } = person;

// getDetails()
// console.log(fName1, occupation1, status, skills, address);
// console.log(address.city); // for checking for city only
// console.log(address["city"]); // second way for getting city only
// console.log(fName1);
// console.log(address);
// console.log(address.city);
// console.log(address['city']);
// console.log(status1);
// getDetails();



//object.keys(person)

// let objKeys1 = Object.keys(name, age, occupation)
// console.log(objKeys1);



// let objValues = Object.values(person);
// console.log(objValues);


//object.entries
// let objValue = Object.entries(person);
// console.log(objValue);


// for (const key in person) {
//     if(key == 'getDetails'){
//         continue
//     }
//     console.log(`${key} is ${person[key]}`);
// }

//Higher Order Array Functions
//forEach, map, filter, reduce, sort etc



//importing javascript modules

import { toDoList2 } from "./data.js";
console.log(toDoList2);

//higher order function
//forEach
//arr.forEach(callbackFunction)

toDoList2.forEach(function (item){
    // console.log(items);
    console.log(`Item ${item.id} is ${item.task}`);
})

// Javascript Challenge 1
// -Create a function ‘maxProductOfThree’
// -The function takes in array of numbers as arguments, i.e arrNum
// -It selects 3 numbers from the array that will give the maximum result when multiplied. i.e from arrNum, it’ll pick a, b, c and return their product axbxc, if that’s the three numbers from ‘arrNum’  that will give the higest results.
// -Example of using the function:
// maxProductOfThree(arrNum)    
// // 12345 (maximum product)

// NB
// -Check for the number of items in the array, which must not be less than three numbers.
// -Check if items in the array is not a number. You can only use a number for the computation.

// POV
// You can use any senior Brother of your choice, just make sure you can explain your code line by line.

// Have a wonderful weekend ✌


// Solution

function maxProductOfThree(arrNum) {
    // Check if there are at least 3 numbers in the array
    if (arrNum.length < 3) {
      return "Array should have at least 3 numbers.";
    }
  
    // Filter out non-numeric values from the array
    const numericArr = arrNum.filter((num) => typeof num === "number");
  
    // Check if there are at least 3 numeric values in the array
    if (numericArr.length < 3) {
      return "Array should contain at least 3 numeric values.";
    }
  
    // Sort the array in ascending order
    numericArr.sort((a, b) => a - b);
  
    const n = numericArr.length;
  
    // Calculate the maximum product of three numbers:
    // It can be either the product of the three largest numbers
    // or the product of the two smallest (potentially negative) numbers.

    // [-9, -8, 2, 5, 6, 7]  -9 x -8 x 7 = 244
    // [-9, 2, 5, 6, 7]  -9 x 2 x 7 = -233

    const maxProduct1 = numericArr[n - 1] * numericArr[n - 2] * numericArr[n - 3];
    const maxProduct2 = numericArr[0] * numericArr[1] * numericArr[n - 1];
  
    // Return the maximum of the two possible products
    return Math.max(maxProduct1, maxProduct2);
  }
  
  // Example usage:
  const arrNum = [1, 2, 3, 4, 5, -5, -8]; //[-8, -5, 1, 2, 3, 4, 5]
  const result = maxProductOfThree(arrNum);
  console.log(result);
// function maxProductOfThree(arrNum1) {
//     // Sort the numbers array in ascending order
//     arrNum1.sort((a, b) => a - b);
    
//     // Select the last three numbers from the sorted array
//     const selectedNumbers = arrNum1.slice(-3);
    
//     return selectedNumbers;
//   }
  
//  // Select 3 from the array that will give the maximum result when multiplied
//   const arrNum1 = [5, 2, 8, 3, 1, 9, 4];
//   const selectedNumbers = maxProductOfThree(arrNum1);
//   console.log(selectedNumbers); // 5, 8, 9




//   // -Check for the number of items in the array, which must not be less than three numbers.
// console.log(arrNum1.length);
  

 
// // multiply the selected 3 numbers from the array to get the maximum result

// const maxProduct = selectedNumbers.reduce ((result, arrNum1) => result * arrNum1);
// // console.log((maxProduct));
// console.log(`${maxProduct} (Maximum Product)`); // 360 (MAXIMUM PRODUCT)


// //check if array is NaN

// const arr = [5, 'two', 'eight', 'three', 'one', 'nine', 'four'];
// const hasNoNumbers = arr.some(item => item - item !== 0);
// console.log(hasNoNumbers); //TRUE

// CHALLENGE 2

// JavaScript challenge 2
// -Create a function that checks through an array and identifies repeated entries, and clean up the entries of the array to contain only unique items.
// -It should also count the number of the repeated entries in the original array.
// -Example:
// let myArr = [1,2,3,2,4,3,2]
// cleanUpArray(myArr);
// “2” appeared 3 times
// “3” appeared 2 times 

//Cleaned array = [1, 2, 3, 4]

  
function removeDuplicates(arr) {
    let cleanUpArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (cleanUpArray.indexOf(arr[i]) === -1) {
        cleanUpArray.push(arr[i]);
      }
    }
  
    return cleanUpArray;
  }
  

  let myArr4 = [1, 2, 3, 2, 4, 3, 2];
  let cleanUpArray = removeDuplicates(myArr4);
  console.log("Array with duplicates removed:", cleanUpArray);

//Count the number of the repeated entries in the original array.
  function countRepeatedEntries(arr) {
    let repeatedEntries = {};
    let repeatedCount = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (!repeatedEntries[arr[i]]) {
        repeatedEntries[arr[i]] = 1;
      } else {
        repeatedEntries[arr[i]]++;
      }
    }
  
    for (let num in repeatedEntries) {
      if (repeatedEntries[num] > 1) {
        repeatedCount[num] = repeatedEntries[num];
      }
    }
  
    console.log("Number of times each number appeared multiple times:");
    for (let num in repeatedCount) {
      console.log(`${num} appeared ${repeatedCount[num]} times.`);
    }
  }
  
  let myArr3 = [1, 2, 3, 2, 4, 3, 2];
  countRepeatedEntries(myArr3);
  

  const date = new Date ();
  console.log(date.getFullYear());
  console.log(date.setTime ());
  console.log(date.setFullYear(2, 4, 0));
  console.log(date.setSeconds);




  // Synchronous/Asynchronous
//   synchronous process means the execution of code from previous to the next (i.e from top to bottom)
//  Asynchronous is a process or function that executes a task "in the background" without the user having to wait for the task to finish.
//Synchronous execution means the first task in a program must finish processing before moving on to executing the next task whereas asynchronous execution means a second task can begin executing in parallel, without waiting for an earlier task to finish.




//Synchronous
console.log("first log");
console.log("third log");
console.log("second log");


//Asynchronous

console.log("//////////// Before setTimeOut /////////////");
console.log("first log");
setTimeout (()=>{
    console.log("third log");
}, 5000)
console.log("second log");
// a callback function is a function that is passed as an argument to another function



//Promise
// creating a promise
// promise (()=>{

// })
const promise = new Promise((resolve, reject)=>{
    let saeda = false;
    if(saeda){
    resolve("Promise resolved");
}
    reject("Promise rejected");
})

// Using claiming the promise
promise.then((res)=>{
    console.log(res);
})
.catch((err)=>{
     console.log(err);
})


// FETCH API
// Fetch is a promise base function that is used to make synchronous request to the server. It returns a promise.

fetch("https://restcountries.com/v2/all")
// parse the response
    .then(res => res.json())
    .then(baba => {
        console.log(baba);
    })


fetch('https://restcountries.com/v2/all')
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => {
    const firstTenCountries = data.slice(0, 10);
    return firstTenCountries;
  })
  .then((firstTenCountries) => {
    const countryNames = firstTenCountries.map((country) => country.name);
    console.log('First ten countries:', countryNames);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });


// RAPID API
// instead of using .then, use async and await to consume a promise from the fetch to API end point
// fetch API endpoint using async and await
// fetch only the first 20
// https://jsonplaceholder.typicode.com/posts

// Assignment 1
// const api_url = "// https://jsonplaceholder.typicode.com/posts"
// Fetch the data from the url above and use async/await to consume the response.

// async function test() {
//     console.log('Ready');
//     let example = await fetch('https://jsonplaceholder.typicode.com/posts');
//     console.log('I will print second');
//   }
  
//   test();
//   console.log('I will print first');

  // Assignment 1

//   //////////////////////



// const api_url3 = "https://jsonplaceholder.typicode.com/posts";
// async function fetchData3() {
//     try {
//       const response = await fetch(api_url3);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  
//   fetchData3();

  


// const api_url2 = "https://jsonplaceholder.typicode.com/posts";

// async function fetchData5() {
//   try {
//     const response = await fetch(api_url2);
//     const data = await response.json();
    
//     for (let i = 0; i < 21; i++) {
//       console.log("Title:", data[i].title);
//       console.log("Body:", data[i].body);
//       console.log("------------------------------------------------");
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }



// fetchData5();




// Assignment 1
// const api_url = "// https://jsonplaceholder.typicode.com/posts"
// Fetch the data from the url above and use async/await to consume the response.

// Async/await example using Fetch API
const fetchData = async ()=>{
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();

  // Async/await example using Fetch API
const fetchData2 = async ()=>{
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
    //   console.log(data);
const firstTen = data.slice(0,10);
console.log(firstTen);

firstTen.map((post)=>{
    return console.log(post.title);
})
    } catch (error) {
      console.error(error);
    }

  }
  fetchData2();


  ///////// JSON examples
const jsonObj = {
    key1: "Richard",
    key2: "Success",
    key3: "David"
}


console.log(jsonObj);

const jsonObj2 = JSON.stringify(jsonObj)
console.log(jsonObj2);

//converting back to object
const jsonObj3 = JSON.parse(jsonObj2)

console.log(jsonObj3);





const play = document.getElementsByTagName('h1', 'li');

console.log(play[0]);
play[0].style.backgroundColor = 'red'
play[0].style.color = 'white'
// play[0].style.display = 'none'
setTimeout(() => {
    play[0].style.padding = '33px';
    play[0].style.border = '4px solid green';
}, 2000)


console.log(play[1]);
play[1].style.textDecoration = 'none'





