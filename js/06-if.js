/*
IF - salygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, !=, ===, !==
nenaudotini: ==, !=
naudotini: >, <, >=, <=, ===, !==

SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}

*/
const a = 1998765;

if (a) {
    console.log('taip');
} else {
    console.log('ne');
}


const akys = 'zalios';

if (akys === 'melynos') {
    console.log('Melynakis');
} else {
    console.log('Nezinoma akiu spalva');
}


const akys1 = 'rudos';

if (akys1 === 'melynos') {
    console.log('Melynakis');
} else if (akys1 === 'zalios') {
    console.log('Zaliaakis');
} else if (akys1 === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta akiu spalva');
}

console.log('---------------------');

const parosMetas = 'vakaras';
const arLyja = false;

if (parosMetas === 'rytas') {
    if (arLyja) {
    console.log('Labas rytas, nepamirsk skecio!');
} else {
    console.log('Labas rytas!'); 
}
} else {
    if (parosMetas === 'diena') {
        if (arLyja) {
            console.log('Laba diena, nepamirsk skecio!');
        } else {
            console.log('Laba diena!'); 
        }
        } else {
        if (parosMetas === 'vakaras') {
            if (arLyja) {
                console.log('Labas vakaras, nepamirsk skecio!');
            } else {
                console.log('Labas vakaras!'); 
            }
         } else {
                console.log('Neatpazintas paros metas'); 
         }
     } 
   
}
