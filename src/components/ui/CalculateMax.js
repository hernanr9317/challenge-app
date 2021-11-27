import { useState, useEffect } from 'react';


export const CalculateMax = ({intelligence, strength, speed, durability, power, combat}) => {


    const values = [intelligence, strength, speed, durability, power, combat]

    
    const [nombreValorMax, setNombreValorMax] = useState(" ");
    const [valueMax, setValueMax] = useState(" ");


   useEffect(() => {

       
            if( intelligence && intelligence >= Math.max( ...values) ){
                setValueMax(intelligence);
                setNombreValorMax("Intelligence")  
            }else if ( strength && strength >= Math.max(...values) ){
                setValueMax(strength);
                setNombreValorMax("Strength")  
            }else if ( speed & speed >= Math.max(...values)){
                setValueMax(speed);
                setNombreValorMax("Speed")
            }else if( durability && durability >= Math.max(...values)){
                setValueMax(durability);
                setNombreValorMax("Durability")
            }else if( power && power >= Math.max(...values)){
                setValueMax(power);
                setNombreValorMax("Power")
            }else if( combat && combat >= Math.max(...values)){
                setValueMax(combat);
                setNombreValorMax("Combat")
            }else {
                setValueMax(" ");
                setNombreValorMax(" ")
            }
                  

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [valueMax,values,nombreValorMax])


    return (
        <>
            <h5 className="card-subtitle mb-2 text-muted">Team detail</h5>
            <h3 className="card-title">Max stat : {nombreValorMax} {valueMax}</h3> 
        </>
    )
}
