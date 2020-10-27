const argv = require('yargs').options({
    latitude: {
        alias: 'lat',
        desc: "Latitud de la ciudad",
        demand: true
    },
    longitude: {
        alias: 'lon',
        desc: "Longitud de la ciudad",
        demand: true
    },
    range: {
        alias: 'r',
        desc: "Rango de la ciudades cercanas.",
        default: 0
    }
}).argv;

module.exports = {
    argv
}