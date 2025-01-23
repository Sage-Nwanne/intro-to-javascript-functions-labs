/*
================ Exercise 1: maxOfTwoNumbers() ===================
In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//================= Exercise 2: isAdult() ========================
// Write a function named isAdult. It should take an age (number) 
// and return 'Adult' if the age is 18 or over and 'Minor' otherwise

  function isAdult(age){
    if (age <= 17){
        return `You are ${age} years old so you are a Minor.`
    } else{
        return`You are ${age} years old so you are an Adult.`
    }
  };



  console.log(isAdult(15))


// ===================  Exercise 3: isCharAVowel() =========================

// Write a function named isCharAVowel that takes a single character as 
// an argument. It should return true if the character is a vowel and 
// false otherwise. For the purposes of this exercise, the character 
// y should not be considered a vowel.

function isCharAVowel(vowel){
    if (vowel !== 'a'&& vowel !=='e' && vowel !== 'i' &&
        vowel !==    'o' && vowel !=='u'){
            return `False. ${vowel} is not a vowel.`
        } else {
            return `True. ${vowel} is a vowel.`
        }

};

console.log(isCharAVowel('x'));
console.log(isCharAVowel('i'));


// ================ Exercise 4: generateEmail() =========================

// Create a function named generateEmail. It should take two strings: 
// a name and a domain. It should return a simple email address.

function generateEmail(fullName, emailDomain){
    return `${fullName}@${emailDomain}.com`
};

console.log(generateEmail('Sagenwanne5', 'gmail'))

// ================== Exercise 5: greetUser()===========================

// Define a function called greetUser. It should take a name and a 
// time of day (morning, afternoon, evening) and return a personalized 
// greeting.


function greetUser(firstName, timeOfDay){
    return `Good ${timeOfDay} ${firstName}! Hope you have or are having a great one! <3`;
};

console.log(greetUser('sage', 'evening'));


// =================== Exercise 6: maxOfThree() =========================

// Define a function, maxOfThree. It should accept three numbers 
// and return the largest among them.

function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3 ){
        return `${num1} is the largest number of the 3`
    } else if (num2 > num1 && num2 > num3 ){
        return `${num2} is the largest number of the 3`
    } else {
       return `${num3} is the largest number of the 3`
    }

};

console.log(maxOfThree(8, 7, 9))


// ======================== Exercise 7: calculateTip() =============================

// Create a function called calculateTip. It should take two arguments: 
// the bill amount and the tip percentage (as a whole number). 
// The function should return the amount of the tip.

function calculateTip(billAmount, tipPercentage){
    let tipAmount = billAmount * (tipPercentage/ 100)
    return ` The bill is ${billAmount} dollars. The tip is ${tipPercentage}. you should tip ${tipAmount} dollars`;

};

console.log(calculateTip(50,20));

// ======================== Exercise 8: convertTemperature() ===========================

// Write a function named convertTemperature. 
// It takes two arguments: a temperature and a string representing the 
// scale ('C' for Celsius, 'F' for Fahrenheit). 
// Convert the temperature to the other scale.

//my code

function convertTemperature(tempNumber, celsiusOrFahrenheit){
    if ( celsiusOrFahrenheit === 'C'){
        return (tempNumber * (9/5)) + 32
    } else if (tempNumber === 'F'){
        return (tempNumber - 32) * (5/9)
    } else{
        return 'Invalid scale'
    };


};

console.log(convertTemperature(32,"C"));






//=================== Exercise 9: basicCalculator() =======================

// Create a function named basicCalculator. 
// It should take three arguments: two numbers and a string representing 
// an operation ('add', 'subtract', 'multiply', 'divide'). 
// Perform the provided operation on the two numbers. 
// In operations where the order of numbers is important, 
// treat the first parameter as the first operand and the 
// second parameter as the second operand.


