                //     CHAPTER 12 - 13 


                //  QUESTION 1 

    // var ch = prompt("Enter a character:");
    //  var code = ch.charCodeAt(0);
    //   if (code >= 48 && code <= 57) { document.write("It is a number");

    //    } else if (code >= 65 && code <= 90) { document.write("It is an uppercase letter");

    //     } else if (code >= 97 && code <= 122) { document.write("It is a lowercase letter");

    //      } else { document.write("Invalid input"); }

        //  QUESTION 2
        
//         let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");

// if (num1 > num2) {
//  document.write(num1 + " is larger");
// } 
// else if (num2 > num1) {
//     document.write(num2 + " is larger");
// } 
// else {
//      document.write("Both numbers are equal");
// }

                //   QUESTION 3

//                 let num = +prompt("Enter a number:");

// if (num > 0) {
//     document.write("Positive");
// } 
// else if (num < 0) {
//    document.write("Negative");
// } 
// else {
//    document.write("Zero");
// }

                //  QUESTION 4 
// let ch = prompt("Enter a character:");

// if (
//     ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
//     ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"
// ) {
//     document.write(true);
// } 
// else {
//     document.write(false);
// }
        
                //    QUESTION 5
let correctPassword = "123";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
  document.write("Please enter your password");
} 
else if (userPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password");
} 
else {
document.write("Incorrect password");
}
