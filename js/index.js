const skaiciuSarasoSuma = require('./js/25-reduce');

const pazymiai = [10, 2, 8, 4, 6];
const pazymiuSuma = skaiciuSarasoSuma(pazymiai);
const pazymiuKiekis = pazymiai.length;

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis);

const reduceSuma = pazymiai.reduce((suma, item) => suma + item, 0);
const reduceVidurkis = reduceSuma / pazymiuKiekis;
console.log(reduceVidurkis);

const zodynas = ['labas', 'rytas', 'sakau', 'tau'];
const pirmosRaides = zodynas.reduce((fullText, word) => fullText + word[0], ''); 
//  '' - pradek nuo tuscio teksto
console.log(pirmosRaides);