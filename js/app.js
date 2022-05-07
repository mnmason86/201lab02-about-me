'use strict';

let userName = prompt('What is your name?');
alert ('Welcome to my About Me page, ' + userName + '.');
console.log(userName);

let questionOne = prompt('Yes or No. Mandy was born in Tallahassee, Florida.');

if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  alert('Correct! Mandy was born in Nashville.');
  //console.log(questionOne);
}
else {
  alert('Incorrect. Mandy was not born in Tallahassee.');
}

let questionTwo = prompt('Yes or No. Mandy has a cat named Gremlin.');

if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
  alert('Correct! Mandy has a cat named Gizmo.');
  //console.log(questionTwo);
}
else {
  alert('Incorrect. Mandy does not have a cat named Gremlin.');
}

let questionThree = prompt('Yes or No. Mandy is a music teacher.');

if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
  alert('Correct! Mandy teaches music to K-5 students.');
  //console.log(questionThree);
}
else {
  alert('Incorrect. Mandy does teach music.');
}

let questionFour = prompt('Yes or No. Mandy has worked at Waffle House.');

if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
  alert('Correct! Mandy has worked at Waffle House.');
  //console.log(questionFour);
}
else {
  alert('Incorrect. Mandy has worked at Waffle House.');
}

let questionFive = prompt('Yes or No. One of Mandy\'s goals is to "Build a solid network of tech professionals."');

if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  alert('Correct, ' + userName + '. Mandy wants to build a solid network of tech professionals.');
  //console.log(questionFive);
}
else {
  alert('Incorrect, ' + userName + '. One of Mandy\'s goals is to build a solid network of tech professionals.');
}

let questionSix = prompt('Guess a whole number between 1 and 10.');
let correctNumber = 4;
let attempts = 4;

for (let i=1; i<attempts; i++){
  while(questionSix < 1 || questionSix > 10){
    questionSix = prompt('Try again, a whole number between 1 and 10!');
  }
  if(questionSix === correctNumber){
    alert('Correct!');
    break;
  } else if (questionSix > correctNumber){
    questionSix = prompt('Too high, try again.');
  } else if (questionSix < correctNumber){
    questionSix = prompt('Too low, try again.');
  }
  if(i === 3){
    alert('The correct answer was 4!');
  }
}

