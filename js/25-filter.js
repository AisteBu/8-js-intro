// function posityvas(list) {
//     const teigiamiSkaiciai = [];

//     for (const item of list) {
//         if (item >= 0) {
//             teigiamiSkaiciai.push(item);
//         }
//     }

//     return teigiamiSkaiciai;
// }
// module.exports = posityvas;

// // IKLIJUOTI i index.js nprint pamatyti, kaip veikia

// //const pozityvas = require('./js/24-filter');

// // const skaiciai = [8, -3, 9, -17, 0, 6, -3.14];

// // const tikTeigiami = pozityvas(skaiciai);
// // console.log(tikTeigiami);

// const neNeigiami = skaiciai.filter(item => item >= 0);
// console.log(neNeigiami);

// const zodynas = ['labas', 'rytas', 'sakau', 'tau', 'Mefistofelis', 'barsukas', 'raguolis', 'zoliapjove'];

// ? const trumpesniNei5simboliai = zodynas.filter(word => word.length < 5);
// console.log(trumpesniNei5simboliai);

// ? const ilgesniNei5simboliai = zodynas.filter(word => word.length > 5);
// console.log(ilgesniNei5simboliai);

// ? const zodziaiIs5simboliu = zodynas.filter(worsd => word.length === 5);
// console.log(zodziaiIs5simboliu);