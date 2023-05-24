const prompt = require("prompt-sync")({ sigint: true });

//this solution requires Node.js on your machine please be sure to install it otherwise run second solution in parent directory.
const userName = prompt("What is your name? ");
const matches = ['Вячеслав','вячеслав']

if (matches.includes(userName)){
    console.log('Привет Вячеслав')
} else{
    console.log('Нет такого имени')
}