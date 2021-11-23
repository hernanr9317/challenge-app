

export const postFormAxios = async(values) => {

    const axios = require('axios').default;
  

   return  axios.post('http://challenge-react.alkemy.org/', values)
      .then(function (response) {      
        return response;
      })
      .catch(function () {
        console.log("incorrect data");
      });
     
    
}
