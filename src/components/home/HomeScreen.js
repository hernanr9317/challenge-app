import { React, useCallback, useState } from 'react';
import { Card } from '../ui/Card';
import { getDataAxios } from './../../helpers/getDataAxios';
import  Swal  from 'sweetalert2';
import { debounce } from './../../helpers/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { loadingFalse, loadingTrue } from './../../actions/heroesSearch';
import { addTeamGoods, addTeamBads, setTeam } from './../../actions/team';


export const HomeScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.heroesSearch );
    const { team: teamValues} = useSelector( state => state.team );



    const [heroes, setHeroes] = useState([]);

    

    const handleChange = (e) => {

        const {value} = e.target;

        if(value.length > 1){

            dispatch( loadingTrue() )

            getDataAxios(value).then((data) => {
                
                dispatch( loadingFalse() )
    
                setHeroes(data);
    
           });
        }else{
            setHeroes([]);
        }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const optimisedVersion = useCallback( debounce(handleChange, 500), [] );


    
    
    const handleAdd = (e,item) => {
        
        e.preventDefault();
        
        const goods1 = teamValues.filter( pjs => pjs.biography.alignment === "good"); 
       
        const bads1 = teamValues.filter( pjs => pjs.biography.alignment === "bad");
        
      
        if( teamValues.find(pjs => pjs.id === item.id) ){
            Swal.fire({
                icon: 'info',
                title:'The character is already on the list'
            });  
            }else if( teamValues.length >= 6){
                Swal.fire({
                    icon: 'info',
                    title:'Full team'
                });        
                        }else{

                            if( (goods1.length < 3) && (item.biography.alignment === "good") ){
                                // setTeam1([...team, item]);
                                dispatch( setTeam(item) )
                            }else if( (bads1.length < 3) && (item.biography.alignment === "bad") ){
                                // setTeam1([...team, item]);
                                dispatch( setTeam(item) )
                            }else {
                                Swal.fire({
                                    icon: 'info',
                                    title:'Good or Bad characters full'
                                });
                            }

                            if( (goods1.length < 3) && (item.biography.alignment === "good") ){ dispatch( addTeamGoods() ) }

                            
                            if( (bads1.length < 3) && (item.biography.alignment === "bad") ){ dispatch( addTeamBads() ) }
        }
    }
    

    
        return(
            <>
            
            <div className="container animate__animated animate__bounce animate__fadeIn">
                
                <h1>Build team</h1>
                <hr />
                
                <div className="row ">
    
                    <div className="col">
                    <div className="d-flex align-items-center">
                        <h4>Character search </h4>
                        <h5 className="ms-auto">Team {teamValues.length}/6</h5>
                        
                    </div>
                        
                    <div className="inputcontainer">
                        <input 
                            type="text"
                            name={'search'} 
                            placeholder="Search Something..."
                            className="form-control"
                            autoComplete = "off"
                            onChange={ optimisedVersion }    
                            />
                        { loading && 
                        <div className="icon-container">
                            <span className="text-dark me-2">Loading</span>
                            <i className="loader"></i>
                        </div>    
                        }    
                     </div>
    

                            <div className="card-group">
                            { (heroes) && heroes.map( item =>(     
                                <div className="col-md-auto m-2" key={item.id}>
                                        <Card {...item} handleAdd={handleAdd} item={item} flag={"add"}/>  
                                </div>
                            ))}       
                        </div> 
                            { 
                                (!heroes) && 
                                    <div className="alert alert-danger d-flex align-items-center mt-1" role="alert">
                                        Characters not found.
                                </div>
                            }


                    </div>
    
                </div>
            </div>
            </>
        ) 

}
