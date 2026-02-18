const prompt = require('prompt-sync')();

let getal = Number(prompt('Geef een nummer: '));

while (getal < 0) {
    getal = Number(prompt('Geef een nummer: '));
}

function fibonnaci(n) {
    if (n <= 1 ) {
        return 1;
    }
    return fibonnaci(n-2) + fibonnaci(n - 1);
}

console.log(fibonnaci(getal));