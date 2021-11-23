import { useState, useEffect } from 'react';


export const CalculateMax = ({intelligence, strength, speed, durability, power, combat, message}) => {


    const int = document.querySelector("#root > div > div > div > div > div:nth-child(2) > div.card.text-dark > div.card-body > ul > li:nth-child(1)");
    const str = document.querySelector("#root > div > div > div > div > div:nth-child(2) > div.card.text-dark > div.card-body > ul > li:nth-child(2)");
    const spe = document.querySelector("#root > div > div > div > div > div:nth-child(2) > div.card.text-dark > div.card-body > ul > li:nth-child(3)");
    const dur = document.querySelector("#root > div > div > div > div > div:nth-child(2) > div.card.text-dark > div.card-body > ul > li:nth-child(4)");
    const pow = document.querySelector("#root > div > div > div > div > div:nth-child(2) > div.card.text-dark > div.card-body > ul > li:nth-child(5)");
    const com = document.querySelector("#root > div > div > div > div > div:nth-child(2) > div.card.text-dark > div.card-body > ul > li:nth-child(6)");

    const regex = /(\d+)/g;


    const [nombreValorMax, setNombreValorMax] = useState(" ");

   useEffect(() => {
        
        if(int){
                        
            const intString = int.textContent;
            const intNumber = intString.match(regex);

            const strString = str.textContent;
            const strNumber = strString.match(regex);
            
            const speString = spe.textContent;
            const speNumber = speString.match(regex);

            const durString = dur.textContent;
            const durNumber = durString.match(regex);

            const powString = pow.textContent;
            const powNumber = powString.match(regex);

            const comString = com.textContent;
            const comNumber = comString.match(regex);
          
            if( intNumber >= Math.max( strNumber, speNumber, durNumber, powNumber, comNumber) ){
                setNombreValorMax(intString);  
            }else if ( strNumber >= Math.max(intelligence,speed,durability,power,combat) ){
                setNombreValorMax(strString);
            }else if (speNumber >= Math.max(intelligence,strength,durability,power,combat)){
                setNombreValorMax(speString);
            }else if( durNumber >= Math.max(intelligence,strength,speed,power,combat)){
                setNombreValorMax(durString);
            }else if(powNumber >= Math.max(intelligence,strength,speed,durability,combat)){
                setNombreValorMax(powString);
            }else {
                setNombreValorMax(comString);
            }
               
        }
       

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [intelligence, strength,speed, durability, power, combat])


    return (
        <>
            <h5 className="card-subtitle mb-2 text-muted">Team detail</h5>
            { ( message !== "") &&
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    {message}
            </div>     
            }
            <h3 className="card-title">Max stat : {nombreValorMax}</h3> 
        </>
    )
}
