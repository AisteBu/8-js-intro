/*
Objektas: key-value poru rinkinys (raktazodis-reiksme)
*/

const petras = {
    name: 'Petras',
    age: 99,
    color: 'blue',
    likesBanana: true
};

const maryte = {
    name: 'Maryte',
    age: 87,
    color: 'red',
    likesBanana: false
};

console.log(petras.age);
console.log(maryte.color);
console.log(petras.likesBanana);

const gyventojai = [petras, maryte]; 

console.log(gyventojai);

const batas = {
    name: 'Kaliosas 3000',
    color: 'red',
    pricing: [ {
        country: 'LT',
        price: 99
    },
    {
        country: 'LV',
        price: 88
    },
    {
        country: 'EE',
        price: 140
    }
    ]
}
console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

const kepure = {
    name: 'Skrybeliukas',
    color: 'white',
    pricing: {
        lt: 99,
        lv: 88,
        ee: 140
    }
}

console.log(kepure.pricing.lt);
console.log(kepure.pricing.lv);
console.log(kepure.pricing.ee);