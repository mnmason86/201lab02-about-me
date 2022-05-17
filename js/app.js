'use strict';
let userPoints = 0;


// let userName = prompt('What is your name?');
// alert ('Welcome to my About Me page, ' + userName + '.');
// console.log(userName);

//QUESTION 1

// let answerOne = prompt('Yes or No. Mandy was born in Tallahassee, Florida.');

// function questionOne(userGuess){
//   userGuess = userGuess.toLowerCase();
  
//   if (userGuess == 'no'|| userGuess == 'n'){
//    userPoints++;
//     alert('Correct! Mandy was born in Nashville. +1 Point! You have ' + userPoints + ' points.');
//   }else if (userGuess !== 'no'|| userGuess !== 'n' ){
//     alert('Incorrect. Mandy was not born in Tallahassee.');
//   }
// }
// questionOne(answerOne);

//QUESTION 2

// let answerTwo = prompt('Yes or No. Mandy has a cat named Gremlin.');

// function questionTwo(userGuess){
//   userGuess = userGuess.toLowerCase();
  
//   if (userGuess == 'no'|| userGuess == 'n'){
//    userPoints++;
//     alert('Correct! Mandy has a cat named Gizmo. +1 Point! You have ' + userPoints + ' points.');
//   }else if (userGuess !== 'no'|| userGuess !== 'n' ){
//     alert('Incorrect. Mandy does not have a cat named Gremlin.');
//   }
// }
// questionTwo(answerTwo);

// //QUESTION 3


// let answerThree = prompt('Yes or No. Mandy is a music teacher.');

// // function questionThree(userGuess){
// //   userGuess = userGuess.toLowerCase();
  
// //   if (userGuess == 'yes'|| userGuess == 'y'){
// //    userPoints++;
// //     alert('Correct! Mandy teaches music to K-5 students. +1 Point! You have ' + userPoints + ' points.');
// //   }else if (userGuess !== 'yes'|| userGuess !== 'y' ){
// //     alert('Incorrect. Mandy does teach music.');
// //   }
// // }
// // questionThree(answerThree);



// //QUESTION 4


// let answerFour = prompt('Yes or No. Mandy has worked at Waffle House.');


// // function questionFour(userGuess){
// //   userGuess = userGuess.toLowerCase();
  
// //   if (userGuess == 'yes'|| userGuess == 'y'){
// //    userPoints++;
// //     alert('Correct! Mandy has worked at Waffle House. +1 Point! You have " +userPoints + " points.');
// //   }else if (userGuess !== 'yes'|| userGuess !== 'y' ){
// //     alert('Incorrect. Mandy has worked at Waffle House.');
// //   }
// // }
// // questionFour(answerFour);



// //QUESTION 5



let answerFive = prompt('Yes or No. One of Mandy\'s goals is to "Build a solid network of tech professionals.');

function questionFive(userGuess){
 userGuess = userGuess.toLowerCase();
  
  if (userGuess == 'yes'|| userGuess == 'y'){
=======
let userName = prompt('What is your name?');
alert ('Welcome to my About Me page, ' + userName + '.');
console.log(userName);

let answerOne = prompt ('Yes or No. Mandy was born in Tallahassee, Florida.');


if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  userPoints++;
  alert('Correct! Mandy was born in Nashville. +1 Point! You have ' + userPoints + ' points.');

}
else {
  alert('Incorrect. Mandy was not born in Tallahassee.');

function questionOne(userGuess){

  if (userGuess == 'no' || userGuess != 'no'){
    userGuess = userGuess.toLowerCase();
    userPoints++;
    alert('Correct! Mandy was born in Nashville. +1 Point! You have ' + userPoints + ' points.');
  } else if (userGuess !== 'no' || userGuess !== 'y'){
    alert('Incorrect. Mandy was not born in Tallahassee.');
  }

}
questionOne(answerOne);


let questionTwo = prompt('Yes or No. Mandy has a cat named Gremlin.');

if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
  userPoints++;
  alert('Correct! Mandy has a cat named Gizmo. +1 Point! You have ' + userPoints + ' points.');

}
else {
  alert('Incorrect. Mandy does not have a cat named Gremlin.');
}

let questionThree = prompt('Yes or No. Mandy is a music teacher.');

if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
  userPoints++;
  alert('Correct! Mandy teaches music to K-5 students. +1 Point! You have ' + userPoints + ' points.');

}
else {
  alert('Incorrect. Mandy does teach music.');
}

