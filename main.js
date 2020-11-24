//FASE 1
let name        = "Conxi";
let nameArray   = name.split('');//separo les lletres del nom una a una
console.log(nameArray);

for (let charAt of nameArray){
    console.log(charAt);
}

//FASE 2

let nom      = "c0nxi";
let nomArray = nom.split('');
console.log(nomArray);

console.log(`Partim del nom ${nom}`);
const vocals       = "aeiouAEIOU";
const consonants   = "bcdfghjklmnpqrstvwxyz";
const numeros      =  "0-9";

for (let charAt of nomArray) {
    if (vocals.includes(charAt)) {
        console.log(`He trobat la VOCAL: ${charAt}`);
    } else if (consonants.includes(charAt)) {
        console.log(`He trobat la CONSONANT: ${charAt}`);
    } else if (numeros.includes(charAt)) {
        console.log(`Els noms de persones no contenen el número: ${charAt}`);
    } else {
        console.log(`Aquest caracter no es reconeix: ${charAt}`);
    } 
};

//FASE 3

let nameMap   = new Map();//creo un nou objecte que no modifica el que ja tinc

for (let charAt of nameArray) {
    let count = nameMap.get(charAt);
    count = (count != null) ? (nameMap.get(charAt) + 1) : 1;
    nameMap.set(charAt, count); 
}
console.log(nameMap);
for (let [key, value] of nameMap.entries() ) {
	console.log(key, value);
};

//FASE 4
let cognom  = "Cozar";
let cognomArray   = cognom.split('');//separo les lletres del cognom una a una
console.log(cognomArray);

for (let charAt of cognomArray){
    console.log(charAt);
}
console.log(nameArray.concat("",cognomArray));