function pozityvas(list) {
    const teigiamiSkaiciai = [];

    for (const item of list) {
        if (item >= 0) {
        teigiamiSkaiciai.push(item);
    }
}   

return teigiamiSkaiciai;
}
module.exports = pozityvas;

// IKLIJUOTI i index.js, norint pamatyti, kiap veikia
// const pozityvas = require('./js/24-filter.js');

// const skaiciai = [8, -3, 9, -17, 0, 6, -3.14];

// const tikTeigiami = pozityvas(skaiciai);
// // [8, 9, 0, 6]
// console.log(tikTeigiami);

// const neNeigiami = skaiciai.filter(item => item >= 0);
// console.log(neNeigiami);

// const zodynas = const zodynas = ['labas', 'rytas', 'sakau', 'tau', 'Mefistofelis', 'barsukas', 'guolis', 'raguolis', 'zoliapjove'];

// const trumpesniNei5Simboliai = zodynas.filter(word => word.length < 5);
// console.log(trumpesniNei5Simboliai);

// const ilgesniNei5Simboliai = zodynas.filter(word => word.length > 5);
// console.log(ilgesniNei5Simboliai);

// const zodziaiIs5Simboliu = zodynas.filter(word => word.length = 5);
// console.log(zodziaiIs5Simboliu);