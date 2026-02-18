let grootte = 8;
let hoogte = 10;

for (let i = 1; i <= hoogte; i++) {
    if (i % 2 !== 0) {
        console.log(" #".repeat(grootte / 2))
    } else {
        console.log("# ".repeat(grootte / 2))
    }
}