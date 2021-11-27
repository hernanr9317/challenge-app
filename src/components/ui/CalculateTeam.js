import { useState, useEffect  } from 'react';
import { CalculateMax } from './CalculateMax';
import { useSelector } from 'react-redux';
import lodash from 'lodash';


export const CalculateTeam = ({ removeStats, goods, bads}) => {

    const {team: teamValues} = useSelector( state => state.team );

    const [stats, setStats] = useState({
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0
    });

    const {intelligence, strength, speed, durability, power, combat} = stats;


    useEffect(() => {
                    
        if( teamValues ){


            const intArray = teamValues.map(  element => ( (element.powerstats.intelligence !== "null") && parseInt( element.powerstats.intelligence)));
            const inTsum = lodash.sum(intArray);
            
            const strArray = teamValues.map(  element => ( (element.powerstats.strength !== "null") && parseInt( element.powerstats.strength)));
            const strSum = lodash.sum(strArray);
            
            const spdArray = teamValues.map(  element => ( (element.powerstats.speed !== "null") && parseInt( element.powerstats.speed)));
            const spdSum = lodash.sum(spdArray);

            const durArray = teamValues.map(  element => ( (element.powerstats.durability !== "null") && parseInt( element.powerstats.durability)));
            const durSum = lodash.sum(durArray);
            
            const powArray = teamValues.map(  element => ( (element.powerstats.power !== "null") && parseInt( element.powerstats.power)));
            const powSum = lodash.sum(powArray);

            const comArray = teamValues.map(  element => ( (element.powerstats.combat !== "null") && parseInt( element.powerstats.combat)));
            const comSum = lodash.sum(comArray);

            setStats({
                intelligence: inTsum,
                strength: strSum,
                speed: spdSum,
                durability: durSum,
                power: powSum,
                combat: comSum
            });     

        }
                    
                          
    }, [removeStats,teamValues])




    useEffect(() => {

        if(removeStats !== 0){

            let intAcum = 0;
            let strAcum = 0;
            let spdAcum = 0;
            let durAcum = 0;
            let powAcum = 0;
            let comAcum = 0;


            intAcum =  (removeStats.intelligence !== "null") ? intelligence - parseInt(removeStats.intelligence) : intelligence
                 
            strAcum =  (removeStats.strength !== "null") ? strength - parseInt(removeStats.strength) : strength
            
            spdAcum = (removeStats.speed !== "null") ? speed - parseInt(removeStats.speed) : speed

            durAcum = (removeStats.durability !== "null") ? durability - parseInt(removeStats.durability) : durability
            
            powAcum = (removeStats.power !== "null") ? power - parseInt(removeStats.power) : power
            
            comAcum =(removeStats.combat !== "null") ? combat - parseInt(removeStats.combat) : combat

            setStats({
                intelligence: intAcum,
                strength: strAcum,
                speed: spdAcum,
                durability: durAcum,
                power: powAcum,
                combat: comAcum
            });    

        }
                             
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [removeStats,teamValues])


    return (
        <>
            <div className="container">
            <div className="row row-cols-2">

                <div className="col"><CalculateMax intelligence={ intelligence} strength={strength} speed={speed} durability={durability} power={power} combat={combat} /></div>
                <div className="col">
                    <h6>Goods : {goods}/3 </h6> 
                    <h6> Bads : {bads}/3</h6>
                </div>
                
            </div>
            </div>
  
            <div className="container">
            <div className="row row-cols-3">
                <div className="col">
                    <strong>Intelligence:</strong> 
                    <p>{intelligence}</p>
                </div>
                <div className="col">
                    <strong>Strength:</strong> 
                    <p>{strength}</p>
                </div>
                <div className="col">
                        <strong>Speed: </strong>
                        <p>{speed}</p>
                </div>
                <div className="col">
                    <strong>Durability:</strong> 
                    <p>{durability}</p>
                </div>
                <div className="col">
                    <strong>Power:</strong>
                    <p>{power}</p>
                </div>
                <div className="col">
                    <strong>Combat:</strong> 
                    <p>{combat}</p>
                </div>
            </div>
            </div>
        </>
    )
}

    

