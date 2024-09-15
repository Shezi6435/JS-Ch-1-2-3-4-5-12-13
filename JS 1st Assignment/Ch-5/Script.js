// Chapeter 5 

let a = 5;
let b = 3;

let sum = a + b;
console.log(sum)


let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;

console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);

// ------------

  // a. Declare a variable
  let myVariable;

  // b. Show the value of variable after declaration
  document.write("Value after variable declaration is: " + myVariable + "<br>");

  // c. Initialize the variable with some number
  myVariable = 5;

  // d. Show the initial value of the variable
  document.write("Initial value: " + myVariable + "<br>");

  // e. Increment the variable
  myVariable++;

  // f. Show the value after increment
  document.write("Value after increment is: " + myVariable + "<br>");

  // g. Add 7 to the variable
  myVariable += 7;

  // h. Show the value after addition
  document.write("Value after addition is: " + myVariable + "<br>");

  // i. Decrement the variable
  myVariable--;

  // j. Show the value after decrement
  document.write("Value after decrement is: " + myVariable + "<br>");

  // k. Show the remainder after dividing the variable by 3
  let remainder = myVariable % 3;

  // l. Output the remainder
  document.write("The remainder is: " + remainder);

// -----------------

// Cost of one movie ticket is 600 PKR. Write a script to store

// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

let ticketPrice = 600;

let numberTickets  = 5;

let totalCost = ticketPrice * numberTickets;

console.log("Total Cost of buying " + numberTickets  + " Ticket is: " + totalCost + " PKR");


// 4*1 Table

let num = 4;
let table = '';

for (let i = 1; i <= 10; i++) {
    table += `${num} x ${i} = ${num * i}\n`;
}

alert(table);

// ---------------------

// a. Store a Celsius temperature into a variable
let celsius = 30; 

// b. Convert Celsius to Fahrenheit & output the result
let fahrenheitFromCelsius = (celsius * 9/5) + 32;
console.log(`${celsius}°C is ${fahrenheitFromCelsius}°F`);

// c. Now store a Fahrenheit temperature into a variable
let fahrenheit = 86; 

// d. Convert Fahrenheit to Celsius & output the result
let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
console.log(`${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C`);

// -----------------------

// a. Price of item 1
let priceItem1 = 500; 

// b. Price of item 2
let priceItem2 = 300; 

// c. Ordered quantity of item 1
let quantityItem1 = 2;

// d. Ordered quantity of item 2
let quantityItem2 = 3;

// e. Shipping charges
let shippingCharges = 100; 

// Calculate total cost
let totalCost1 = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt using document.write
console.log("Price of item 1 is = " + priceItem1); 
console.log("Quantitiy of item 1 is = " + quantityItem1);
console.log("Price of item 2 is = " + priceItem2);
console.log("Quantitiy of item 2 is = " + quantityItem2);

console.log("Total cost of your order is = " + totalCost1);

// -----------------------

let mark = 640;

let totalMarks = 850;

let percentage = mark / totalMarks * 100;

console.log("Total Marks = " + totalMarks);
console.log("Marks Obtained = " + mark);
console.log("Percentage = " + percentage);

// -----------------------

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let dollarToPkr = 104.80;
let saudiRiyalToPkr = 28;

let dollars = 10;
let riyals = 25;

let totalInPkr = (dollars * dollarToPkr) + (riyals * saudiRiyalToPkr);

console.log("Total currency in PKR = " + totalInPkr);

// -----------------------

