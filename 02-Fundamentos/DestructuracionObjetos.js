let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`;
    }

}

console.log(deadpool.getNombre());

//destructuracion
let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);

//se renombra el identificador de la variable para evitar 
//problemas con otras propiedades que se estne manejando 
let { nombre: primerNombre, apellido: primerApellido, poder: primerPoder } = deadpool;

console.log(primerNombre, primerApellido, primerPoder);