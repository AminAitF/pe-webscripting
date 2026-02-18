const prompt = require('prompt-sync')();

function deelbaarDoor(getal) {
    if (getal % 3 === 0 && getal % 5 !== 0) {
        return "Fizz";
    } else if (getal % 5 === 0 && getal % 3 !== 0) {
        return "Buzz";
    } else if (getal % 5 === 0 && getal % 3 === 0) {
        return "FizzBuzz"
    } else {
        return getal;
    }
}
let getal = prompt('Geef een getal (0-100): ');
console.log(deelbaarDoor(getal));
