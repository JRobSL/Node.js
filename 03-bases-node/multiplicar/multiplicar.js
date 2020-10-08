const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    if (!Number(base)) {
        console.log(`La base "${base}" no es un numero`.red);
        return;
    }
    if (!Number(limite)) {
        console.log(`El limite "${limite}" no es un numero`.red);
        return;
    }

    console.log(`================================`.green);
    console.log(`Tabla de multiplicar del ${base}`.green);
    console.log(`================================`.green);

    let data = '';
    for (let i = 1; i <= limite; i++) {

        data += `${base} + ${i} = ${base * i} \n`;

    }
    console.log(data);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base "${base}" no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite "${limite}" no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} + ${i} = ${base * i} \n`;

        }


        fs.writeFile(`tablas/Tabla${base}-hasta-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla${base}-hasta-${limite}.txt`);
        });
    });
}

//se grega como export al objeto global module, que se encuentra 
//disponible  todo la aplicacion.  
module.exports = {
    crearArchivo,
    listarTabla
}