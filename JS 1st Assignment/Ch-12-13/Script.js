// Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

let char = prompt("Enter your message");

if (char.length !== 1) {
    console.log("Please enter a single character.");
} 
else if (!isNaN(char)) {
    console.log("The character is a number.");
} 
else if (char >= 'A' && char <= 'Z') {
    console.log("The character is an uppercase letter.");
} 
else if (char >= 'a' && char <= 'z') {
    console.log("The character is a lowercase letter.");
} 
else {
    console.log("The character is neither a number nor a letter.");
}

// -------------

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} 
else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
} 
else {
    console.log("Both integers are equal.");
}

// --Write a program that takes input a number from user & state whether the number is positive, negative or zero.

let num = parseFloat(prompt("Enter any number: ")); 

if (num > 0) {
    console.log("The number is positive.");
} 
else if (num < 0) {
    console.log("The number is negative.");
} 
else {
    console.log("The number is zero.");
}

// -- . Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

let charEng = prompt("Enter a single character: ");

if (char.length !== 1) {
    console.log("Please enter a single character.");
} else {
    let vowels = 'aeiouAEIOU';
    if (vowels.indexOf(charEng) !== -1) {
        console.log(true); 
    } else {
        console.log(false); 
    }
}

// ---


let correctPassword = "mySecurePassword";


let enteredPassword = prompt("Please enter your password:");

if (enteredPassword === null || enteredPassword.trim() === "") {
    
    console.log("Please enter your password.");
} 
else if (enteredPassword === correctPassword) {
    
    console.log("Correct! The password you entered matches the original password.");
} 
else {
    console.log("Incorrect password.");
}

//---------

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);


//---------


let timeInput = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");


let time = parseInt(timeInput);


if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
    console.log("Invalid time format. Please enter time in HHMM format.");
} else {
    
    let hour = Math.floor(time / 100);

    
    if (hour >= 5 && hour < 12) {
        console.log("Good morning");
    } 
    else if (hour >= 12 && hour < 17) {
        console.log("Good afternoon");
    } 
    else if (hour >= 17 && hour < 21) {
        console.log("Good evening");
    } 
    else {
        console.log("Good night");
    }
}