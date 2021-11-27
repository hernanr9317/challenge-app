import { useState } from 'react';

export const Card = ({image, name, powerstats, appearance,work,biography, handleAdd,handleRemove,item, flag}) => {

const [bandera, setBandera] = useState(false) 

const handleChange = (e) => {

  e.preventDefault();

  setBandera(!bandera);

}

    return (
        <>
            <div className="card mb-3  text-dark animate__animated animate__fadeIn" style={{maxWidth: 540}}>
            <div className="card-header">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={image.url}  className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body m-0">

                    { (bandera === false) &&  
                    
                        <div className="container animate__animated animate__fadeIn">
                        <div className="row">
                            <div className="col">
                            <strong>Intelligence</strong> <p>{powerstats.intelligence}</p>
                            </div>
                            <div className="col">
                            <strong>Strength</strong> <p>{powerstats.strength}</p>
                            </div>
                            <div className="col">
                            <strong>Speed</strong> <p>{powerstats.speed}</p>
                            </div>
                            <div className="col">
                            <strong>Durability</strong> <p>{powerstats.durability}</p>
                            </div>
                            <div className="col">
                            <strong>Power</strong> <p>{powerstats.power}</p>
                            </div>
                            <div className="col">
                            <strong>Combat</strong> <p>{powerstats.combat}</p>
                            </div>
                        </div>
                        </div>
                    }

                    { (bandera === true) && 
                    
                        <div className="container animate__animated animate__fadeIn">
                        <div className="row">
                            <div className="col">
                            <strong>Height</strong> <p>{ (appearance.height[0] === '-' ) 
                                ?  'unknown' 
                                : `${appearance.height[0]} / ${appearance.height[1]}`
                                }</p>
                            </div>
                            <div className="col">
                            <strong>Weight</strong> <p> { (appearance.weight[0] === '- lb' ) 
                                ?  'unknown' 
                                : `${appearance.weight[0]} / ${appearance.weight[1]}`
                                }</p>
                            </div>
                            <div className="col">
                            <strong>Aliases</strong> <p>{  `${(Object.values(biography.aliases))}` }</p>
                            </div>
                            <div className="col">
                            <strong>Work</strong> <p>{work.occupation} </p>
                            </div>
                            <div className="col">
                            <strong>Eye-color</strong> <p>{appearance['eye-color']}</p>
                            </div>
                            <div className="col">
                            <strong>Hair-color</strong> <p> {appearance['hair-color']}</p>
                            </div>
                        </div>
                        </div>
                    
                    }                  

            {/* MORE DETAILS AND RETURN BUTTONS */}

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

        {/* ADD OR REMOVE BUTTONS  */}

            { (flag === "add") &&

                <button
                    type="button" 
                    className="btn btn-warning m-1" 
                    onClick={ (e) => handleAdd(e, item) }
                >
                    Add
                </button>
            }

            { (flag === "remove") && 
            
                <button
                    type="button" 
                    className="btn btn-danger m-1" 
                    onClick={ (e) => handleRemove(e, item.id)}
                >
                    Remove
                </button>
            
            }
                                         
                </div>
                </div>
                
            </div>
            </div>

        </>
    )
}
