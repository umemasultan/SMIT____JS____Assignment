// Qno:1
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = `${firstName} ${lastName}`;
alert(`Hello ${fullName}`);


// Qno:02
let userInput1 = prompt("Enter your favourite mobile model");
document.write(`My favourite phone is: ${userInput1}<br/>`);
document.write(`Length of string is: ${userInput1.length}<br/><br/>`);


// Qno:03
let str1 = "Pakistani";
document.write(`String: ${str1}<br/>`);
document.write(`Index of 'n': ${str1.indexOf("n")}<br/><br/>`);


// Qno:04
let str2 = "Hello World";
document.write(`String: ${str2}<br/>`);
document.write(`Last index of 'l': ${str2.lastIndexOf("l")}<br/><br/>`);


// Qno:05
let str3 = "Pakistani";
document.write(`String: ${str3}<br/>`);
document.write(`Character at index 3: ${str3.charAt(3)}<br/><br/>`);


// Qno:06
let fName = prompt("Enter your first name:");
let lName = prompt("Enter your last name:");
alert(`Hello ${fName.concat(" ", lName)}`);


// Qno:07
let city = "Hyderabad";
document.write(`${city}<br/>`);
document.write(`${city.replace("Hyderabad", "Islamabad")}<br/><br/>`);


// Qno:08
let message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(`${message}<br/>`);
document.write(`${message.replace(/and/g, "&")}<br/><br/>`);


// Qno:09
let numStr = "472";
let num = Number(numStr);
document.write(`Value: ${numStr} | Type: ${typeof numStr}<br/>`);
document.write(`Value: ${num} | Type: ${typeof num}<br/><br/>`);


// Qno:10
let fruit = prompt("Enter a fruit");
document.write(`User input: ${fruit}<br/>`);
document.write(`Upper case: ${fruit.toUpperCase()}<br/><br/>`);


// Qno:11
let variable = prompt("Enter a variable");
let titleCase = variable[0].toUpperCase() + variable.slice(1).toLowerCase();
document.write(`User input: ${variable}<br/>`);
document.write(`Title case: ${titleCase}<br/><br/>`);


// Qno:12
let number = 35.36;
let result = number.toString().replace(".", "");
document.write(`Number: ${number}<br/>`);
document.write(`Result: ${result}<br/><br/>`);


// Qno:13
let username;
while (true) {
  username = prompt("Enter your username");

  if (/[@.,!]/.test(username)) {
    alert("Invalid username! Don't use @ . , !");
  } else {
    alert(`Valid username: ${username}`);
    break;
  }
}


// Qno:14
let items = ["cookie", "cake", "apple pie", "chips", "patties"];
let order = prompt("Welcome to ABC Bakery. What do you want?").toLowerCase();

let index = items.indexOf(order);

if (index !== -1) {
  document.write(`${order} is available at index ${index}<br/><br/>`);
} else {
  document.write(`Sorry, ${order} is not available<br/><br/>`);
}


// Qno:15
let password = prompt("Enter your password:");

let hasLetter = /[a-zA-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let isValidLength = password.length >= 6;
let notStartWithNumber = !/^[0-9]/.test(password);

if (hasLetter && hasNumber && isValidLength && notStartWithNumber) {
  alert("Password Approved");
} else {
  alert("Invalid Password");
}


// Qno:16
let university = "University of Karachi";
university.split("").forEach(char => {
  document.write(`${char}<br/>`);
});


// Qno:17
let word = prompt("Enter a word");
document.write(`Last character: ${word[word.length - 1]}<br/><br/>`);


// Qno:18
let text = "The quick brown fox jumps over the lazy dog.";
let count = (text.toLowerCase().match(/\bthe\b/g) || []).length;

document.write(`Text: ${text}<br/>`);
document.write(`Occurrences of 'the': ${count}`);