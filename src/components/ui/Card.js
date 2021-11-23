import { useState } from 'react';

export const Card = ({image, name, powerstats, appearance,work,biography}) => {

const [bandera, setBandera] = useState(false) 

const handleChange = (e) => {

  e.preventDefault();

  setBandera(!bandera);

}

    return (
        <div className="card text-center text-dark animate__animated animate__fadeIn" style={{width: 200}}>
        { (bandera === false) && 
            <img src={image.url} className="card-img-top animate__animated animate__flipInY" alt="..."/>
         }
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <hr />

            { (bandera === false) &&  
                <ul className="list-group list-group-flush animate__animated animate__flipInY">
                    <li className="list-group-item">
                    Intelligence : {powerstats.intelligence}
                    </li>
                    <li className="list-group-item">
                    Strength : {powerstats.strength}
                    </li>
                    <li className="list-group-item">
                    Speed : {powerstats.speed}
                    </li>
                    <li className="list-group-item">
                    Durability : {powerstats.durability}
                    </li>
                    <li className="list-group-item">
                    Power : {powerstats.power}
                    </li>
                    <li className="list-group-item">
                    Combat : {powerstats.combat}
                    </li>
                </ul>
            }

            { (bandera === true) && 
                <ul className="list-group list-group-flush animate__animated animate__flipInY">
                    <li className="list-group-item">
                    Height :  { (appearance.height[0] === '-' ) 
                                ?  'unknown' 
                                : `${appearance.height[0]} / ${appearance.height[1]}`
                                }
                    </li>
                    <li className="list-group-item">
                    Weight :  { (appearance.weight[0] === '- lb' ) 
                                ?  'unknown' 
                                : `${appearance.weight[0]} / ${appearance.weight[1]}`
                                }
                    </li>
                    <li className="list-group-item">
                    Aliases :  {  `${(Object.values(biography.aliases))}` }
                    </li>
                    <li className="list-group-item">
                    Work : {work.occupation} 
                    </li>
                    <li className="list-group-item">
                    Eye-color : {appearance['eye-color']}
                    </li>
                    <li className="list-group-item">
                    Hair-color : {appearance['hair-color']}
                    </li>
                </ul>
            }

            { (bandera === false) && 
                <button 
                    className="btn btn-primary"
                    onClick={handleChange}
                >
                    More details
                </button>     
            }


            { (bandera === true) && 
                <button 
                    className="btn btn-primary"
                    onClick={handleChange}
                >
                    Return
                </button>     
            }


        </div>
        </div>
    )
}
