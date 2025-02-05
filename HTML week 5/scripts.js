// variables and data types
let name = "kevin"; 
let age = 25; 
let isStudent = true; 
let hobbies = ["reading", "coding", "traveling"]; 
let person = { firstName: "Jane", lastName: "Doe", age: 30 }; 

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${person} (Type: ${typeof person})`);




// Functions to Greet User
function greetUser(name) {
  return `Hello, ${name}! How are you`;
}

let userName = prompt("Enter your name:");
if (userName) {
  document.getElementById("greet-message").textContent = greetUser(userName);
}



// If Statements for voting eligibility
let userAge = parseInt(prompt("Enter your age:"));
if (!isNaN(userAge)) {
    let message = userAge >= 18 ? "You are eligible to vote!" : "You are not eligible to vote yet.";
    document.getElementById("vote-message").textContent = message;
}

// Display Numbers 1 to 10 with a for loop
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// calculatoer program
function calculator() {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  let operation = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid input. Please enter numbers only.");
      return;
  }

  let result;
  switch (operation) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
          break;
      default:
          alert("Invalid operation. Please choose +, -, *, or /.");
          return;
  }

  alert(`Result: ${result}`);
}



// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";

// Adding Dynamic Content
let dynamicDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
