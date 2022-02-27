/*
ARRAY

array metodai (funkcionalumas):
- .push()       - prideti i gala nauja reiksme
- .unshift()    - prideti i preiki nauja reiksme
- .pop()        - isimti is galo (paskutine) reiksme
- .shift()      - issimti is priekio (pirma) reiksme

*/

const marks = [10, 2, 8, 4, 6, 5, 8];
const size = marks.length;

const firstMark = marks[0];
const secondMark = marks[1];
const last = marks[size - 1];

console.log(marks);
console.log('pirmas:', firstMark);
console.log('antras:', secondMark);
console.log('paskutinis:', last);

const dictonary = ['labas', 'rytas', 'sakau', 'tau', '*'];
const paskutinisZodis = dictonary[dictonary.length - 1];
console.log(paskutinisZodis);

console.log('----------------');

const abc = ['b', 'c'];
console.log(abc);

abc.push('d');
console.log(abc);

abc.shift();
console.log(abc);

abc.pop();
console.log(abc);

abc.unshift('a');
console.log(abc);

console.log(abc.reverse());
console.log(abc);

console.log('----------------');

console.log(['a', 'b'].concat(['c', 'd']));

const a1 = ['a', 'b'];
const a2 = ['c', 'd']
console.log(a1.concat(a2));

const modern1 = [...a1, ...a2];
console.log(modern1);

const modern2 = [...a2, ...a1];
console.log(modern2);