

//this solution requires Node.js on your machine please be sure to install it otherwise run second solution2 in parent directory.
const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("How old are you? ");

function checkUserAge(age) {
    if (age >= 7){
        console.log('Привет')
    } else{
        console.log('You entered age less than 7!')
    }
  }

checkUserAge(age)  






