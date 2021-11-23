import { useState, useEffect  } from 'react';
import { CalculateMax } from './CalculateMax';


export const CalculateTeam = ({team, removeStats, goods, bads,message}) => {

    
    const [intelligence, setIntelligence] = useState(0);
    const [strength, setStrength] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [durability, setDurability] = useState(0);
    const [power, setPower] = useState(0);
    const [combat, setCombat] = useState(0);


    
    useEffect(() => {

       
            if( team ){
                     team.map( item =>(
                        
                         (item.powerstats.intelligence !== "null") &&
                        setIntelligence(intelligence + parseInt(item.powerstats.intelligence) ) ));

                     team.map( item =>(
                        (item.powerstats.strength !== "null") &&
                        setStrength(strength + parseInt(item.powerstats.strength) ) ));

                     team.map( item =>(
                        (item.powerstats.speed !== "null") &&
                        setSpeed(speed + parseInt(item.powerstats.speed) ) ));

                     team.map( item =>(
                        (item.powerstats.durability !== "null") &&
                        setDurability(durability + parseInt(item.powerstats.durability) ) ));

                     team.map( item =>(
                        (item.powerstats.power !== "null") &&
                        setPower(power + parseInt(item.powerstats.power) ) ));

                     team.map( item =>(
                        (item.powerstats.combat !== "null") &&
                        setCombat(combat + parseInt(item.powerstats.combat) ) ));
            }
             
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [team, removeStats])


    useEffect(() => {

        if(removeStats !== 0){

            ((removeStats.intelligence !== "null") &&
            setIntelligence(intelligence - parseInt(removeStats.intelligence)));
            
            ((removeStats.strength !== "null") &&
            setStrength(strength - parseInt(removeStats.strength)));

            ((removeStats.speed !== "null") &&
            setSpeed(speed - parseInt(removeStats.speed)));

            ((removeStats.durability !== "null") &&
            setDurability(durability - parseInt(removeStats.durability)));

            ((removeStats.power !== "null") &&
            setPower(power - parseInt(removeStats.power)));

            ((removeStats.combat !== "null") &&
            setCombat(combat - parseInt(removeStats.combat)));
             
        }

       
                             
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [removeStats])


    return (
            <div className="card text-dark">
            <div className="card-header">
                <CalculateMax intelligence={ intelligence} strength={strength} speed={speed} durability={durability} power={power} combat={combat} message={message} />
                <h6>Goods : {goods}/3 </h6> <h6>Bads : {bads}/3 </h6>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-horizontal-xxl">
                    <li className="list-group-item"><strong>Intelligence:</strong> {intelligence}</li>
                    <li className="list-group-item"><strong>Strength:</strong> {strength}</li>
                    <li className="list-group-item"><strong>Speed: </strong>{speed}</li>
                    <li className="list-group-item"><strong>Durability:</strong> {durability}</li>
                    <li className="list-group-item"><strong>Power: </strong>{power}</li>
                    <li className="list-group-item"><strong>Combat:</strong> {combat}</li>
                </ul>           
            </div>
            </div>
    )
}

    

