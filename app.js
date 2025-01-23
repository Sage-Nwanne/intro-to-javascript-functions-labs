/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
//   }
  
//   console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  

  function isAdult(age){
    if (age <= 17){
        return `You are ${age} years old so you are a Minor.`
    } else{
        return`You are ${age} years old so you are an Adult.`
    }
  };



  console.log(isAdult(15))