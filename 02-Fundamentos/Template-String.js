let nombre = "Deadpool";
let real = "Wade Winston";


//console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + " " + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto);
console.log(nombreTemplate);

console.log(nombreTemplate === nombreCompleto);


function getNombre() {
    return `El nombre de Deadpool es : ${real}`;
}


console.log(`${getNombre()}`);