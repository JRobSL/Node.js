/**
 * Async Await
 * 
 */

/**
 * Agregando async se convierte en una promesa y puede ser tratada 
 * como tal... El resolve se ejecuta, y si hubiera algun problema 
 * el reject lo hace automaticamente e inicializa el catch al 
 * ejecutar la promesa.
 */
// let getNombre = async() => {
//     /**
//      * Se peude manejar el error especifico  con throw new Error
//      */
//     //undefined.nombre;
//     // throw new Error(`No existe un nombre...`);
//     return `Roberto`;
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`Roberto`);
        }, 3000);
    });
};



let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`
}


saludo().then(mensaje => {
    console.log(mensaje);
});