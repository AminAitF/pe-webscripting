const prompt = require('prompt-sync')();

function isGetal(aantalLijnen) {
    return !isNaN(parseFloat(aantalLijnen));
}

let aantallijnen = prompt('Geef het aantal sterren (0-9)');
while (!isGetal(aantallijnen) || aantallijnen < 0 || aantallijnen > 9) {
    console.log("Foutieve nummer")
    aantalLijnen = prompt('Geef het aantal sterren (0-9)');
}

for (let i = 1; i <= aantallijnen; i++) {
    let witRuimte = aantallijnen - i;
    console.log(" ".repeat(witRuimte)  + "#".repeat(i));
}

