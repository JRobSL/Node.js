let empleados = [{
        id: 1,
        nombre: "Juan"
    },
    {
        id: 2,
        nombre: "Roberto"
    },
    {
        id: 3,
        nombre: "Beeter"
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },

    {
        id: 2,
        salario: 5000
    }
];


let getEmpleado = (id) => {
    //callback resolve: Se llama cuando  se tiene exito 
    //callback reject : Se llama cuando no es exitoso
    return new Promise((resolve, reject) => {


        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el Empleado con id: ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });
}


let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No hay un salario para ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });

        }
    });
}


getEmpleado(10).then(empleado => {
    return getSalario(empleado);

}).then(resp => {

    console.log(`El salario de ${resp.nombre} es de $ ${resp.salario}`);
    //MANEJA EL ERROR 
}).catch(err => {
    console.log(err);
});

// getEmpleado(3).then(empleado => {
//     // console.log('Empleado de DB', empleado);
//     getSalario(empleado).then(resp => {
//         console.log(`El salario para ${resp.nombre} es de ${resp.salario}`);
//     }, (err) => {
//         console.log(err);
//     });


// }, (err) => {
//     console.log(err);
// });