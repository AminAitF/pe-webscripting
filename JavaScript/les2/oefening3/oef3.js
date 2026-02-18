function maakRij(x, y, stap) {
    let rij = [];
    let min;
    let max;
    if (x < y ) {
        min = x;
        max = y;
    }else {
        min = y;
        max = x;
    }

    for (let i = min; i <= max; i += Math.abs(stap)) {
        rij.push(i);
    }
    return rij;
}
console.log(maakRij(5, -4, -2));