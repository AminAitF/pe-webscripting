const prompt = require('prompt-sync')();

let getal1 = Number(prompt('Geef het eerste getal: '));
let getal2 = Number(prompt('Geef het tweede getal: '));

function minimum(x, y) {
    if (x < y) {
        return x;
    }
    return y;
}

console.log(minimum(getal1, getal2));
