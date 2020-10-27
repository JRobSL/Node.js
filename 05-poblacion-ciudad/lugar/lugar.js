const axios = require('axios');
//const argv = require('./config/yargs').argv;


const getLugar = async(lat, lon) => {
    const encondeLatUrl = encodeURI(lat);
    const encondeLonUrl = encodeURI(lon);
    const encondeRanUrl = 0;
    //creamos una instancia de la peticion que contiene la URL y los 
    //headers necesarios para el llamado de la informacion.
    const instance = axios.create({
        baseURL: `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${encondeLatUrl}&longitude=${encondeLonUrl}&range=${encondeRanUrl}`,
        headers: { 'x-rapidapi-key': '9289297359msh326f0152ed8e71dp16d806jsn342599158d0b' }
    });

    // Creamos la peticion que se nececita.

    // instance.get()
    //     .then(resp => {
    //         console.log("Status:", resp.status);
    //         //console.log(resp.data);
    //         console.log(resp.data[0]);
    //     }).catch(err => {
    //         console.log('ERROR!!!!', err);
    //     });

    const resp = await instance.get();

    //Validamos que tenga elementos el array de data que retorna
    if (resp.data.length === 0) {
        console.log(`No hay resultados para Lat: ${latitude} Lon: ${longitude}....`);
    }

    const datos = resp.data[0];
    const country = datos.Country;
    const city = datos.City;
    const population = datos.Population;
    const latitude = datos.Latitude;
    const longitude = datos.Longitude;


    return {
        country,
        city,
        population,
        latitude,
        longitude
    }
}


module.exports = {
    getLugar
}