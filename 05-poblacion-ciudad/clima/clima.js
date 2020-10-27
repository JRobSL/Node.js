const axios = require('axios');


const getClima = async(lat, lon) => {

    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=26f1ffcf9a026d041aeb40f7a2b4dc35&units=metric`);

    return clima.data.main.temp;
}


module.exports = {
    getClima
}



//npm app --lat 37.392529 --lon -5.994072