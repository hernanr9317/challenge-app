
export const getDataAxios = async(heroe) =>{

    const axios = require('axios').default;

    const token = '10219527243587250';

    const nombre = heroe;

    const baseUrl = `https://superheroapi.com/api/${token}/search/${nombre}`

    let data;

    try {
        const response = await axios.get(baseUrl);
        data = response.data.results;
      } catch (error) {
        console.error(error);
      }

    
      return data
}