let questionFour = prompt('Yes or No. Mandy has worked at Waffle House.');

if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
  userPoints++;
  alert('Correct! Mandy has worked at Waffle House. +1 Point! You have ' + userPoints + ' points.');

}
else {
  alert('Incorrect. Mandy has worked at Waffle House.');
}

let questionFive = prompt('Yes or No. One of Mandy\'s goals is to "Build a solid network of tech professionals."');

if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  userPoints++;
  alert('Correct, ' + userName + '. Mandy wants to build a solid network of tech professionals. +1 Point! You have ' + userPoints + ' points.');

}
else {
  alert('Incorrect, ' + userName + '. One of Mandy\'s goals is to build a solid network of tech professionals.');
}


let userAnswer = prompt('Enter a number 1-10');
let correctAnswer = 7;
let attempts = 5;

for (let i = 0; i < attempts; i++){
  while(userAnswer <1 || userAnswer >10){
    userAnswer = prompt('Please Try Again! A number 1-10!');
  }
  if (userAnswer == correctAnswer) {
    userPoints++;
    alert ('Correct! +1 point. You have ' + userPoints + ' points.');
    break;
  } else if (userAnswer > correctAnswer) {
    userAnswer = prompt('Too High. Please Try Again! A number 1-10!');
  } else if (userAnswer < correctAnswer) {
    userAnswer = prompt('Too Low. Please Try Again! A number 1-10!');
  } else if(i == 3){
    alert('The Correct Answer Was 7.');
  }
}



let attemptsRemain = 6;
let activities = ['Dungeons & Dragons', 'Reading', 'Playing Board & Card Games', 'Self Care', 'Going to the Beach', 'Video Games'];
let answeredCorrectly = false;

while(attemptsRemain && !answeredCorrectly){

  let response = prompt (`What is one of Mandy's top six favorite activities? You have ${attemptsRemain} attempts.`).toLowerCase();

  for(let i = 0 ; i < activities.length; i++) {

    let activity = activities[i].toLowerCase();

    if(response === activity){

      userPoints++;
      alert('Correct, " +userName +". Mandy wants to build a solid network of tech professionals. +1 Point You have " +userPoints + points');
     }else if (userGuess !== 'yes'|| userGuess !== 'y' ){
      alert('Incorrect, " +userName + ". One of Mandy\'s goals is to build a solid network of tech professionals.');
     }
   }
   questionFive(answerFive);





// let userAnswer = prompt('Enter a number 1-10');
// let correctAnswer = 7;
// let attempts = 5;

// for (let i = 0; i < attempts; i++){
//   while(userAnswer <1 || userAnswer >10){
//     userAnswer = prompt('Please Try Again! A number 1-10!');
//   }
//   if (userAnswer == correctAnswer) {
//     userPoints++;
//     alert ('Correct! +1 point. You have ' + userPoints + ' points.');
//     break;
//   } else if (userAnswer > correctAnswer) {
//     userAnswer = prompt('Too High. Please Try Again! A number 1-10!');
//   } else if (userAnswer < correctAnswer) {
//     userAnswer = prompt('Too Low. Please Try Again! A number 1-10!');
//   } else if(i == 3){
//     alert('The Correct Answer Was 7.');
//   }
// }



// let attemptsRemain = 6;
// let activities = ['Dungeons & Dragons', 'Reading', 'Playing Board & Card Games', 'Self Care', 'Going to the Beach', 'Video Games'];
// let answeredCorrectly = false;

// while(attemptsRemain && !answeredCorrectly){

//   let response = prompt (`What is one of Mandy's top six favorite activities? You have ${attemptsRemain} attempts.`).toLowerCase();

//   for(let i = 0 ; i < activities.length; i++) {

//     let activity = activities[i].toLowerCase();
//     //console.log(response, activity, response === activity);
//     if(response === activity){
//       userPoints++;
//       alert('That is correct! +1 point! You have ' + userPoints + ' points! Possible correct answers - Dungeons & Dragons, Reading, Playing Board & Card Games, Self Care, Going to the Beach, and Video Games.');
//       answeredCorrectly = true;
//     }
//   }
//   attemptsRemain--;
// }


