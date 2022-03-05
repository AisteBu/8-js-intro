/*
automobilis:
- kuro kiekis (litrai)
- kuro sanaudos litrais 100-ui kilometru
- norimas nuvaziuoti atstumas (kilometrais)

Ar pavyks nuvaziuoti norima atstuma su turimu kuro kiekiu?
*/

function canDrive(kiekis, sanaudos, atstumas) {
    const imanomasNuvaziuototiAtstumas = kiekis / sanaudos * 100;
    
    if (imanomasNuvaziuototiAtstumas >= atstumas) {
        return true;
    }    

    return false;
}

const try1 = canDrive(20, 5, 400);      // true
const try2 = canDrive(20, 5, 1);        // true
const try3 = canDrive(20, 5, 401);      // false
const try4 = canDrive(20, 5, 999);      // false
const try5 = canDrive(10, 10, 300);     // false

console.log(try1, '->', true);
console.log(try2, '->', true);
console.log(try3, '->', false);
console.log(try4, '->', false);
console.log(try5, '->', false);

    
/* MANO SPRENDIMAS
const a = 0;
const b = 1;
const c = a / b * 100;
function canDrive (c, km) {
    if (c <= 400) {
        return 'true';
    }
    return 'false';
        }
}
console.log(canDrive(45));

*/


