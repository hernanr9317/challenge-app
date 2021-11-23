
export const getDataAxios = async(heroe) =>{

    const axios = require('axios').default;

    const token = process.env.REACT_APP_API_TOKEN;

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

