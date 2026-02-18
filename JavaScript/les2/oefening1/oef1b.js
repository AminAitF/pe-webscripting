function minimum(x, y, ...args) {
    let getallenLijst = [x, y, ...args];
    let minGetal = getallenLijst[0];
    for (let number of getallenLijst) {
        if (number < minGetal) {
            minGetal = number;
        }
    }
    return minGetal;
}
console.log(minimum(20, 40, 50, 10, 99));