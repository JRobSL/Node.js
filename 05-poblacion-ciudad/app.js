// const axios = require('axios');
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const info = require('./info/info');


const getInfo = async(lat, lon) => {

    try {
        const zona = await lugar.getLugar(lat, lon);
        const temp = await clima.getClima(zona.latitude, zona.longitude);

        return `El clima para ${zona.city} es de ${temp} °C,  pertenece al pais de ${zona.country} y
             cuanta con una poblacion de: ${zona.population} habitantes.`;

    } catch (error) {

        return `No se pudo recabar informacion de las coordenadas lat: ${lat}, lon: ${lon}.`;

    }

}


getInfo(argv.latitude, argv.longitude)
    .then(resp => console.log(resp))
    .catch(err => console.log("Error: ", err));

// info.getInfo(argv.latitude, argv.longitude)
//     .then(resp => {
//         console.log(resp);
//     }).catch(err => {
//         console.log("Error: ", err);
//     });
// lugar.getLugar(argv.latitude, argv.longitude)
//     .then(resp => {
//         console.log(resp);
//     }).catch(err => {
//         console.log("Error: ", err);
//     });


// clima.getClima(argv.latitude, argv.longitude)
//     .then(resp => {
//         console.log(resp);
//     }).catch(err => {
//         console.log("Error: ", err);
//     })