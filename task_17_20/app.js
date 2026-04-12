// ARRAYS AND LOOPS

// 1. Declare and initialize an empty multidimensional array
let multiArray = [[]];

// 2. Declare and initialize a multidimensional array representing a matrix
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// 3. Write a program to print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as input from user
let num = parseInt(prompt("Enter a number to show its multiplication table:"));
let length = parseInt(prompt("Enter the length of the multiplication table:"));

for (let i = 1; i <= length; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// 5. Write a program to print items of the following array using for loop:
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See example output.
document.write("<h3>Counting:</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<h3>Even:</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");
for (let i = 1; i <= 20; i += 2) {
    document.write(i + ", ");
}

document.write("<h3>Series:</h3>");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + ", ");
    }
}


