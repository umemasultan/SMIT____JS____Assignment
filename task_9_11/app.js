// QUESTION 1
let city = prompt("Enter your city name:");

// Checking with case-insensitivity
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
}

// QUESTION 2
let gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}
else {
    alert("Good Morning!");
}

// QUESTION 3
let trafficSignal = prompt("Enter traffic signal color (red/yellow/green):");
if (trafficSignal.toLowerCase() === "red") {
    alert("Must Stop");
}
else if (trafficSignal.toLowerCase() === "yellow") {
    alert("Ready to move");
}
else if (trafficSignal.toLowerCase() === "green") {
    alert("Move now");
}
else {
    alert("Invalid traffic signal color");
}

// QUESTION 4

let fuel = parseFloat(prompt("Enter remaining fuel in liters:"));
if (fuel < 0.25) {
    alert("Please refill the fuel tank");
} else {
    alert("You have enough fuel");
}

// QUESTION 5
let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// QUESTION 6

let marksObtained = parseFloat(prompt("Enter marks obtained:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));
let percentage = (marksObtained / totalMarks) * 100;

let grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// QUESTION 7

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
}
else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
}
else {
    alert("Wrong guess. The secret number was " + secretNumber);
}

// QUESTION 8

let number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

// QUESTION 9

let numberToCheck = parseInt(prompt("Enter a number to check if it's even or odd:"));
if (numberToCheck % 2 === 0) {
    alert(numberToCheck + " is an even number.");
} else {
    alert(numberToCheck + " is an odd number.");
}

// QUESTION 10

let temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It's very cold outside.");
}
// QUESTION 11

let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;

if (operation === "+") {
    result = firstNumber + secondNumber;
}
else if (operation === "-") {
    result = firstNumber - secondNumber;
}
else if (operation === "*") {
    result = firstNumber * secondNumber;
}
else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        alert("Error: Division by zero is not allowed.");
        result = "undefined";
    }
}
else if (operation === "%") {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
    } else {
        alert("Error: Division by zero is not allowed.");
        result = "undefined";
    }
}
else {
    alert("Invalid operation entered.");
    result = "undefined";
}
if (result !== "undefined") {
    alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
}
