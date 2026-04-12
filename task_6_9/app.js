// Chapter 6-9: Increment and Decrement Operators

// QUESTION 1

// Initial value

let a = 10;

// Header section
document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("................................................<br><br>");

// Prefix Increment: Increases THEN shows
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Postfix Increment: Shows THEN increases
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Prefix Decrement: Decreases THEN shows
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Postfix Decrement: Shows THEN decreases
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// question 2

// let a = 2, b = 1;

// let result = --a - --b + ++b + b--;

// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("result is: " + result);


// QUESTION 3

// 1. Take input from user
let userName = prompt("Please enter your name:");

// 2. Greet the user
// If the user cancels or leaves it blank, we provide a guest name
if (userName === null || userName === "") {
    userName = "Guest";
}

document.write("<h1>Hello, " + userName + "! Welcome to our website.</h1>");

// QUESTION 5

// 1. Take input. The second argument in prompt is the default value.
let numInput = prompt("Enter a number to display its multiplication table:", "5");

// 2. Convert the input to a number
// If input is empty, default it to 5
let num = parseInt(numInput) || 5;

document.write("<h2>Multiplication Table of " + num + "</h2>");

// 3. Loop to generate the table from 1 to 10
for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// QUESTION 6

// 1. Inputs lena
let sub1 = prompt("Enter first subject name:", "English");
let sub2 = prompt("Enter second subject name:", "Math");
let sub3 = prompt("Enter third subject name:", "Urdu");

let totalMarksPerSub = 100;

let marks1 = Number(prompt("Enter obtained marks for " + sub1 + ":", "54")) || 0;
let marks2 = Number(prompt("Enter obtained marks for " + sub2 + ":", "54")) || 0;
let marks3 = Number(prompt("Enter obtained marks for " + sub3 + ":", "48")) || 0;

// 2. Calculations
let totalObtained = marks1 + marks2 + marks3;
let grandTotal = totalMarksPerSub * 3;
let percentage = (totalObtained / grandTotal) * 100;

// 3. Table Display (Styling ke saath taake image jaisa dikhe)
document.write("<table style='width: 400px; font-family: Arial; border-collapse: collapse;'>");
document.write("<tr style='text-align: left;'><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

// Individual Rows
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks1 + "</td><td>" + (marks1 / totalMarksPerSub * 100) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks2 + "</td><td>" + (marks2 / totalMarksPerSub * 100) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks3 + "</td><td>" + (marks3 / totalMarksPerSub * 100) + "%</td></tr>");

// Final Total Row (Bold numbers)
document.write("<tr><td></td><td><b>" + grandTotal + "</b></td><td><b>" + totalObtained + "</b></td><td><b>" + percentage.toFixed(0) + "%</b></td></tr>");
document.write("</table>");