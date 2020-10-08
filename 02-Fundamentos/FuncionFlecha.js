// function sumar(a, b) {
//     return a + b;
// }

/* let sumar = (a, b) => a + b;

console.log(sumar(10, 20)); */

/* function saludar() {
    return 'Hola Mundo';
} */
/* 
let saludar = () => 'Hola Mundo2';


console.log(saludar()); */

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }

}

console.log(deadpool.getNombre());