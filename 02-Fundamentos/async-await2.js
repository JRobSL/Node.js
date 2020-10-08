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


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el Empleado con id: ${id}`);
    } else {
        return empleadoDB;
    }


}


let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No hay un salario para ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };

    }
}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de ${resp.salario}`;

};
getInformacion(1).then(mensaje =>
        console.log(mensaje))
    .catch(err => console.log(err));