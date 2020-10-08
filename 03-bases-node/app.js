/**
 * MEiante la destructuracion seleccionamos el objeto de los export para 
 * poder usar la funcion.
 */


const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');





let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log("listar");
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log("crear");

        crearArchivo(argv.base, argv.limite).then(NombreArchivo => { console.log(NombreArchivo) })
            .catch(err => { console.log(err) });
        break;

    default:
        console.log('ERROR: Comando no reconocido....');
        break;
}